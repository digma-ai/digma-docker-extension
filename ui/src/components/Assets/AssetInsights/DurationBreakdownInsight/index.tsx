import { InsightCard } from "../InsightCard";
import { DurationPercentile, SpanDurationBreakdownEntry } from "../types";
import * as s from "./styles";
import { DurationBreakdownInsightProps } from "./types";

const DEFAULT_PERCENTILE = 0.5;

const getPercentile = (
  entry: SpanDurationBreakdownEntry,
  requestedPercentile: number
): DurationPercentile | undefined => {
  for (const percentile of entry.percentiles) {
    if (percentile.percentile === requestedPercentile) {
      return percentile;
    }
  }
};

const getTitle = (breakdownEntry: SpanDurationBreakdownEntry) => {
  const sortedPercentiles = breakdownEntry.percentiles.sort(
    (a, b) => a.percentile - b.percentile
  );

  let title = "Percentage of time spent in span:";

  sortedPercentiles.forEach((percentile) => {
    title += `\nP${percentile.percentile * 100}: ${percentile.duration.value} ${
      percentile.duration.unit
    }`;
  });

  return title;
};

export const DurationBreakdownInsight = (
  props: DurationBreakdownInsightProps
) => {
  let filteredEntries = props.insight.breakdownEntries.filter((entry) =>
    entry.percentiles.some(
      (percentile) => percentile.percentile === DEFAULT_PERCENTILE
    )
  );

  let sortedEntries = [...filteredEntries].sort((a, b) => {
    const aPercentile = getPercentile(a, DEFAULT_PERCENTILE);
    const bPercentile = getPercentile(b, DEFAULT_PERCENTILE);

    if (aPercentile && bPercentile) {
      return bPercentile.duration.raw - aPercentile.duration.raw;
    }

    return 0;
  });

  return (
    <InsightCard
      data={props.insight}
      content={
        <s.DurationList>
          {sortedEntries.map((entry) => {
            const percentile = getPercentile(entry, DEFAULT_PERCENTILE);

            return percentile ? (
              <s.Duration title={getTitle(entry)} key={entry.spanCodeObjectId}>
                {`${entry.spanDisplayName} ${percentile.duration.value} ${percentile.duration.unit}`}
              </s.Duration>
            ) : null;
          })}
        </s.DurationList>
      }
    />
  );
};
