import { Tooltip, useTheme } from "@mui/material";
import { ForwardedRef, forwardRef } from "react";
import { DefaultTheme } from "styled-components";
import { formatTimeDistance } from "../../../../utils/formatTimeDistance";
import { GlobeIcon } from "../../../common/icons/GlobeIcon";
import { getInsightTypeOrderPriority } from "../../AssetInsights";
import { InsightType, SORTING_CRITERION } from "../../types";
import { getAssetTypeInfo } from "../../utils/getAssetTypeInfo";
import { getInsightImportanceColor } from "../../utils/getInsightImportanceColor";
import { getInsightTypeInfo } from "../../utils/getInsightTypeInfo";
import * as s from "./styles";
import { AssetEntryProps } from "./types";

const getImpactScoreIndicator = (score: number) => {
  if (score < 0) {
    return null;
  }

  return (
    <s.ImpactScoreIndicatorContainer>
      <s.ImpactScoreIndicator $score={score} />
    </s.ImpactScoreIndicatorContainer>
  );
};

const getImpactScoreLabel = (score: number) => {
  if (score < 0) {
    return "No data";
  }

  if (score < 0.4) {
    return "Low";
  }

  if (score < 0.8) {
    return "Medium";
  }

  return "High";
};

const getServiceIconColor = (theme: DefaultTheme) => {
  switch (theme.palette.mode) {
    case "light":
      return "#4d668a";
    case "dark":
      return "#dadada";
  }
};

const AssetEntryComponent = (
  props: AssetEntryProps,
  ref: ForwardedRef<HTMLDivElement>
) => {
  const theme = useTheme();
  const serviceIconColor = getServiceIconColor(theme);

  const handleContainerClick = () => {
    props.onClick(props.entry);
  };

  const name = props.entry.displayName;
  const otherServices = props.entry.services.slice(1);
  const performanceDuration = props.entry.p50;
  const slowestFivePercentDuration = props.entry.p95;
  const lastSeenDateTime = props.entry.latestSpanTimestamp;

  // Do not show unimplemented insights
  const filteredInsights = props.entry.insights.filter(
    (x) =>
      ![
        InsightType.SpanScalingWell,
        InsightType.SpanScalingInsufficientData,
        InsightType.EndpointSessionInView,
        InsightType.EndpointChattyApi
      ].includes(x.type as InsightType)
  );

  const sortedInsights = [...filteredInsights].sort(
    (a, b) =>
      a.importance - b.importance ||
      getInsightTypeOrderPriority(a.type) - getInsightTypeOrderPriority(b.type)
  );

  const assetTypeInfo = getAssetTypeInfo(props.entry.assetType);

  const servicesTitle = props.entry.services.join(", ");

  const timeDistanceString = formatTimeDistance(lastSeenDateTime, {
    format: "short",
    withDescriptiveWords: false
  }).replace(" ", "");
  const timeDistanceTitle = new Date(lastSeenDateTime).toString();

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
        <Tooltip title={name} placement={"top"}>
          <s.Name noWrap={true}>{name}</s.Name>
        </Tooltip>
        <s.InsightIconsContainer>
          {sortedInsights.map((insight) => {
            const insightTypeInfo = getInsightTypeInfo(insight.type);
            const insightIconColor = getInsightImportanceColor(
              insight.importance,
              theme
            );

            return (
              insightTypeInfo && (
                <Tooltip
                  key={insight.type}
                  title={insightTypeInfo?.label || insight.type}
                  placement={"top"}
                >
                  <s.InsightIconContainer>
                    <insightTypeInfo.icon color={insightIconColor} size={24} />
                  </s.InsightIconContainer>
                </Tooltip>
              )
            );
          })}
        </s.InsightIconsContainer>
      </s.Header>
      <s.StatsContainer>
        <s.Stats>
          <span>Services</span>
          <Tooltip title={servicesTitle} placement={"top"}>
            <s.ServicesContainer>
              <s.ServiceIconContainer>
                <GlobeIcon color={serviceIconColor} />
              </s.ServiceIconContainer>
              <s.ServiceName title={props.entry.services[0]}>
                {props.entry.services[0]}
              </s.ServiceName>
              {otherServices.length > 0 && <span>+{otherServices.length}</span>}
            </s.ServicesContainer>
          </Tooltip>
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
          <Tooltip title={timeDistanceTitle} placement={"top"}>
            <s.ValueContainer>
              {timeDistanceString}
              <s.Suffix>ago</s.Suffix>
            </s.ValueContainer>
          </Tooltip>
        </s.Stats>
        <s.Stats>
          <span>Slowest 5%</span>
          <s.ValueContainer>
            {slowestFivePercentDuration
              ? slowestFivePercentDuration.value
              : "N/A"}
            {slowestFivePercentDuration && (
              <s.Suffix>{slowestFivePercentDuration.unit}</s.Suffix>
            )}
          </s.ValueContainer>
        </s.Stats>
        {props.entry.impactScores && (
          <>
            <s.Stats>
              <span>Performance impact</span>
              <Tooltip
                title={props.entry.impactScores.ScoreExp25}
                placement={"top"}
              >
                <s.ValueContainer>
                  {getImpactScoreLabel(props.entry.impactScores.ScoreExp25)}
                  {props.sortingCriterion ===
                    SORTING_CRITERION.PERFORMANCE_IMPACT &&
                    getImpactScoreIndicator(
                      props.entry.impactScores.ScoreExp25
                    )}
                </s.ValueContainer>
              </Tooltip>
            </s.Stats>
            <s.Stats>
              <span>Overall impact</span>
              <Tooltip
                title={props.entry.impactScores.ScoreExp1000}
                placement={"top"}
              >
                <s.ValueContainer>
                  {getImpactScoreLabel(props.entry.impactScores.ScoreExp1000)}
                  {props.sortingCriterion ===
                    SORTING_CRITERION.OVERALL_IMPACT &&
                    getImpactScoreIndicator(
                      props.entry.impactScores.ScoreExp1000
                    )}
                </s.ValueContainer>
              </Tooltip>
            </s.Stats>
          </>
        )}
      </s.StatsContainer>
    </s.Container>
  );
};

export const AssetEntry = forwardRef(AssetEntryComponent);
