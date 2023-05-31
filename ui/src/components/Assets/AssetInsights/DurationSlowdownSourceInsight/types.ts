import {
  EndpointDurationSlowdownInsight,
  InsightWithLinksProps,
} from "../types";

export interface DurationSlowdownSourceInsightProps
  extends InsightWithLinksProps {
  insight: EndpointDurationSlowdownInsight;
}
