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
  EndpointBreakdown = "EndpointBreakdown",
  EndpointSessionInView = "EndpointSessionInView",
  EndpointChattyApi = "EndpointChattyApi"
}

export type PercentileKey = "p50" | "p95";

export enum SORTING_CRITERION {
  CRITICAL_INSIGHTS = "criticalinsights",
  PERFORMANCE = "p50",
  SLOWEST_FIVE_PERCENT = "p95",
  LATEST = "latest",
  NAME = "displayname",
  PERFORMANCE_IMPACT = "performanceimpact",
  OVERALL_IMPACT = "overallimpact"
}

export interface AssetsFilters {
  page: number;
  pageSize: number;
  sortBy: SORTING_CRITERION;
  order: SORTING_ORDER;
  search: string;
  type: string;
}

export enum SORTING_ORDER {
  ASC = "asc",
  DESC = "desc"
}

export interface Insight {
  type: string;
  importance: number;
}

export interface Duration {
  value: number;
  unit: string;
  raw: number;
}

export interface ImpactScores {
  ScoreExp25: number;
  ScoreExp1000: number;
}

export interface AssetEntry {
  assetType: string;
  p50: Duration | null;
  p95: Duration | null;
  displayName: string;
  insights: Insight[];
  latestSpanTimestamp: string;
  impactScores?: ImpactScores;
  service: string;
  services: string[];
  spanCodeObjectId: string;
}

export interface AssetsProps {
  data?: AssetsData;
  assetTypes?: AssetTypeData[];
  environments?: string[];
  onGettingStartedButtonClick: () => void;
  onAssetSelect: (asset: AssetEntry) => void;
  onAssetNavigate: () => void;
  assetNavigateTo?: string;
  environment?: string;
  onFiltersChange: (filters: AssetsFilters) => void;
  filters: AssetsFilters;
}

export interface AssetTypeData {
  name: string;
  count: number;
}

export interface GetAssetTypesResponse {
  assetCategories: AssetTypeData[];
}

export interface GetAssetsResponse {
  data: AssetEntry[];
  totalCount: number;
  filteredCount: number;
}

export interface AssetsData {
  data: AssetEntry[];
  totalCount: number;
  filteredCount: number;
}

export interface SortingOrderButtonProps {
  $selected: boolean;
}

export interface SortingOrderIconContainerProps {
  $sortingOrder: SORTING_ORDER;
}
