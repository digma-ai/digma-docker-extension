import { MemoExoticComponent } from "react";
import { IconProps } from "../../common/icons/types";
import {
  AssetsData,
  Duration,
  DurationPercentileWithChange,
  ExtendedAssetEntry,
  InsightType,
  SpanInfo,
  SpanInstanceInfo,
} from "../types";

export interface AssetInsightsProps {
  assets: AssetsData;
  assetEntry: ExtendedAssetEntry;
  onGoToAssetsPage: (asset?: ExtendedAssetEntry) => void;
  environment: string;
  onAssetSelect: (asset: ExtendedAssetEntry) => void;
  onTracesSelect: (traces: Trace[]) => void;
}

export interface InsightWithLinksProps {
  asset: ExtendedAssetEntry;
  assets: AssetsData;
  onAssetSelect: (asset: ExtendedAssetEntry) => void;
}

export interface GetInsightsResponse {
  accountId: string;
  environment: string;
  spanCodeObjectId: string;
  spanInfo: SpanInfo | null;
  insights: CodeObjectInsight[];
}

export interface InsightGroup {
  insights: CodeObjectInsight[];
  name?: string;
  icon?: MemoExoticComponent<(props: IconProps) => JSX.Element>;
}

export interface Trace {
  name?: string;
  id: string;
}

export enum InsightScope {
  EntrySpan = "EntrySpan",
  Span = "Span",
  Function = "Function",
  ChildSpan = "ChildSpan",
}

export enum InsightCategory {
  Performance = "Performance",
  Errors = "Errors",
  Usage = "Usage",
}

export enum InsightSpecificity {
  ChildInfo = 6,
  Symptomatic = 5,
  OwnInsight = 4,
  TargetFound = 3,
  TargetAndReasonFound = 2,
  PinPoint = 1,
}

export enum InsightImportance {
  Spam = 9,
  Clutter = 8,
  NotInteresting = 7,
  Info = 6,
  Interesting = 5,
  Important = 4,
  HighlyImportant = 3,
  Critical = 2,
  ShowStopper = 1,
}

export interface Insight {
  category: string;
  type: InsightType;
  specifity: InsightSpecificity;
}

export interface CodeObjectDecorator {
  description: string;
  title: string;
}

export interface CodeObjectInsight extends Insight {
  shortDisplayInfo: {
    title: string;
    targetDisplayName: string;
    subtitle: string;
    description: string;
  };
  name: string;
  scope: InsightScope;
  codeObjectId: string;
  decorators: CodeObjectDecorator[];
  environment: string;
  importance: InsightImportance;
  severity: number;
  isRecalculateEnabled: boolean;
  prefixedCodeObjectId: string | null;
  customStartTime: string | null;
  actualStartTime: string | null;
}

export interface SpanInsight extends CodeObjectInsight {
  spanInfo: SpanInfo | null;
}

export interface SpanDurationsInsight extends SpanInsight {
  name: "Performance Stats";
  type: InsightType.SpanDurations;
  category: InsightCategory.Performance;
  specifity: InsightSpecificity.OwnInsight;
  isRecalculateEnabled: true;
  percentiles: DurationPercentileWithChange[];
  lastSpanInstanceInfo: SpanInstanceInfo;

  /**
   * @deprecated
   */
  spanCodeObjectId: string;
  /**
   * @deprecated
   */
  span: SpanInfo;
}

export interface FlowSpan {
  service: string;
  span: string;
  codeObjectId: string;
  spanCodeObjectId: string;
}

export interface SpanUsagesInsight extends SpanInsight {
  name: "Top Usage";
  type: InsightType.SpanUsages;
  category: InsightCategory.Usage;
  specifity: InsightSpecificity.OwnInsight;
  isRecalculateEnabled: true;
  importance: InsightImportance.Interesting;
  sampleTrace: string;
  flows: {
    sampleTraceIds: string[];
    percentage: number;
    firstService: FlowSpan;
    intermediateSpan: string | null;
    lastService?: FlowSpan;
    lastServiceSpan: string | null;
  }[];

  /**
   * @deprecated
   */
  span: string;
}

interface Percentile {
  fraction: number;
  maxDuration: Duration;
}

export interface SpanEndpointBottleneckInsight extends SpanInsight {
  name: "Bottleneck";
  type: InsightType.SpanEndpointBottleneck;
  category: InsightCategory.Performance;
  specifity: InsightSpecificity.TargetFound;
  importance: InsightImportance.Critical;
  slowEndpoints: {
    endpointInfo: {
      route: string;
      instrumentationLibrary: string;
      serviceName: string;
      codeObjectId: string;
      spanCodeObjectId: string;
      spanName: string;
    };
    probabilityOfBeingBottleneck: number;
    avgDurationWhenBeingBottleneck: Duration;

    /**
     * @deprecated
     */
    p50: Percentile;
    /**
     * @deprecated
     */
    p95: Percentile;
    /**
     * @deprecated
     */
    p99: Percentile;
  }[];

  /**
   * @deprecated
   */
  span: SpanInfo;
}

export interface DurationPercentile {
  percentile: number;
  duration: Duration;
}

export interface SpanDurationBreakdownEntry {
  spanName: string;
  spanDisplayName: string;
  spanInstrumentationLibrary: string;
  spanCodeObjectId: string;
  percentiles: DurationPercentile[];
  codeObjectId: string;
}

export interface SpanDurationBreakdownInsight extends SpanInsight {
  name: "Span Duration Breakdown";
  type: InsightType.SpanDurationBreakdown;
  category: InsightCategory.Performance;
  specifity: InsightSpecificity.OwnInsight;
  isRecalculateEnabled: true;
  importance: InsightImportance.Info;
  breakdownEntries: SpanDurationBreakdownEntry[];

  /**
   * @deprecated
   */
  spanName: string;
  /**
   * @deprecated
   */
  spanCodeObjectId: string;
}

export interface EndpointInsight extends SpanInsight {
  route: string;
  serviceName: string;

  /**
   * @deprecated
   */
  endpointSpan: string;
  /**
   * @deprecated
   */
  spanCodeObjectId: string;
}

export interface EndpointLowUsageInsight extends EndpointInsight {
  name: "Low Usage";
  type: InsightType.LowUsage;
  category: InsightCategory.Usage;
  specifity: InsightSpecificity.OwnInsight;
  insightImportance: InsightImportance.Info;
  decorators: CodeObjectDecorator[];
  maxCallsIn1Min: number;
}

export interface EndpointNormalUsageInsight extends EndpointInsight {
  name: "Normal Usage";
  type: InsightType.NormalUsage;
  category: InsightCategory.Usage;
  specifity: InsightSpecificity.OwnInsight;
  insightImportance: InsightImportance.NotInteresting;
  decorators: CodeObjectDecorator[];
  maxCallsIn1Min: number;
}

export interface EndpointHighUsageInsight extends EndpointInsight {
  name: "High Usage";
  type: InsightType.HighUsage;
  category: InsightCategory.Usage;
  specifity: InsightSpecificity.OwnInsight;
  insightImportance: InsightImportance.Interesting;
  decorators: CodeObjectDecorator[];
  maxCallsIn1Min: number;
}

export interface EndpointSlowestSpansInsight extends EndpointInsight {
  name: "Bottleneck Detected";
  type: InsightType.SlowestSpans;
  category: InsightCategory.Performance;
  specifity: InsightSpecificity.TargetFound;
  importance: InsightImportance.Critical;
  spans: {
    spanInfo: SpanInfo;
    probabilityOfBeingBottleneck: number;
    avgDurationWhenBeingBottleneck: Duration;

    /**
     * @deprecated
     */
    p50: Percentile;
    /**
     * @deprecated
     */
    p95: Percentile;
    /**
     * @deprecated
     */
    p99: Percentile;
  }[];
}

export interface SlowEndpointInsight extends EndpointInsight {
  name: "Slow Endpoint";
  type: InsightType.SlowEndpoint;
  category: InsightCategory.Performance;
  specifity: InsightSpecificity.Symptomatic;
  insightImportance: InsightImportance.Critical;
  decorators: CodeObjectDecorator[];
  endpointsMedian: Duration;
  endpointsMedianOfMedians: Duration;
  endpointsP75: Duration;
  median: Duration;

  /**
   * @deprecated
   */
  endpointsMedianOfP75: Duration;
  /**
   * @deprecated
   */
  min: Duration;
  /**
   * @deprecated
   */
  max: Duration;
  /**
   * @deprecated
   */
  mean: Duration;
  /**
   * @deprecated
   */
  p75: Duration;
  /**
   * @deprecated
   */
  p95: Duration;
  /**
   * @deprecated
   */
  p99: Duration;
}

export interface RootCauseSpanInfo extends SpanInfo {
  sampleTraceId: string | null;
  flowHash: string;
}

interface AffectedEndpoint extends SpanInfo {
  route: string;
  serviceName: string;
  sampleTraceId: string | null;
  flowHash: string;
}

export interface SpanScalingInsight extends SpanInsight {
  name: "Scaling Issue Found";
  type: InsightType.SpanScaling;
  category: InsightCategory.Performance;
  specifity: InsightSpecificity.OwnInsight;
  importance: InsightImportance.Critical;
  turningPointConcurrency: number;
  maxConcurrency: number;
  minDuration: Duration;
  maxDuration: Duration;
  rootCauseSpans: RootCauseSpanInfo[];
  affectedEndpoints: AffectedEndpoint[];

  /**
   * @deprecated
   */
  spanName: string;
  /**
   * @deprecated
   */
  spanInstrumentationLibrary: string;
}

export interface SpanNPlusOneInsight extends SpanInsight {
  name: "N+1";
  type: InsightType.SpanNPlusOne;
  category: InsightCategory.Performance;
  specifity: InsightSpecificity.TargetAndReasonFound;
  importance: InsightImportance.Critical;
  occurrences: number;
  traceId: string | null;
  clientSpanName: string | null;
  clientSpanCodeObjectId: string | null;
  duration: Duration;
  endpoints: {
    info: {
      route: string;
      instrumentationLibrary: string;
      spanCodeObjectId: string;
      serviceName: string;
    };
    occurrences: number;
  }[];

  /**
   * @deprecated
   */
  span: SpanInfo;
}

export interface EndpointSuspectedNPlusOneInsight extends EndpointInsight {
  name: "Suspected N+1 Query";
  type: InsightType.EndpointSpanNPlusOne;
  category: InsightCategory.Performance;
  specifity: InsightSpecificity.TargetAndReasonFound;
  importance: InsightImportance.HighlyImportant;
  spans: {
    occurrences: string;
    internalSpan: SpanInfo | null;
    clientSpan: SpanInfo;
    traceId: string;
    duration: Duration;
    fraction: number;
  }[];
}

export interface CodeObjectHotSpotInsight extends CodeObjectInsight {
  name: "Errors Hotspot";
  type: InsightType.HotSpot;
  scope: InsightScope.Function;
  category: InsightCategory.Errors;
  specifity: InsightSpecificity.TargetFound;
  importance: InsightImportance.Critical;
  score: number;
  updatedAt: string;
}

export interface CodeObjectErrorsInsight extends CodeObjectInsight {
  name: "Errors";
  type: InsightType.Errors;
  scope: InsightScope.Function;
  category: InsightCategory.Errors;
  specifity: InsightSpecificity.OwnInsight;
  importance: InsightImportance.Interesting;
  errorCount: number;
  unhandledCount: number;
  unexpectedCount: number;
  topErrors: {
    uid: string;
    codeObjectId: string;
    errorType: string;
    sourceCodeObjectId: string;
  }[];
}

export interface DurationSlowdownSource {
  percentile: string;
  spanInfo: SpanInfo;
  level: number;
  previousDuration: Duration;
  currentDuration: Duration;
  changeTime: string;
  changeVerified: boolean;
}

export interface EndpointDurationSlowdownInsight extends EndpointInsight {
  name: "Endpoint Duration Slowdown Source";
  type: InsightType.EndpointDurationSlowdown;
  category: InsightCategory.Performance;
  specifity: InsightSpecificity.OwnInsight;
  importance: InsightImportance.Critical;
  durationSlowdownSources: DurationSlowdownSource[];
  decorators: CodeObjectDecorator[];
}

export enum ComponentType {
  Internal = "Internal",
  DbQueries = "DB Queries",
  HttpClients = "HTTP Clients",
  Rendering = "Rendering",
}

export interface EndpointBreakdownInsight extends EndpointInsight {
  name: "Request Breakdown";
  type: InsightType.EndpointBreakdown;
  category: InsightCategory.Usage;
  specifity: InsightSpecificity.OwnInsight;
  insightImportance: InsightImportance.Info;
  isRecalculateEnabled: true;
  components: {
    type: ComponentType;
    fraction: number;
  }[];
}
