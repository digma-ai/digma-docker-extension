export enum InsightType {
  TopErrorFlows = "TopErrorFlows",
  SpanDurationChange = "SpanDurationChange",
  SpanUsageStatus = "SpanUsageStatus",
  HotSpot = "HotSpot",
  Errors = "Errors",
  SlowEndpoint = "SlowEndpoint",
  LowUsage = "LowUsage",
  NormalUsage = "NormalUsage",
  HighUsage = "HighUsage",
  SlowestSpans = "SlowestSpans",
  EndpointSpanNPlusOne = "EndpointSpaNPlusOne",
  SpanUsages = "SpanUsages",
  SpanNPlusOne = "SpaNPlusOne",
  SpanEndpointBottleneck = "SpanEndpointBottleneck",
  SpanDurations = "SpanDurations",
  SpanScalingBadly = "SpanScaling",
  SpanScalingWell = "SpanScalingWell",
  SpanScalingInsufficientData = "SpanScalingInsufficientData",
  SpanDurationBreakdown = "SpanDurationBreakdown",
  EndpointDurationSlowdown = "EndpointDurationSlowdown",
  EndpointBreakdown = "EndpointBreakdown"
}

export enum SORTING_CRITERION {
  CRITICAL_INSIGHTS = "Critical insights",
  PERFORMANCE = "Performance",
  SLOWEST_FIVE_PERCENT = "Slowest 5%",
  LATEST = "Latest",
  NAME = "Name"
}

export enum SORTING_ORDER {
  ASC = "asc",
  DESC = "desc"
}

export interface ExtendedAssetEntry extends AssetEntry {
  id: string;
}

export interface ExtendedAssetEntryWithServices extends ExtendedAssetEntry {
  relatedServices: string[];
}

export interface GroupedAssetEntries {
  [key: string]: ExtendedAssetEntryWithServices[];
}

export interface Insight {
  type: string;
  importance: number;
  shortDisplayInfo: {
    title: string;
    targetDisplayName: string;
    subtitle: string;
    description: string;
  };
}

export interface Duration {
  value: number;
  unit: string;
  raw: number;
}

export interface SpanInfo {
  name: string;
  displayName: string;
  instrumentationLibrary: string;
  spanCodeObjectId: string;
  methodCodeObjectId: string | null;
  kind: string | null;

  /**
   * @deprecated
   */
  codeObjectId: string | null;
}

export interface AssetEntrySpanInfo extends SpanInfo {
  classification: string;
  role: string;
}

export interface SpanInstanceInfo {
  traceId: string;
  spanId: string;
  startTime: string;
  duration: Duration;
}

export interface DurationPercentileWithChange {
  percentile: number;
  currentDuration: Duration;
  previousDuration: Duration | null;
  changeTime: string | null;
  changeVerified: boolean | null;
  traceIds: string[];
}

export interface AssetEntry {
  span: AssetEntrySpanInfo;
  assetType: string;
  serviceName: string;
  endpointCodeObjectId: string | null;
  durationPercentiles: DurationPercentileWithChange[];
  insights: Insight[];
  lastSpanInstanceInfo: SpanInstanceInfo;
  firstDataSeenTime: string;
}

export interface AssetsData {
  serviceAssetsEntries: {
    itemType: string;
    assetEntries: AssetEntry[];
    accountId: string;
    environment: string;
    serviceName: string;
  }[];
}

export interface AssetsProps {
  data?: GroupedAssetEntries;
  environments?: string[];
  onGettingStartedButtonClick: () => void;
  onAssetSelect: (asset: ExtendedAssetEntryWithServices) => void;
  onAssetNavigate: () => void;
  assetNavigateTo?: ExtendedAssetEntryWithServices;
  environment?: string;
}

export interface GetAssetsResponse extends AssetsData {
  accountId: string;
  environment: string;
}

export interface Sorting {
  criterion: SORTING_CRITERION;
  order: SORTING_ORDER;
}

export interface SortingOrderButtonProps {
  selected: boolean;
}
