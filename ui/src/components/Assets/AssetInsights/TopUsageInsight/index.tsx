import { roundTo } from "../../../../utils/roundTo";
import { InsightCard } from "../InsightCard";
import * as s from "./styles";
import { TopUsageInsightProps } from "./types";

export const TopUsageInsight = (props: TopUsageInsightProps) => {
  return (
    <InsightCard
      data={props.insight}
      content={
        <s.FlowList>
          {props.insight.flows.map((flow, i) => (
            <s.Flow key={i}>
              {roundTo(flow.percentage, 2)}% {flow.firstService.service}:
              {flow.firstService.span}
              {flow.intermediateSpan && <> -&gt; {flow.intermediateSpan}</>}
              {flow.lastService &&
                `${flow.lastService.service} ${flow.lastService.span}`}
              {flow.lastServiceSpan && <> -&gt; {flow.lastServiceSpan}</>}
            </s.Flow>
          ))}
        </s.FlowList>
      }
    />
  );
};
