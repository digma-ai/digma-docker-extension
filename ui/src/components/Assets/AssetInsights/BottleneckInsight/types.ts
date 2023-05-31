import { InsightWithLinksProps, SpanEndpointBottleneckInsight } from "../types";

export interface BottleneckInsightProps extends InsightWithLinksProps {
  insight: SpanEndpointBottleneckInsight;
}
