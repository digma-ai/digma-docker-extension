import { ExtendedAssetEntry } from "../../types";
import { findAssetBySpanCodeObjectId } from "../../utils/findAssetBySpanCodeObjectId";
import { toSpanCodeObjectId } from "../../utils/toSpanCodeObjectId";
import { trimEndpointScheme } from "../../utils/trimEndpointScheme";
import { InsightCard } from "../InsightCard";
import { Link } from "../styles";
import * as s from "./styles";
import { ScalingIssueInsightProps } from "./types";

export const ScalingIssueInsight = (props: ScalingIssueInsightProps) => {
  console.log("ScalingIssueInsight");
  console.log(props.insight);

  const handleLinkClick = (asset: ExtendedAssetEntry) => {
    props.onAssetSelect(asset);
  };

  return (
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
                {props.insight.minDuration.value}{" "}
                {props.insight.minDuration.unit} -{" "}
                {props.insight.maxDuration.value}{" "}
                {props.insight.maxDuration.unit}
              </span>
            </s.Stat>
          </s.Stats>
          {props.insight.rootCauseSpans.length > 0 && (
            <s.List>
              <s.Description>Caused by:</s.Description>
              {props.insight.rootCauseSpans.map((span) => {
                const asset = findAssetBySpanCodeObjectId(
                  props.assets,
                  span.spanCodeObjectId,
                  props.asset.serviceName
                );

                const spanName = span.displayName;

                return (
                  <span key={span.spanCodeObjectId}>
                    {asset ? (
                      <Link onClick={() => handleLinkClick(asset)}>
                        {spanName}
                      </Link>
                    ) : (
                      spanName
                    )}
                  </span>
                );
              })}
            </s.List>
          )}
          {props.insight.affectedEndpoints.length > 0 && (
            <s.List>
              <s.Description>Affected endpoints:</s.Description>

              {props.insight.affectedEndpoints.map((endpoint) => {
                const asset = findAssetBySpanCodeObjectId(
                  props.assets,
                  toSpanCodeObjectId(
                    endpoint.instrumentationLibrary,
                    endpoint.name
                  ),
                  endpoint.serviceName
                );

                const endpointRoute = trimEndpointScheme(endpoint.route);

                return (
                  <span key={endpoint.route}>
                    {asset ? (
                      <Link onClick={() => handleLinkClick(asset)}>
                        {endpointRoute}
                      </Link>
                    ) : (
                      endpointRoute
                    )}
                  </span>
                );
              })}
            </s.List>
          )}
        </s.ContentContainer>
      }
    />
  );
};
