import { CrosshairIcon } from "../../../common/icons/CrosshairIcon";
import { ExtendedAssetEntry } from "../../types";
import { findAssetBySpanCodeObjectId } from "../../utils/findAssetBySpanCodeObjectId";
import { InsightCard } from "../InsightCard";
import { Link } from "../styles";
import { Trace } from "../types";
import * as s from "./styles";
import { NPlusOneInsightProps } from "./types";

export const NPlusOneInsight = (props: NPlusOneInsightProps) => {
  const handleSpanLinkClick = (asset: ExtendedAssetEntry) => {
    props.onAssetSelect(asset);
  };

  const handleTraceButtonClick = (trace: Trace) => {
    props.onTraceSelect(trace);
  };

  const asset = props.insight.clientSpanCodeObjectId
    ? findAssetBySpanCodeObjectId(
        props.assets,
        props.insight.clientSpanCodeObjectId,
        props.asset.serviceName
      )
    : undefined;

  const spanName = props.insight.clientSpanName || undefined;
  const traceId = props.insight.traceId;

  return (
    <InsightCard
      data={props.insight}
      content={
        <s.ContentContainer>
          <s.Description>Check the following SELECT statement:</s.Description>
          <s.SpanContainer>
            <span>
              {asset ? (
                <Link onClick={() => handleSpanLinkClick(asset)}>
                  {spanName}
                </Link>
              ) : (
                spanName
              )}
            </span>
            {traceId && (
              <s.Button
                onClick={() =>
                  handleTraceButtonClick({
                    name: spanName,
                    id: traceId,
                  })
                }
                icon={{ component: CrosshairIcon, size: 16 }}
              >
                Trace
              </s.Button>
            )}
          </s.SpanContainer>
          <s.Stats>
            <s.Stat>
              <s.Description>Repeats</s.Description>
              <span>{props.insight.occurrences} (median)</span>
            </s.Stat>
            <s.Stat>
              <s.Description>Duration</s.Description>
              <span>
                {props.insight.duration.value} {props.insight.duration.unit}
              </span>
            </s.Stat>
          </s.Stats>
          <s.Description>Affected endpoints:</s.Description>
          <div>
            {props.insight.endpoints.map((x) => {
              const asset = findAssetBySpanCodeObjectId(
                props.assets,
                x.endpointInfo.entrySpanCodeObjectId,
                x.endpointInfo.serviceName
              );

              return (
                <s.Endpoint key={x.endpointInfo.entrySpanCodeObjectId}>
                  {asset ? (
                    <Link onClick={() => handleSpanLinkClick(asset)}>
                      {x.endpointInfo.route}
                    </Link>
                  ) : (
                    x.endpointInfo.route
                  )}
                  <s.Stat>
                    <s.Description>Repeats</s.Description>
                    <span>{x.occurrences} (median)</span>
                  </s.Stat>
                </s.Endpoint>
              );
            })}
          </div>
        </s.ContentContainer>
      }
    />
  );
};
