import { roundTo } from "../../../../utils/roundTo";
import { trimEndpointScheme } from "../../../../utils/trimEndpointScheme";
import { InsightCard } from "../InsightCard";
import * as s from "./styles";
import { BottleneckInsightProps } from "./types";

export const BottleneckInsight = (props: BottleneckInsightProps) => {
  return (
    <InsightCard
      data={props.insight}
      content={
        <s.EndpointList>
          {props.insight.slowEndpoints.map((endpoint, i) => (
            <s.Endpoint key={i}>
              <s.EndpointName>
                {endpoint.endpointInfo.serviceName}:
                {trimEndpointScheme(endpoint.endpointInfo.route)}
                <s.Duration>
                  {endpoint.avgDurationWhenBeingBottleneck.value}{" "}
                  {endpoint.avgDurationWhenBeingBottleneck.unit}
                </s.Duration>
              </s.EndpointName>
              <s.Description>
                Slowing{" "}
                {roundTo(endpoint.probabilityOfBeingBottleneck * 100, 2)}% of
                the requests
              </s.Description>
            </s.Endpoint>
          ))}
        </s.EndpointList>
      }
    />
  );
};
