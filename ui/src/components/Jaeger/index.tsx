import IconButton from "@mui/material/IconButton";
import { useEffect, useRef } from "react";
import { ddClient } from "../../dockerDesktopClient";
import { groupBy } from "../../utils/groupBy";
import { CodeObjectInsight } from "../Assets/AssetInsights/types";
import { CrossIcon } from "../common/icons/CrossIcon";
import * as s from "./styles";
import {
  GetSpansData,
  JaegerMessageData,
  JaegerProps,
  SpanData,
  SpanInsight,
} from "./types";

const JAEGER_QUERY_HOSTNAME = "http://localhost:5180";

const MAX_SPAN_COUNT_TO_FETCH = 500;

const actions = {
  GET_SPANS_DATA: "GET_SPANS_DATA",
  SET_SPANS_DATA: "SET_SPANS_DATA",
  GO_TO_INSIGHTS: "GO_TO_INSIGHTS",
};

const sendDigmaMessage = (
  window: Window | undefined | null,
  action: string,
  payload: unknown
) => {
  window?.postMessage(
    {
      type: "digma",
      action,
      payload,
    },
    "*"
  );
};

const fetchInsights = async (codeObjectIds: string[], environment: string) => {
  const insights = (await ddClient.extension.vm?.service?.post(
    `/environments/${encodeURIComponent(environment)}/insights`,
    { codeObjectIds, environment }
  )) as CodeObjectInsight[];

  return insights;
};

export const Jaeger = (props: JaegerProps) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const jaegerWindow = iframeRef.current?.contentWindow;

    const handleJaegerMessage = async (e: MessageEvent<JaegerMessageData>) => {
      if (e.origin === JAEGER_QUERY_HOSTNAME) {
        switch (e.data.action) {
          case actions.GET_SPANS_DATA:
            const spans = (e.data.payload as GetSpansData).spans;

            if (spans.length > MAX_SPAN_COUNT_TO_FETCH) {
              sendDigmaMessage(jaegerWindow, actions.SET_SPANS_DATA, {});
              break;
            }

            const codeObjectIdsToFetch = spans
              .filter((x) => typeof x.spanCodeObjectId === "string")
              .map((x) => x.spanCodeObjectId) as string[];

            const insights = await fetchInsights(
              codeObjectIdsToFetch,
              props.environment
            );

            const groupedInsights = groupBy(insights, "prefixedCodeObjectId");

            const payload = spans.reduce((acc, curr) => {
              let insights: SpanInsight[] = [];

              if (curr.spanCodeObjectId) {
                const spanInsights = groupedInsights[curr.spanCodeObjectId];

                if (spanInsights) {
                  insights = spanInsights.map((x) => ({
                    type: x.type,
                    importance: x.importance,
                  }));
                }
              }

              return {
                ...acc,
                [curr.id]: {
                  hasResolvedCodeLocation: false,
                  insights,
                },
              };
            }, {});

            sendDigmaMessage(jaegerWindow, actions.SET_SPANS_DATA, payload);
            break;
          case actions.GO_TO_INSIGHTS:
            props.onSpanSelect(e.data.payload as SpanData);
            break;
        }
      }
    };

    window.addEventListener("message", handleJaegerMessage);

    return () => {
      window.removeEventListener("message", handleJaegerMessage);
    };
  }, [iframeRef.current, props.environment]);

  const handleJaegerCloseButtonClick = () => {
    props.onClose();
  };

  const traces = props.traces.map((x) => ({
    ...x,
    id: x.id.toLocaleLowerCase(),
  }));

  const title = traces
    ? traces.length > 1
      ? `Comparing: A sample ${traces[0].id} trace with a ${traces[1].id} trace`
      : `${traces[0].name || `Trace ${traces[0].id}`}`
    : "";

  const url =
    traces.length > 1
      ? `${JAEGER_QUERY_HOSTNAME}/trace/${traces[0].id}...${traces[1].id}?cohort=${traces[0].id}&cohort=${traces[1].id}&uiEmbed=v0`
      : `${JAEGER_QUERY_HOSTNAME}/trace/${traces[0].id}?uiEmbed=v0`;

  return (
    <s.Container>
      <s.Header>
        <s.Title title={title}>{title}</s.Title>
        <IconButton onClick={handleJaegerCloseButtonClick}>
          <CrossIcon size={16} color={"#9b9b9b"} />
        </IconButton>
      </s.Header>
      <s.Iframe src={url} ref={iframeRef} />
    </s.Container>
  );
};
