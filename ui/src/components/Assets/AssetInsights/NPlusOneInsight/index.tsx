import { CrosshairIcon } from "../../../common/icons/CrosshairIcon";
import { InsightCard } from "../InsightCard";
import { Link } from "../styles";
import { Trace } from "../types";
import * as s from "./styles";
import { NPlusOneInsightProps } from "./types";

export const NPlusOneInsight = (props: NPlusOneInsightProps) => {
  const handleSpanLinkClick = (spanCodeObjectId: string) => {
    props.onAssetSelect(spanCodeObjectId);
  };

  const handleTraceButtonClick = (trace: Trace) => {
    props.onTraceSelect(trace);
  };

  const id = props.insight.clientSpanCodeObjectId;
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
              {id ? (
                <Link onClick={() => handleSpanLinkClick(id)}>{spanName}</Link>
              ) : (
                spanName
              )}
            </span>
            {traceId && (
              <s.Button
                onClick={() =>
                  handleTraceButtonClick({
                    name: spanName,
                    id: traceId
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
              const id = x.endpointInfo.entrySpanCodeObjectId;

              return (
                <s.Endpoint key={id}>
                  <Link onClick={() => handleSpanLinkClick(id)}>
                    {x.endpointInfo.route}
                  </Link>
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
