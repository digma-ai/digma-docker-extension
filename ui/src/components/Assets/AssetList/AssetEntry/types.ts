import { AssetEntryWithServices, SORTING_CRITERION } from "../../types";

export interface AssetEntryProps {
  entry: AssetEntryWithServices;
  onClick: (entry: AssetEntryWithServices) => void;
  sortingCriterion: SORTING_CRITERION;
  id: string;
}

export interface ImpactScoreIndicatorProps {
  $score: number;
}
