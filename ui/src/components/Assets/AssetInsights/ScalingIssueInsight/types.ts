import { InsightWithLinksProps, SpanScalingInsight, Trace } from "../types";

export interface ScalingIssueInsightProps extends InsightWithLinksProps {
  insight: SpanScalingInsight;
  onTraceSelect: (trace: Trace) => void;
}
