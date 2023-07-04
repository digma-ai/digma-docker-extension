import {
  InsightWithLinksProps,
  SpanScalingBadlyInsight,
  Trace,
} from "../types";

export interface ScalingIssueInsightProps extends InsightWithLinksProps {
  insight: SpanScalingBadlyInsight;
  onTraceSelect: (trace: Trace) => void;
}
