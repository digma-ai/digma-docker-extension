import { AssetEntry, SORTING_CRITERION } from "../../types";

export interface AssetEntryProps {
  entry: AssetEntry;
  onClick: (entry: AssetEntry) => void;
  sortingCriterion: SORTING_CRITERION;
  id: string;
}

export interface ImpactScoreIndicatorProps {
  $score: number;
}
