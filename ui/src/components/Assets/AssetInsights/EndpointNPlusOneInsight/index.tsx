import { roundTo } from "../../../../utils/roundTo";
import { InsightCard } from "../InsightCard";
import * as s from "./styles";
import { EndpointNPlusOneInsightProps } from "./types";

const FRACTION_MIN_LIMIT = 0.01;

export const EndpointNPlusOneInsight = (
  props: EndpointNPlusOneInsightProps
) => {
  return (
    <InsightCard
      data={props.insight}
      content={
        <s.ContentContainer>
          <s.Description>Check the following locations:</s.Description>
          <s.SpanList>
            {props.insight.spans.map((span) => {
              const name = span.internalSpan
                ? span.internalSpan.displayName
                : span.clientSpan.displayName;

              const fraction =
                span.fraction < FRACTION_MIN_LIMIT
                  ? "minimal"
                  : `${roundTo(span.fraction, 2)} of request`;

              return (
                <s.Span key={name}>
                  {name}
                  <s.Stats>
                    <s.Stat>
                      <s.Description>Impact</s.Description>
                      <span>{fraction}</span>
                    </s.Stat>
                    <s.Stat>
                      <s.Description>Repeats</s.Description>
                      <span>{span.occurrences}</span>
                    </s.Stat>
                    <s.Stat>
                      <s.Description>Duration</s.Description>
                      <span>
                        {span.duration.value} {span.duration.unit}
                      </span>
                    </s.Stat>
                  </s.Stats>
                </s.Span>
              );
            })}
          </s.SpanList>
        </s.ContentContainer>
      }
    />
  );
};
