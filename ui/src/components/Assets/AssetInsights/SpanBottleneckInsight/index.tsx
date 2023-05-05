import { roundTo } from "../../../../utils/roundTo";
import { InsightCard } from "../InsightCard";
import * as s from "./styles";
import { SpanBottleneckInsightProps } from "./types";

export const SpanBottleneckInsight = (props: SpanBottleneckInsightProps) => {
  return (
    <InsightCard
      data={props.insight}
      content={
        <>
          <s.Description>
            The following spans are slowing request handling
          </s.Description>
          <s.SpanList>
            {props.insight.spans.map((span) => (
              <s.SpanContainer key={span.spanInfo.spanCodeObjectId}>
                <s.Span>{span.spanInfo.displayName}</s.Span>
                <s.Description>
                  {`Slowing ${roundTo(
                    span.probabilityOfBeingBottleneck * 100,
                    2
                  )}% of the requests (~${
                    span.avgDurationWhenBeingBottleneck.value
                  } ${span.avgDurationWhenBeingBottleneck.unit})`}
                </s.Description>
              </s.SpanContainer>
            ))}
          </s.SpanList>
        </>
      }
    />
  );
};
