import { InsightCard } from "../InsightCard";
import { DurationSlowdownSourceInsightProps } from "./types";

export const DurationSlowdownSourceInsight = (
  props: DurationSlowdownSourceInsightProps
) => <InsightCard data={props.insight} />;
