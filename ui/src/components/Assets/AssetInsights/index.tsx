import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { useTheme } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useEffect, useRef, useState } from "react";
import { ddClient } from "../../../dockerDesktopClient";
import { usePrevious } from "../../../hooks/usePrevious";
import { Loader } from "../../common/Loader";
import { OpenTelemetryLogoIcon } from "../../common/icons/OpenTelemetryLogoIcon";
import { NoData } from "../NoData";
import { AssetsData, ExtendedAssetEntry, InsightType } from "../types";
import { findAssetBySpanCodeObjectId } from "../utils/findAssetBySpanCodeObjectId";
import { getAssetTypeInfo } from "../utils/getAssetTypeInfo";
import { getInsightTypeInfo } from "../utils/getInsightTypeInfo";
import { BottleneckInsight } from "./BottleneckInsight";
import { DurationBreakdownInsight } from "./DurationBreakdownInsight";
import { DurationInsight } from "./DurationInsight";
import { DurationSlowdownSourceInsight } from "./DurationSlowdownSourceInsight";
import { EndpointNPlusOneInsight } from "./EndpointNPlusOneInsight";
import { ErrorsInsight } from "./ErrorsInsight";
import { InsightCard } from "./InsightCard";
import { NPlusOneInsight } from "./NPlusOneInsight";
import { ScalingIssueInsight } from "./ScalingIssueInsight";
import { SlowEndpointInsight } from "./SlowEndpointInsight";
import { SpanBottleneckInsight } from "./SpanBottleneckInsight";
import { TopUsageInsight } from "./TopUsageInsight";
import { TrafficInsight } from "./TrafficInsight";
import * as s from "./styles";
import {
  isCodeObjectErrorsInsight,
  isCodeObjectHotSpotInsight,
  isEndpointDurationSlowdownInsight,
  isEndpointHighUsageInsight,
  isEndpointLowUsageInsight,
  isEndpointNormalUsageInsight,
  isEndpointSlowestSpansInsight,
  isEndpointSuspectedNPlusOneInsight,
  isSlowEndpointInsight,
  isSpanDurationBreakdownInsight,
  isSpanDurationsInsight,
  isSpanEndpointBottleneckInsight,
  isSpanInsight,
  isSpanNPlusOneInsight,
  isSpanScalingInsight,
  isSpanUsagesInsight,
} from "./typeGuards";
import {
  AssetInsightsProps,
  CodeObjectInsight,
  InsightGroup,
  SpanInsight,
} from "./types";

const REFRESH_INTERVAL = 10 * 1000; // in milliseconds

export const getInsightTypeOrderPriority = (type: string): number => {
  const insightOrderPriorityMap: Record<string, number> = {
    [InsightType.HotSpot]: 1,
    [InsightType.Errors]: 2,
    [InsightType.TopErrorFlows]: 3,

    [InsightType.SpanDurations]: 60,
    [InsightType.SpanUsages]: 61,
    [InsightType.SpanScaling]: 63,
    [InsightType.SpanNPlusOne]: 65,
    [InsightType.SpanDurationChange]: 66,
    [InsightType.SpanEndpointBottleneck]: 67,
    [InsightType.SpanDurationBreakdown]: 68,

    [InsightType.EndpointSpanNPlusOne]: 55,
    [InsightType.SlowestSpans]: 40,
    [InsightType.LowUsage]: 30,
    [InsightType.NormalUsage]: 50,
    [InsightType.HighUsage]: 10,
    [InsightType.SlowEndpoint]: 20,
    [InsightType.EndpointDurationSlowdown]: 25,
  };

  return insightOrderPriorityMap[type] || Infinity;
};

const renderInsightCard = (
  insight: CodeObjectInsight,
  assets: AssetsData,
  asset: ExtendedAssetEntry,
  onAssetSelect: (asset: ExtendedAssetEntry) => void
): JSX.Element => {
  if (isSpanDurationsInsight(insight)) {
    return <DurationInsight key={insight.type} insight={insight} />;
  }
  if (isSpanDurationBreakdownInsight(insight)) {
    return (
      <DurationBreakdownInsight
        key={insight.type}
        insight={insight}
        assets={assets}
        asset={asset}
        onAssetSelect={onAssetSelect}
      />
    );
  }
  if (isSpanUsagesInsight(insight)) {
    return (
      <TopUsageInsight
        key={insight.type}
        insight={insight}
        assets={assets}
        asset={asset}
        onAssetSelect={onAssetSelect}
      />
    );
  }
  if (isSpanEndpointBottleneckInsight(insight)) {
    return (
      <BottleneckInsight
        key={insight.type}
        insight={insight}
        assets={assets}
        asset={asset}
        onAssetSelect={onAssetSelect}
      />
    );
  }
  if (isEndpointSlowestSpansInsight(insight)) {
    return (
      <SpanBottleneckInsight
        key={insight.type}
        insight={insight}
        assets={assets}
        asset={asset}
        onAssetSelect={onAssetSelect}
      />
    );
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
    return (
      <EndpointNPlusOneInsight
        key={insight.type}
        insight={insight}
        assets={assets}
        asset={asset}
        onAssetSelect={onAssetSelect}
      />
    );
  }
  if (isSpanNPlusOneInsight(insight)) {
    return (
      <NPlusOneInsight
        key={insight.type}
        insight={insight}
        assets={assets}
        asset={asset}
        onAssetSelect={onAssetSelect}
      />
    );
  }
  if (isSpanScalingInsight(insight)) {
    return (
      <ScalingIssueInsight
        key={insight.type}
        insight={insight}
        assets={assets}
        asset={asset}
        onAssetSelect={onAssetSelect}
      />
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
  if (isEndpointDurationSlowdownInsight(insight)) {
    return (
      <DurationSlowdownSourceInsight
        key={insight.type}
        insight={insight}
        assets={assets}
        asset={asset}
        onAssetSelect={onAssetSelect}
      />
    );
  }

  return <InsightCard key={insight.type} data={insight} />;
};

export const AssetInsights = (props: AssetInsightsProps) => {
  const [insights, setInsights] = useState<InsightGroup[]>();
  const previousEnvironment = usePrevious(props.environment);
  const insightsContainerRef = useRef<HTMLDivElement>(null);

  const theme = useTheme();

  const assetTypeInfo = getAssetTypeInfo(props.assetEntry.assetType);

  const codeObjectIds = [props.assetEntry.span.spanCodeObjectId];

  if (props.assetEntry.span.methodCodeObjectId) {
    codeObjectIds.push(`method:${props.assetEntry.span.methodCodeObjectId}`);
  }

  const handleAssetsLinkClick = () => {
    props.onGoToAssetsPage(props.assetEntry);
  };

  const handleSelectAsset = (asset: ExtendedAssetEntry) => {
    props.onAssetSelect(asset);
  };

  const fetchInsights = async () => {
    const insights = (await ddClient.extension.vm?.service?.post("/insights", {
      codeObjectIds,
      environment: props.environment,
    })) as CodeObjectInsight[];

    console.debug(
      `Insights for asset with ids [${codeObjectIds
        .map((x) => `"${x}"`)
        .join(", ")}] have been fetched:`,
      insights
    );

    const sortedInsights = [...insights].sort(
      (a, b) =>
        getInsightTypeOrderPriority(a.type) -
        getInsightTypeOrderPriority(b.type)
    );

    const ungroupedInsights: CodeObjectInsight[] = [];
    const spanInsightGroups: { [key: string]: SpanInsight[] } = {};

    for (let insight of sortedInsights) {
      // Do not show unknown insights
      const insightTypeInfo = getInsightTypeInfo(insight.type);
      if (!insightTypeInfo) {
        continue;
      }

      // Do not show Span Usage insight
      if (insight.type === InsightType.SpanUsageStatus) {
        continue;
      }

      if (!isSpanInsight(insight)) {
        ungroupedInsights.push(insight);
        continue;
      }

      const spanCodeObjectId = insight.spanInfo?.spanCodeObjectId;

      if (
        !spanCodeObjectId ||
        spanCodeObjectId === props.assetEntry.span.spanCodeObjectId
      ) {
        ungroupedInsights.push(insight);
        continue;
      }

      if (!spanInsightGroups[spanCodeObjectId]) {
        spanInsightGroups[spanCodeObjectId] = [];
      }

      spanInsightGroups[spanCodeObjectId].push(insight);
    }

    setInsights([
      { insights: ungroupedInsights },
      // span insight groups
      ...Object.values(spanInsightGroups).map((x, i) => ({
        icon: OpenTelemetryLogoIcon,
        name: x[0].spanInfo?.displayName,
        insights: x,
      })),
    ]);
  };

  useEffect(() => {
    if (insightsContainerRef.current) {
      insightsContainerRef.current.scrollTop = 0;
    }

    fetchInsights();
    const refreshInterval = setInterval(() => {
      fetchInsights();
    }, REFRESH_INTERVAL);

    return () => {
      clearInterval(refreshInterval);
    };
  }, [props.assetEntry.span.spanCodeObjectId]);

  useEffect(() => {
    if (
      previousEnvironment !== props.environment &&
      insightsContainerRef.current
    ) {
      insightsContainerRef.current.scrollTop = 0;
    }
  }, [previousEnvironment, props.environment]);

  useEffect(() => {
    const asset = findAssetBySpanCodeObjectId(
      props.assets,
      props.assetEntry.span.spanCodeObjectId,
      props.assetEntry.serviceName
    );

    if (!asset) {
      props.onGoToAssetsPage();
    }
  }, [props.assets, props.assetEntry]);

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
          {insights.map((x) => (
            <s.InsightGroup key={x.name || "__ungrouped"}>
              {x.name && (
                <s.InsightGroupName>
                  {x.icon && <x.icon size={20} />} {x.name}
                </s.InsightGroupName>
              )}
              {x.insights.map((insight) =>
                renderInsightCard(
                  insight,
                  props.assets,
                  props.assetEntry,
                  handleSelectAsset
                )
              )}
            </s.InsightGroup>
          ))}
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
