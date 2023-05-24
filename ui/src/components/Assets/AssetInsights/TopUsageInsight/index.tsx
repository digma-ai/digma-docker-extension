import { roundTo } from "../../../../utils/roundTo";
import { InsightCard } from "../InsightCard";
import { Pagination } from "../Pagination";
import * as s from "./styles";
import { TopUsageInsightProps } from "./types";

export const TopUsageInsight = (props: TopUsageInsightProps) => (
  <InsightCard
    data={props.insight}
    content={
      <s.FlowList>
        <Pagination>
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
        </Pagination>
      </s.FlowList>
    }
  />
);
