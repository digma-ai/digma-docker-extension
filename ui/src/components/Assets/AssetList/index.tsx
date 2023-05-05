import { useMemo } from "react";
import { AssetEntry as AssetEntryComponent } from "./AssetEntry";
import * as s from "./styles";
import {
  AssetListProps,
  ExtendedAssetEntryWithServices,
  Sorting,
} from "./types";

const sortEntries = (
  entries: ExtendedAssetEntryWithServices[],
  sorting: Sorting
): ExtendedAssetEntryWithServices[] => {
  entries = [...entries];

  const sortByName = (
    a: ExtendedAssetEntryWithServices,
    b: ExtendedAssetEntryWithServices
  ) => a.span.displayName.localeCompare(b.span.displayName);

  switch (sorting.criterion) {
    case "Critical insights":
      return entries.sort((a, b) => {
        const aCriticalInsights = a.insights.filter(
          (x) => x.importance < 3
        ).length;
        const bCriticalInsights = b.insights.filter(
          (x) => x.importance < 3
        ).length;

        return (
          (sorting.isDesc
            ? bCriticalInsights - aCriticalInsights
            : aCriticalInsights - bCriticalInsights) || sortByName(a, b)
        );
      });
    case "Performance":
      return entries.sort((a, b) => {
        const aDuration = a.durationPercentiles.find(
          (duration) => duration.percentile === 0.5
        )?.currentDuration.raw;
        const bDuration = b.durationPercentiles.find(
          (duration) => duration.percentile === 0.5
        )?.currentDuration.raw;

        if (!aDuration && !bDuration) {
          return 0;
        }

        if (!aDuration) {
          return sorting.isDesc ? 1 : -1;
        }

        if (!bDuration) {
          return sorting.isDesc ? -1 : 1;
        }

        return (
          (sorting.isDesc ? bDuration - aDuration : aDuration - bDuration) ||
          sortByName(a, b)
        );
      });
    case "Latest":
      return entries.sort((a, b) => {
        const aDateTime = new Date(a.lastSpanInstanceInfo.startTime).valueOf();
        const bDateTime = new Date(b.lastSpanInstanceInfo.startTime).valueOf();

        return (
          (sorting.isDesc ? bDateTime - aDateTime : aDateTime - bDateTime) ||
          sortByName(a, b)
        );
      });
    case "Name":
      return entries.sort((a, b) =>
        sorting.isDesc ? sortByName(b, a) : sortByName(a, b)
      );
    default:
      return entries;
  }
};

export const AssetList = (props: AssetListProps) => {
  const handleAssetLinkClick = (entry: ExtendedAssetEntryWithServices) => {
    props.onAssetLinkClick(entry);
  };

  const entries: ExtendedAssetEntryWithServices[] = useMemo(
    () =>
      Object.keys(props.entries)
        .map((entryId) => {
          const entries = props.entries[entryId];
          return entries.map((entry) => {
            const relatedServices = entries.map((entry) => entry.serviceName);
            return {
              ...entry,
              id: entryId,
              relatedServices,
            };
          });
        })
        .flat(),
    [props.entries]
  );

  const sortedEntries = useMemo(
    () => sortEntries(entries, props.sorting),
    [entries, props.sorting]
  );

  console.log(sortedEntries);

  return (
    <s.Container>
      <s.List>
        {sortedEntries.map((entry) => (
          <AssetEntryComponent
            key={`${entry.id}-${entry.serviceName}`}
            entry={entry}
            onAssetLinkClick={handleAssetLinkClick}
          />
        ))}
      </s.List>
    </s.Container>
  );
};
