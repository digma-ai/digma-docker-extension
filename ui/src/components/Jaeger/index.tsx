import IconButton from "@mui/material/IconButton";
import { useEffect, useRef } from "react";
import { ddClient } from "../../dockerDesktopClient";
import { groupBy } from "../../utils/groupBy";
import { isSpanInsight } from "../Assets/AssetInsights/typeGuards";
import { CodeObjectInsight } from "../Assets/AssetInsights/types";
import { CrossIcon } from "../common/icons/CrossIcon";
import * as s from "./styles";
import {
  GetSpansData,
  JaegerMessageData,
  JaegerProps,
  SpanData
} from "./types";

const JAEGER_QUERY_HOSTNAME = "http://localhost:5180";

const MAX_SPAN_COUNT_TO_FETCH = 500;

const actions = {
  GET_SPANS_DATA: "GET_SPANS_DATA",
  SET_SPANS_DATA: "SET_SPANS_DATA",
  GO_TO_INSIGHTS: "GO_TO_INSIGHTS"
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
      payload
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

const getSpansData = async (data: JaegerMessageData, environment: string) => {
  const spans = (data.payload as GetSpansData).spans;

  if (spans.length > MAX_SPAN_COUNT_TO_FETCH) {
    return {};
  }

  const codeObjectIdsToFetch = spans
    .map((x) =>
      [
        x.spanCodeObjectId,
        x.methodCodeObjectId && `method:${x.methodCodeObjectId}`
      ].filter((x) => typeof x === "string")
    )
    .flat() as string[];

  const insights = await fetchInsights(codeObjectIdsToFetch, environment);

  const spanInsights = insights.filter(isSpanInsight);
  const methodInsights = insights.filter((x) => !isSpanInsight(x));

  const groupedSpanInsights = groupBy(
    spanInsights,
    (x) => x.spanInfo?.spanCodeObjectId || "__ungrouped"
  );
  const groupedMethodInsights = groupBy(methodInsights, (x) => x.codeObjectId);

  const payload = spans.reduce((acc, curr) => {
    const insights: CodeObjectInsight[] = [];

    if (curr.spanCodeObjectId) {
      const spanInsights = groupedSpanInsights[curr.spanCodeObjectId];

      if (spanInsights) {
        insights.push(...spanInsights);
      }
    }

    if (curr.methodCodeObjectId) {
      const methodInsights = groupedMethodInsights[curr.methodCodeObjectId];

      if (methodInsights) {
        insights.push(...methodInsights);
      }
    }

    return {
      ...acc,
      [curr.id]: {
        hasResolvedCodeLocation: false,
        insights: insights.map((x) => ({
          type: x.type,
          importance: x.importance
        }))
      }
    };
  }, {});

  return payload;
};

export const Jaeger = (props: JaegerProps) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const jaegerWindow = iframeRef.current?.contentWindow;

    const handleJaegerMessage = async (e: MessageEvent<JaegerMessageData>) => {
      if (e.origin === JAEGER_QUERY_HOSTNAME) {
        switch (e.data.action) {
          case actions.GET_SPANS_DATA:
            sendDigmaMessage(
              jaegerWindow,
              actions.SET_SPANS_DATA,
              await getSpansData(e.data, props.environment)
            );
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
  }, [iframeRef.current, props.environment, props.onSpanSelect]);

  const handleJaegerCloseButtonClick = () => {
    props.onClose();
  };

  const traces = props.traces.map((x) => ({
    ...x,
    id: x.id.toLocaleLowerCase()
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
