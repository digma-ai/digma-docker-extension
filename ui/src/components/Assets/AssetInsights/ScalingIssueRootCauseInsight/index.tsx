import { trimEndpointScheme } from "../../../../utils/trimEndpointScheme";
import { InsightCard } from "../InsightCard";
import * as s from "./styles";
import { ScalingIssueRootCauseInsightProps } from "./types";

export const ScalingIssueRootCauseInsight = (
  props: ScalingIssueRootCauseInsightProps
) => {
  return (
    <InsightCard
      data={props.insight}
      content={
        <s.ContentContainer>
          <s.Description>
            Significant performance degradation here
          </s.Description>
          <s.Description>Affected endpoints:</s.Description>
          <s.EndpointList>
            {props.insight.affectedEndpoints.map((endpoint) => (
              <s.Endpoint key={endpoint.route}>
                {trimEndpointScheme(endpoint.route)}
              </s.Endpoint>
            ))}
          </s.EndpointList>
        </s.ContentContainer>
      }
    />
  );
};
