import {
  EndpointSuspectedNPlusOneInsight,
  InsightWithLinksProps,
  Trace,
} from "../types";

export interface EndpointNPlusOneInsightProps extends InsightWithLinksProps {
  insight: EndpointSuspectedNPlusOneInsight;
  onTraceSelect: (trace: Trace) => void;
}
