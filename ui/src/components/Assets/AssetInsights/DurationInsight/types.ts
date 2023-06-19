import { SpanDurationsInsight, Trace } from "../types";

export interface DurationInsightProps {
  insight: SpanDurationsInsight;
  onTracesSelect: (traces: Trace[]) => void;
}
