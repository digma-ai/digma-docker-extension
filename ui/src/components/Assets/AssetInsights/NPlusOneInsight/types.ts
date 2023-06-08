import { InsightWithLinksProps, SpanNPlusOneInsight, Trace } from "../types";

export interface NPlusOneInsightProps extends InsightWithLinksProps {
  insight: SpanNPlusOneInsight;
  onTraceSelect: (trace: Trace) => void;
}
