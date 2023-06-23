import { ForwardedRef, forwardRef, useEffect, useMemo, useRef } from "react";
import { SORTING_CRITERION } from "../types";
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
    b: ExtendedAssetEntryWithServices,
    isDesc: boolean
  ) =>
    isDesc
      ? b.span.displayName.localeCompare(a.span.displayName)
      : a.span.displayName.localeCompare(b.span.displayName);

  switch (sorting.criterion) {
    case SORTING_CRITERION.CRITICAL_INSIGHTS:
      return entries.sort((a, b) => {
        const aHighestImportance =
          a.insights.length > 0
            ? Math.min(...a.insights.map((x) => x.importance))
            : Infinity;
        const bHighestImportance =
          b.insights.length > 0
            ? Math.min(...b.insights.map((x) => x.importance))
            : Infinity;

        const aMostImportantInsightCount = a.insights.filter(
          (x) => x.importance === aHighestImportance
        ).length;
        const bMostImportantInsightCount = b.insights.filter(
          (x) => x.importance === bHighestImportance
        ).length;

        return (
          (sorting.isDesc
            ? aHighestImportance - bHighestImportance
            : bHighestImportance - aHighestImportance) ||
          (sorting.isDesc
            ? bMostImportantInsightCount - aMostImportantInsightCount
            : aMostImportantInsightCount - bMostImportantInsightCount) ||
          sortByName(a, b, sorting.isDesc)
        );
      });
    case SORTING_CRITERION.PERFORMANCE:
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
          sortByName(a, b, sorting.isDesc)
        );
      });
    case SORTING_CRITERION.LATEST:
      return entries.sort((a, b) => {
        const aDateTime = new Date(a.lastSpanInstanceInfo.startTime).valueOf();
        const bDateTime = new Date(b.lastSpanInstanceInfo.startTime).valueOf();

        return (
          (sorting.isDesc ? bDateTime - aDateTime : aDateTime - bDateTime) ||
          sortByName(a, b, sorting.isDesc)
        );
      });
    case SORTING_CRITERION.NAME:
      return entries.sort((a, b) =>
        sorting.isDesc
          ? sortByName(b, a, sorting.isDesc)
          : sortByName(a, b, sorting.isDesc)
      );
    default:
      return entries;
  }
};

const AssetListComponent = (
  props: AssetListProps,
  ref: ForwardedRef<HTMLUListElement>
) => {
  const handleAssetEntryClick = (entry: ExtendedAssetEntryWithServices) => {
    props.onAssetEntryClick(entry);
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

  const entriesRef = useRef<Record<string, HTMLDivElement | null>>({});

  const sortedEntries = useMemo(() => {
    const filteredEntries = entries.filter((x) =>
      x.span.displayName.toLocaleLowerCase().includes(props.searchValue)
    );

    return sortEntries(filteredEntries, props.sorting);
  }, [entries, props.sorting, props.searchValue]);

  useEffect(() => {
    if (props.assetNavigateTo) {
      const ref =
        entriesRef.current[
          `${props.assetNavigateTo.id}-${props.assetNavigateTo.serviceName}`
        ];
      if (ref && ref.parentElement) {
        const distanceToScroll = ref.offsetTop - ref.parentElement.offsetTop;
        ref.parentElement.scrollTo({
          top: distanceToScroll,
          behavior: "smooth",
        });
        props.onAssetNavigate();
      }
    }
  }, []);

  return (
    <s.List ref={ref}>
      {sortedEntries.map((entry) => {
        const id = `${entry.id}-${entry.serviceName}`;

        return (
          <AssetEntryComponent
            ref={(el) => {
              if (el) {
                entriesRef.current[id] = el;
              } else {
                delete entriesRef.current[id];
              }
            }}
            key={id}
            id={id}
            entry={entry}
            onClick={handleAssetEntryClick}
          />
        );
      })}
    </s.List>
  );
};

export const AssetList = forwardRef(AssetListComponent);
