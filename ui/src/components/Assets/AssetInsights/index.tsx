import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { useTheme } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useCallback, useEffect, useRef, useState } from "react";
import { ddClient } from "../../../dockerDesktopClient";
import { usePrevious } from "../../../hooks/usePrevious";
import { Loader } from "../../common/Loader";
import { OpenTelemetryLogoIcon } from "../../common/icons/OpenTelemetryLogoIcon";
import { NoData } from "../NoData";
import { InsightType } from "../types";
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
import { RequestBreakdownInsight } from "./RequestBreakdownInsight";
import { ScalingIssueInsight } from "./ScalingIssueInsight";
import { SlowEndpointInsight } from "./SlowEndpointInsight";
import { SpanBottleneckInsight } from "./SpanBottleneckInsight";
import { TopUsageInsight } from "./TopUsageInsight";
import { TrafficInsight } from "./TrafficInsight";
import * as s from "./styles";
import {
  isCodeObjectErrorsInsight,
  isCodeObjectHotSpotInsight,
  isEndpointBreakdownInsight,
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
  isSpanScalingBadlyInsight,
  isSpanUsagesInsight
} from "./typeGuards";
import {
  AssetInsightsProps,
  CodeObjectInsight,
  GenericCodeObjectInsight,
  GetInsightsResponse,
  InsightGroup,
  SpanInsight,
  Trace
} from "./types";

const REFRESH_INTERVAL = 10 * 1000; // in milliseconds

export const getInsightTypeOrderPriority = (type: string): number => {
  const insightOrderPriorityMap: Record<string, number> = {
    [InsightType.HotSpot]: 1,
    [InsightType.Errors]: 2,
    [InsightType.TopErrorFlows]: 3,

    // Endpoint insights
    [InsightType.EndpointBreakdown]: 5,
    [InsightType.HighUsage]: 10,
    [InsightType.SlowEndpoint]: 20,
    [InsightType.EndpointDurationSlowdown]: 25,
    [InsightType.LowUsage]: 30,
    [InsightType.SlowestSpans]: 40,
    [InsightType.NormalUsage]: 50,
    [InsightType.EndpointSpanNPlusOne]: 55,

    // Span insights
    [InsightType.SpanDurations]: 60,
    [InsightType.SpanUsages]: 61,
    [InsightType.SpanScalingBadly]: 63,
    [InsightType.SpanNPlusOne]: 65,
    [InsightType.SpanDurationChange]: 66,
    [InsightType.SpanEndpointBottleneck]: 67,
    [InsightType.SpanDurationBreakdown]: 68
  };

  return insightOrderPriorityMap[type] || Infinity;
};

const renderInsightCard = (
  insight: CodeObjectInsight,
  onAssetSelect: (spanCodeObjectId: string) => void,
  onTracesSelect: (traces: Trace[]) => void
): JSX.Element | undefined => {
  if (isSpanDurationsInsight(insight)) {
    return (
      <DurationInsight
        onTracesSelect={onTracesSelect}
        key={insight.type}
        insight={insight}
      />
    );
  }
  if (isSpanDurationBreakdownInsight(insight)) {
    return (
      <DurationBreakdownInsight
        key={insight.type}
        insight={insight}
        onAssetSelect={onAssetSelect}
      />
    );
  }
  if (isSpanUsagesInsight(insight)) {
    return (
      <TopUsageInsight
        key={insight.type}
        insight={insight}
        onAssetSelect={onAssetSelect}
        onTraceSelect={(trace) => onTracesSelect([trace])}
      />
    );
  }
  if (isSpanEndpointBottleneckInsight(insight)) {
    return (
      <BottleneckInsight
        key={insight.type}
        insight={insight}
        onAssetSelect={onAssetSelect}
      />
    );
  }
  if (isEndpointSlowestSpansInsight(insight)) {
    return (
      <SpanBottleneckInsight
        key={insight.type}
        insight={insight}
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
        onAssetSelect={onAssetSelect}
        onTraceSelect={(trace) => onTracesSelect([trace])}
      />
    );
  }
  if (isSpanNPlusOneInsight(insight)) {
    return (
      <NPlusOneInsight
        key={insight.type}
        insight={insight}
        onAssetSelect={onAssetSelect}
        onTraceSelect={(trace) => onTracesSelect([trace])}
      />
    );
  }
  if (isSpanScalingBadlyInsight(insight)) {
    return (
      <ScalingIssueInsight
        key={insight.type}
        insight={insight}
        onAssetSelect={onAssetSelect}
        onTraceSelect={(trace) => onTracesSelect([trace])}
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
        onAssetSelect={onAssetSelect}
      />
    );
  }

  if (isEndpointBreakdownInsight(insight)) {
    return <RequestBreakdownInsight key={insight.type} insight={insight} />;
  }
};

const sortInsightGroupsByName = (a: InsightGroup, b: InsightGroup) => {
  const aName = a.name || "";
  const bName = b.name || "";
  return aName.localeCompare(bName);
};

export const AssetInsights = (props: AssetInsightsProps) => {
  const [insights, setInsights] = useState<InsightGroup[]>();
  const previousEnvironment = usePrevious(props.environment);
  const insightsContainerRef = useRef<HTMLDivElement>(null);
  const theme = useTheme();
  const [displayName, setDisplayName] = useState<string>(
    typeof props.assetEntry === "object"
      ? props.assetEntry.displayName
      : props.assetEntry
  );

  const assetTypeInfo =
    typeof props.assetEntry === "object"
      ? getAssetTypeInfo(props.assetEntry.assetType)
      : undefined;

  const spanCodeObjectId =
    typeof props.assetEntry === "object"
      ? props.assetEntry.spanCodeObjectId
      : props.assetEntry;

  const handleAssetsLinkClick = () => {
    props.onGoToAssetsPage();
  };

  const handleAssetSelect = (spanCodeObjectId: string) => {
    props.onAssetSelect(spanCodeObjectId);
  };

  const fetchInsights = useCallback(async () => {
    const response = (await ddClient.extension.vm?.service?.get(
      `/environments/${encodeURIComponent(
        props.environment
      )}/assets/${encodeURIComponent(spanCodeObjectId)}/insights`
    )) as GetInsightsResponse;

    console.debug(
      `Insights for asset with id "${spanCodeObjectId}" have been fetched:`,
      response.insights
    );

    if (response.spanInfo) {
      setDisplayName(response.spanInfo.displayName);
    }

    const sortedInsights = [...response.insights].sort(
      (a, b) =>
        getInsightTypeOrderPriority(a.type) -
        getInsightTypeOrderPriority(b.type)
    );

    const ungroupedInsights: GenericCodeObjectInsight[] = [];
    const spanInsightGroups: { [key: string]: SpanInsight[] } = {};

    for (const insight of sortedInsights) {
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

      const insightSpanCodeObjectId = insight.spanInfo?.spanCodeObjectId;

      if (
        !insightSpanCodeObjectId ||
        insightSpanCodeObjectId === spanCodeObjectId
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
      // Span insight groups
      ...Object.values(spanInsightGroups)
        .map((x) => ({
          icon: OpenTelemetryLogoIcon,
          name: x[0].spanInfo?.displayName,
          insights: x
        }))
        .sort(sortInsightGroupsByName)
    ]);
  }, [spanCodeObjectId, props.environment]);

  useEffect(() => {
    void fetchInsights();
  }, [fetchInsights]);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      void fetchInsights();
    }, REFRESH_INTERVAL);

    return () => {
      window.clearTimeout(timer);
    };
  }, [insights, fetchInsights]);

  useEffect(() => {
    if (insightsContainerRef.current) {
      insightsContainerRef.current.scrollTop = 0;
    }
  }, [spanCodeObjectId, props.environment]);

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
              title={displayName}
              variant={"h4"}
              component={"span"}
              noWrap={true}
            >
              {displayName}
            </Typography>
          </s.Breadcrumb>
        </s.Breadcrumbs>
      </s.Header>
      <s.ContentContainer>
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
                    handleAssetSelect,
                    props.onTracesSelect
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
      </s.ContentContainer>
    </s.Container>
  );
};
