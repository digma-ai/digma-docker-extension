import { InsightWithLinksProps, SpanUsagesInsight, Trace } from "../types";

export interface TopUsageInsightProps extends InsightWithLinksProps {
  insight: SpanUsagesInsight;
  onTraceSelect: (trace: Trace) => void;
}
