import { ForwardedRef, forwardRef, useEffect, useMemo, useRef } from "react";
import { SORTING_CRITERION, SORTING_ORDER, Sorting } from "../types";
import { AssetEntry as AssetEntryComponent } from "./AssetEntry";
import * as s from "./styles";
import { AssetListProps, ExtendedAssetEntryWithServices } from "./types";

const sortEntries = (
  entries: ExtendedAssetEntryWithServices[],
  sorting: Sorting
): ExtendedAssetEntryWithServices[] => {
  entries = [...entries];

  const isDesc = sorting.order === SORTING_ORDER.DESC;

  const sortByName = (
    a: ExtendedAssetEntryWithServices,
    b: ExtendedAssetEntryWithServices,
    isDesc: boolean
  ) =>
    isDesc
      ? b.span.displayName.localeCompare(a.span.displayName)
      : a.span.displayName.localeCompare(b.span.displayName);

  const sortByPercentile = (
    a: ExtendedAssetEntryWithServices,
    b: ExtendedAssetEntryWithServices,
    percentile: number,
    isDesc: boolean
  ) => {
    const aDuration = a.durationPercentiles.find(
      (duration) => duration.percentile === percentile
    )?.currentDuration.raw;
    const bDuration = b.durationPercentiles.find(
      (duration) => duration.percentile === percentile
    )?.currentDuration.raw;

    if (!aDuration && !bDuration) {
      return 0;
    }

    if (!aDuration) {
      return isDesc ? 1 : -1;
    }

    if (!bDuration) {
      return isDesc ? -1 : 1;
    }

    return (
      (isDesc ? bDuration - aDuration : aDuration - bDuration) ||
      sortByName(a, b, isDesc)
    );
  };

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
          (isDesc
            ? aHighestImportance - bHighestImportance
            : bHighestImportance - aHighestImportance) ||
          (isDesc
            ? bMostImportantInsightCount - aMostImportantInsightCount
            : aMostImportantInsightCount - bMostImportantInsightCount) ||
          sortByName(a, b, isDesc)
        );
      });
    case SORTING_CRITERION.PERFORMANCE:
      return entries.sort((a, b) => sortByPercentile(a, b, 0.5, isDesc));
    case SORTING_CRITERION.SLOWEST_FIVE_PERCENT:
      return entries.sort((a, b) => sortByPercentile(a, b, 0.95, isDesc));
    case SORTING_CRITERION.LATEST:
      return entries.sort((a, b) => {
        const aDateTime = new Date(a.lastSpanInstanceInfo.startTime).valueOf();
        const bDateTime = new Date(b.lastSpanInstanceInfo.startTime).valueOf();

        return (
          (isDesc ? bDateTime - aDateTime : aDateTime - bDateTime) ||
          sortByName(a, b, isDesc)
        );
      });
    case SORTING_CRITERION.NAME:
      return entries.sort((a, b) => sortByName(a, b, isDesc));
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
            const relatedServices = entries
              .map((entry) => entry.serviceName)
              .filter((x, i, arr) => arr.indexOf(x) === i);

            return {
              ...entry,
              id: entryId,
              relatedServices
            };
          });
        })
        .flat(),
    [props.entries]
  );

  const entriesRef = useRef<Record<string, HTMLDivElement | null>>({});

  const sortedEntries = useMemo(() => {
    const filteredEntries = entries.filter((x) =>
      x.span.displayName
        .toLocaleLowerCase()
        .includes(props.searchValue.toLocaleLowerCase())
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
          behavior: "smooth"
        });
        props.onAssetNavigate();
      }
    }
  }, [props.assetNavigateTo, props.onAssetNavigate]);

  return (
    <s.List ref={ref}>
      {sortedEntries.map((entry) => {
        const id = [
          entry.serviceName,
          entry.endpointCodeObjectId,
          entry.span.spanCodeObjectId
        ]
          .filter(Boolean)
          .join("|_|");

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
