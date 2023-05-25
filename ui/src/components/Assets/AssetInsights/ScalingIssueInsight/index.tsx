import { trimEndpointScheme } from "../../../../utils/trimEndpointScheme";
import { InsightCard } from "../InsightCard";
import * as s from "./styles";
import { ScalingIssueInsightProps } from "./types";

export const ScalingIssueInsight = (props: ScalingIssueInsightProps) => (
  <InsightCard
    data={props.insight}
    content={
      <s.ContentContainer>
        <s.Description>
          Significant performance degradation at{" "}
          {props.insight.turningPointConcurrency} executions/second
        </s.Description>
        <s.Stats>
          <s.Stat>
            <s.Description>Tested concurrency</s.Description>
            <span>{props.insight.maxConcurrency}</span>
          </s.Stat>
          <s.Stat>
            <s.Description>Duration</s.Description>
            <span>
              {props.insight.minDuration.value} {props.insight.minDuration.unit}{" "}
              - {props.insight.maxDuration.value}{" "}
              {props.insight.maxDuration.unit}
            </span>
          </s.Stat>
        </s.Stats>
        {props.insight.rootCauseSpans.length > 0 && (
          <s.List>
            <s.Description>Caused by:</s.Description>
            {props.insight.rootCauseSpans.map((span) => (
              <span key={span.spanCodeObjectId}>{span.displayName}</span>
            ))}
          </s.List>
        )}
        <s.Description>Affected endpoints:</s.Description>
        {props.insight.affectedEndpoints.length > 0 && (
          <s.List>
            {props.insight.affectedEndpoints.map((endpoint) => (
              <span key={endpoint.route}>
                {trimEndpointScheme(endpoint.route)}
              </span>
            ))}
          </s.List>
        )}
      </s.ContentContainer>
    }
  />
);
