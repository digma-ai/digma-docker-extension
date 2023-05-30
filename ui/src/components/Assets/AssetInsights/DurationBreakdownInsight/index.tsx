import { ExtendedAssetEntry } from "../../types";
import { findAssetBySpanCodeObjectId } from "../../utils/findAssetBySpanCodeObjectId";
import { getPercentileLabel } from "../../utils/getPercentileLabel";
import { InsightCard } from "../InsightCard";
import { Pagination } from "../Pagination";
import { Link } from "../styles";
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
    title += `\n${getPercentileLabel(percentile.percentile)}: ${
      percentile.duration.value
    } ${percentile.duration.unit}`;
  });

  return title;
};

export const DurationBreakdownInsight = (
  props: DurationBreakdownInsightProps
) => {
  console.log("DurationBreakdownInsight");
  console.log(props.insight);

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

  const handleSpanLinkClick = (asset: ExtendedAssetEntry) => {
    props.onAssetSelect(asset);
  };

  return (
    <InsightCard
      data={props.insight}
      content={
        <s.DurationList>
          <Pagination>
            {sortedEntries.map((entry) => {
              const percentile = getPercentile(entry, DEFAULT_PERCENTILE);

              const asset = findAssetBySpanCodeObjectId(
                props.assets,
                entry.spanCodeObjectId,
                props.asset.serviceName
              );

              const name = entry.spanDisplayName;

              return percentile ? (
                <s.Duration
                  title={getTitle(entry)}
                  key={entry.spanCodeObjectId}
                >
                  {asset ? (
                    <Link onClick={() => handleSpanLinkClick(asset)}>
                      {name}
                    </Link>
                  ) : (
                    name
                  )}{" "}
                  {`${percentile.duration.value} ${percentile.duration.unit}`}
                </s.Duration>
              ) : null;
            })}
          </Pagination>
        </s.DurationList>
      }
    />
  );
};
