import { useTheme } from "@mui/material";
import { ForwardedRef, forwardRef } from "react";
import { timeAgo } from "../../../../utils/timeAgo";
import { getInsightTypeOrderPriority } from "../../AssetInsights";
import { getAssetTypeInfo } from "../../utils/getAssetTypeInfo";
import { getInsightImportanceColor } from "../../utils/getInsightImportanceColor";
import { getInsightTypeInfo } from "../../utils/getInsightTypeInfo";
import * as s from "./styles";
import { AssetEntryProps } from "./types";

const AssetEntryComponent = (
  props: AssetEntryProps,
  ref: ForwardedRef<HTMLDivElement>
) => {
  const theme = useTheme();

  const handleContainerClick = () => {
    props.onClick(props.entry);
  };

  const name = props.entry.span.displayName;
  const otherServices = props.entry.relatedServices.filter(
    (service) => service !== props.entry.serviceName
  );
  const performanceDuration = props.entry.durationPercentiles.find(
    (duration) => duration.percentile === 0.5
  )?.currentDuration;

  const lastSeenDateTime = props.entry.lastSpanInstanceInfo.startTime;

  const sortedInsights = [...props.entry.insights].sort(
    (a, b) =>
      a.importance - b.importance ||
      getInsightTypeOrderPriority(a.type) - getInsightTypeOrderPriority(b.type)
  );

  const assetTypeInfo = getAssetTypeInfo(props.entry.assetType);

  return (
    <s.Container
      elevation={0}
      id={props.id}
      ref={ref}
      onClick={handleContainerClick}
    >
      <s.Header>
        {assetTypeInfo?.icon && (
          <s.AssetTypeIconContainer>
            <assetTypeInfo.icon size={20} color={"#7891d0"} />
          </s.AssetTypeIconContainer>
        )}
        <s.Name noWrap={true} title={name}>
          {name}
        </s.Name>
        <s.InsightIconsContainer>
          {sortedInsights.map((insight) => {
            const insightTypeInfo = getInsightTypeInfo(insight.type);
            const insightIconColor = getInsightImportanceColor(
              insight.importance,
              theme
            );

            return (
              insightTypeInfo && (
                <s.InsightIconContainer
                  key={insight.type}
                  title={insightTypeInfo?.label || insight.type}
                >
                  <insightTypeInfo.icon color={insightIconColor} size={24} />
                </s.InsightIconContainer>
              )
            );
          })}
        </s.InsightIconsContainer>
      </s.Header>
      <s.StatsContainer>
        <s.Stats>
          <span>Services</span>
          <s.ServicesContainer>
            <s.ServiceName title={props.entry.serviceName}>
              {props.entry.serviceName}
            </s.ServiceName>
            {otherServices.length > 0 && (
              <span title={otherServices.join(", ")}>
                +{otherServices.length}
              </span>
            )}
          </s.ServicesContainer>
        </s.Stats>
        <s.Stats>
          <span>Performance</span>
          <s.ValueContainer>
            {performanceDuration ? performanceDuration.value : "N/A"}
            {performanceDuration && (
              <s.Suffix>{performanceDuration.unit}</s.Suffix>
            )}
          </s.ValueContainer>
        </s.Stats>
        <s.Stats>
          <span>Last</span>
          <s.ValueContainer title={new Date(lastSeenDateTime).toString()}>
            {timeAgo(lastSeenDateTime)}
            <s.Suffix>ago</s.Suffix>
          </s.ValueContainer>
        </s.Stats>
      </s.StatsContainer>
    </s.Container>
  );
};

export const AssetEntry = forwardRef(AssetEntryComponent);
