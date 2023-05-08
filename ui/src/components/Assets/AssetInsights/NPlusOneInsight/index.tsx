import { InsightCard } from "../InsightCard";
import * as s from "./styles";
import { NPlusOneInsightProps } from "./types";

export const NPlusOneInsight = (props: NPlusOneInsightProps) => {
  return (
    <InsightCard
      data={props.insight}
      content={
        <s.ContentContainer>
          <s.Description>Check the following SELECT statement:</s.Description>
          <span>{props.insight.clientSpanName}</span>
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
        </s.ContentContainer>
      }
    />
  );
};
