import { Mode } from "../../globals";

export enum INSIGHT_TYPES {
  SpanUsageStatus = "SpanUsageStatus",
  TopErrorFlows = "TopErrorFlows",
  SpanDurationChange = "SpanDurationChange",
  HotSpot = "HotSpot",
  Errors = "Errors",
  SlowEndpoint = "SlowEndpoint",
  LowUsage = "LowUsage",
  NormalUsage = "NormalUsage",
  HighUsage = "HighUsage",
  SlowestSpans = "SlowestSpans",
  EndpointSpaNPlusOne = "EndpointSpaNPlusOne",
  SpanUsages = "SpanUsages",
  SpaNPlusOne = "SpaNPlusOne",
  SpanEndpointBottleneck = "SpanEndpointBottleneck",
  SpanHighUsage = "SpanHighUsage",
  SpanDurations = "SpanDurations",
  SpanScaling = "SpanScaling",
  SpanScalingRootCause = "SpanScalingRootCause",
  SpanDurationBreakdown = "SpanDurationBreakdown",
}

export interface AppProps {
  theme?: Mode;
}