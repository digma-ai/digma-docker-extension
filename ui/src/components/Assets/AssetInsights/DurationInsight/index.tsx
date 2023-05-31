import { useTheme } from "@mui/material";
import formatDuration from "date-fns/formatDuration";
import intervalToDuration from "date-fns/intervalToDuration";
import intlFormatDistance from "date-fns/intlFormatDistance";
import { DefaultTheme } from "styled-components";
import { roundTo } from "../../../../utils/roundTo";
import { ArrowIcon } from "../../../common/icons/ArrowIcon";
import { Direction } from "../../../common/icons/types";
import { Duration, DurationPercentileWithChange } from "../../types";
import { getPercentileLabel } from "../../utils/getPercentileLabel";
import { InsightCard } from "../InsightCard";
import * as s from "./styles";
import { DurationInsightProps } from "./types";

const DURATION_RATIO_MIN_LIMIT = 0.1;
const DURATION_DIFF_MIN_LIMIT = 10 * 1000; // in nanoseconds

const getDurationDifferenceString = (
  previousDuration: Duration,
  currentDuration: Duration
) => {
  const diff =
    Math.abs(previousDuration.raw - currentDuration.raw) / 1000 / 1000; // in milliseconds

  if (diff < 1000) {
    return `${roundTo(diff, 2)} ms`;
  }

  const seconds = diff / 1000;

  if (seconds < 60) {
    return `${roundTo(seconds, 2)} sec`;
  }

  const minutes = seconds / 60;

  if (minutes < 60) {
    return `${roundTo(minutes, 2)} min`;
  }

  return formatDuration(intervalToDuration({ start: 0, end: diff })); // approximate for the units larger then hours as start and end dates are unknown
};

const getArrowIconColor = (direction: Direction, theme: DefaultTheme) => {
  if (direction === Direction.UP) {
    switch (theme.palette.mode) {
      case "light":
        return "#e00036";
      case "dark":
        return "#f93967";
    }
  }

  switch (theme.palette.mode) {
    case "light":
      return "#1dc693";
    case "dark":
      return "#67d28b";
  }
};

const renderArrowIcon = (
  percentile: DurationPercentileWithChange,
  theme: DefaultTheme
): JSX.Element | null => {
  if (!percentile.previousDuration) {
    return null;
  }

  const direction =
    percentile.previousDuration.raw > percentile.currentDuration.raw
      ? Direction.DOWN
      : Direction.UP;

  return (
    <ArrowIcon
      direction={direction}
      color={getArrowIconColor(direction, theme)}
      size={14}
    />
  );
};

const formatTimeDistance = (dateTime: string) =>
  intlFormatDistance(new Date(dateTime), new Date(), {
    numeric: "always",
  });

export const DurationInsight = (props: DurationInsightProps) => {
  const theme = useTheme();

  const sortedPercentiles = [...props.insight.percentiles].sort(
    (a, b) => a.percentile - b.percentile
  );

  const spanLastCall = props.insight.lastSpanInstanceInfo;

  return (
    <InsightCard
      data={props.insight}
      content={
        <>
          <s.LastCall>
            Last call: {spanLastCall.duration.value}{" "}
            {spanLastCall.duration.unit}{" "}
            {formatTimeDistance(spanLastCall.startTime)}
          </s.LastCall>
          {sortedPercentiles.length > 0 ? (
            <s.PercentileList>
              {sortedPercentiles.map((percentile) => {
                let changeMeaningfulEnough = false;

                if (percentile.previousDuration && percentile.changeTime) {
                  const diff = Math.abs(
                    percentile.currentDuration.raw -
                      percentile.previousDuration.raw
                  );

                  changeMeaningfulEnough =
                    diff / percentile.previousDuration.raw >
                      DURATION_RATIO_MIN_LIMIT &&
                    diff > DURATION_DIFF_MIN_LIMIT;
                }

                return (
                  <s.Percentile key={percentile.percentile}>
                    {`${getPercentileLabel(percentile.percentile)}: ${
                      percentile.currentDuration.value
                    } ${percentile.currentDuration.unit}`}
                    {percentile.previousDuration &&
                      percentile.changeTime &&
                      changeMeaningfulEnough && (
                        <s.Change>
                          {renderArrowIcon(percentile, theme)}
                          {getDurationDifferenceString(
                            percentile.previousDuration,
                            percentile.currentDuration
                          )}
                          , {formatTimeDistance(percentile.changeTime)}
                        </s.Change>
                      )}
                    {percentile.changeTime &&
                      changeMeaningfulEnough &&
                      percentile.changeVerified === false && (
                        <span
                          title={
                            "This change is still being validated and is based on initial data"
                          }
                        >
                          Evaluating
                        </span>
                      )}
                  </s.Percentile>
                );
              })}
            </s.PercentileList>
          ) : (
            // TODO: add hourglass icon
            <span>Waiting for more data...</span>
          )}
        </>
      }
    />
  );
};
