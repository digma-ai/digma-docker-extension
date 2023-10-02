import { EndpointSlowestSpansInsight, InsightWithLinksProps } from "../types";

export interface SpanBottleneckInsightProps extends InsightWithLinksProps {
  insight: EndpointSlowestSpansInsight;
}
