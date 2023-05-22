import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { useTheme } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useEffect, useRef, useState } from "react";
import { ddClient } from "../../../dockerDesktopClient";
import { usePrevious } from "../../../hooks/usePrevious";
import { Loader } from "../../common/Loader";
import { NoData } from "../NoData";
import { InsightType } from "../types";
import { getAssetTypeInfo } from "../utils";
import { BottleneckInsight } from "./BottleneckInsight";
import { DurationBreakdownInsight } from "./DurationBreakdownInsight";
import { DurationInsight } from "./DurationInsight";
import { EndpointNPlusOneInsight } from "./EndpointNPlusOneInsight";
import { ErrorsInsight } from "./ErrorsInsight";
import { InsightCard } from "./InsightCard";
import { NPlusOneInsight } from "./NPlusOneInsight";
import { ScalingIssueInsight } from "./ScalingIssueInsight";
import { ScalingIssueRootCauseInsight } from "./ScalingIssueRootCauseInsight";
import { SlowEndpointInsight } from "./SlowEndpointInsight";
import { SpanBottleneckInsight } from "./SpanBottleneckInsight";
import { TopUsageInsight } from "./TopUsageInsight";
import { TrafficInsight } from "./TrafficInsight";
import * as s from "./styles";
import {
  isCodeObjectErrorsInsight,
  isCodeObjectHotSpotInsight,
  isEndpointHighUsageInsight,
  isEndpointLowUsageInsight,
  isEndpointNormalUsageInsight,
  isEndpointSlowestSpansInsight,
  isEndpointSuspectedNPlusOneInsight,
  isSlowEndpointInsight,
  isSpanDurationBreakdownInsight,
  isSpanDurationsInsight,
  isSpanEndpointBottleneckInsight,
  isSpanNPlusOneInsight,
  isSpanScalingInsight,
  isSpanScalingRootCauseInsight,
  isSpanUsagesInsight,
} from "./typeGuards";
import { AssetInsightsProps, CodeObjectInsight } from "./types";

const REFRESH_INTERVAL = 10 * 1000; // in milliseconds

const renderInsightCard = (insight: CodeObjectInsight): JSX.Element => {
  if (isSpanDurationsInsight(insight)) {
    return <DurationInsight key={insight.type} insight={insight} />;
  }
  if (isSpanDurationBreakdownInsight(insight)) {
    return <DurationBreakdownInsight key={insight.type} insight={insight} />;
  }
  if (isSpanUsagesInsight(insight)) {
    return <TopUsageInsight key={insight.type} insight={insight} />;
  }
  if (isSpanEndpointBottleneckInsight(insight)) {
    return <BottleneckInsight key={insight.type} insight={insight} />;
  }
  if (isEndpointSlowestSpansInsight(insight)) {
    return <SpanBottleneckInsight key={insight.type} insight={insight} />;
  }
  if (isSlowEndpointInsight(insight)) {
    return <SlowEndpointInsight key={insight.type} insight={insight} />;
  }
  if (
    isEndpointLowUsageInsight(insight) ||
    isEndpointNormalUsageInsight(insight) ||
    isEndpointHighUsageInsight(insight)
  ) {
    return <TrafficInsight key={insight.type} insight={insight} />;
  }
  if (isCodeObjectErrorsInsight(insight)) {
    return <ErrorsInsight key={insight.type} insight={insight} />;
  }
  if (isEndpointSuspectedNPlusOneInsight(insight)) {
    return <EndpointNPlusOneInsight key={insight.type} insight={insight} />;
  }
  if (isSpanNPlusOneInsight(insight)) {
    return <NPlusOneInsight key={insight.type} insight={insight} />;
  }
  if (isSpanScalingInsight(insight)) {
    return <ScalingIssueInsight key={insight.type} insight={insight} />;
  }
  if (isSpanScalingRootCauseInsight(insight)) {
    return (
      <ScalingIssueRootCauseInsight key={insight.type} insight={insight} />
    );
  }
  if (isCodeObjectHotSpotInsight(insight)) {
    return (
      <InsightCard
        key={insight.type}
        data={insight}
        content={
          <s.Description>
            Major errors occur or propagate through this function
          </s.Description>
        }
      />
    );
  }

  return <InsightCard key={insight.type} data={insight} />;
};

export const AssetInsights = (props: AssetInsightsProps) => {
  const [insights, setInsights] = useState<CodeObjectInsight[]>();
  const previousEnvironment = usePrevious(props.environment);
  const insightsContainerRef = useRef<HTMLDivElement>(null);

  const theme = useTheme();

  const assetTypeInfo = getAssetTypeInfo(props.assetEntry.assetType);

  const codeObjectIds = [
    props.assetEntry.endpointCodeObjectId ||
      props.assetEntry.span.spanCodeObjectId,
    // `method:${props.assetEntry.span.methodCodeObjectId}`,
  ];

  // console.log(codeObjectIds);

  const handleAssetsLinkClick = () => {
    props.onGoToAsset(props.assetEntry);
  };

  const fetchInsights = async () => {
    const insights = (await ddClient.extension.vm?.service?.post("/insights", {
      codeObjectIds,
      environment: props.environment,
    })) as CodeObjectInsight[];

    console.log("Insights have been fetched:", insights);

    // const spanInsights = insights.filter(
    //   (x) => isSpanInsight(x) && x.type !== InsightType.SpanUsageStatus
    // );
    // const groupedSpanInsights = groupBy(spanInsights, [
    //   "spanInfo",
    //   "spanCodeObjectId",
    // ]);

    // console.log(groupedSpanInsights);

    // if (Object.keys(groupedSpanInsights).length > 1) {
    //   console.log("groups: ", groupedSpanInsights);
    // }

    const filteredInsights = insights.filter(
      (x) => x.type !== InsightType.SpanUsageStatus
    );

    const sortedInsights = filteredInsights.sort(
      (a, b) => a.importance - b.importance
    );
    setInsights(sortedInsights);
  };

  useEffect(() => {
    fetchInsights();
    const refreshInterval = setInterval(() => {
      fetchInsights();
    }, REFRESH_INTERVAL);

    return () => {
      clearInterval(refreshInterval);
    };
  }, []);

  useEffect(() => {
    if (
      previousEnvironment !== props.environment &&
      insightsContainerRef.current
    ) {
      insightsContainerRef.current.scrollTop = 0;
    }
  }, [previousEnvironment, props.environment]);

  return (
    <s.Container>
      <s.Header>
        <s.Breadcrumbs>
          <s.Breadcrumb onClick={handleAssetsLinkClick}>
            <ChevronLeftIcon />
            <Typography variant={"h4"} component={"span"}>
              Assets
            </Typography>
          </s.Breadcrumb>
          <s.Breadcrumb>
            {assetTypeInfo?.icon && (
              <s.AssetTypeIconContainer>
                <assetTypeInfo.icon
                  size={24}
                  color={theme.palette.text.primary}
                />
              </s.AssetTypeIconContainer>
            )}
            <Typography
              title={props.assetEntry.span.displayName}
              variant={"h4"}
              component={"span"}
              noWrap={true}
            >
              {props.assetEntry.span.displayName}
            </Typography>
          </s.Breadcrumb>
        </s.Breadcrumbs>
      </s.Header>
      {insights ? (
        <s.InsightsContainer ref={insightsContainerRef}>
          {insights.map((insight) => renderInsightCard(insight))}
        </s.InsightsContainer>
      ) : (
        <NoData
          icon={<Loader status={"pending"} size={86} />}
          title={"Loading Insights..."}
        />
      )}
    </s.Container>
  );
};
