import { roundTo } from "../../../../utils/roundTo";
import { ExtendedAssetEntry } from "../../types";
import { findAssetBySpanCodeObjectId } from "../../utils/findAssetBySpanCodeObjectId";
import { toSpanCodeObjectId } from "../../utils/toSpanCodeObjectId";
import { trimEndpointScheme } from "../../utils/trimEndpointScheme";
import { InsightCard } from "../InsightCard";
import { Link } from "../styles";
import * as s from "./styles";
import { BottleneckInsightProps } from "./types";

export const BottleneckInsight = (props: BottleneckInsightProps) => {
  console.log("BottleneckInsight");
  console.log(props.insight);

  const handleEndpointLinkClick = (asset: ExtendedAssetEntry) => {
    props.onAssetSelect(asset);
  };

  return (
    <InsightCard
      data={props.insight}
      content={
        <s.EndpointList>
          {props.insight.slowEndpoints.map((endpoint, i) => {
            const asset = findAssetBySpanCodeObjectId(
              props.assets,
              toSpanCodeObjectId(
                endpoint.endpointInfo.instrumentationLibrary,
                endpoint.endpointInfo.spanName
              ),
              endpoint.endpointInfo.serviceName
            );

            const endpointName = `${
              endpoint.endpointInfo.serviceName
            }:${trimEndpointScheme(endpoint.endpointInfo.route)}`;

            return (
              <s.Endpoint key={i}>
                <s.EndpointName>
                  {asset ? (
                    <Link onClick={() => handleEndpointLinkClick(asset)}>
                      {endpointName}
                    </Link>
                  ) : (
                    endpointName
                  )}
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
            );
          })}
        </s.EndpointList>
      }
    />
  );
};
