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
  SpanScaling = "SpanScaling",
  SpanDurationBreakdown = "SpanDurationBreakdown",
  EndpointDurationSlowdown = "EndpointDurationSlowdown",
  EndpointBreakdown = "EndpointBreakdown",
}

export interface ExtendedAssetEntry extends AssetEntry {
  id: string;
}

export interface GroupedAssetEntries {
  [key: string]: {
    [key: string]: ExtendedAssetEntry[];
  };
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
  kind: string;

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
  data?: AssetsData;
  environments?: string[];
  onGettingStartedButtonClick: () => void;
  onAssetSelect: (entry: ExtendedAssetEntry) => void;
  onAssetNavigate: () => void;
  assetNavigateTo?: ExtendedAssetEntry;
  environment?: string;
}

export interface GetAssetsResponse extends AssetsData {
  accountId: string;
  environment: string;
}
