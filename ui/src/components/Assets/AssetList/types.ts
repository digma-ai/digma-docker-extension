import { AssetEntry, SORTING_CRITERION } from "../types";

export interface AssetListProps {
  entries: AssetEntry[];
  onAssetEntryClick: (asset: AssetEntry) => void;
  onAssetNavigate: () => void;
  assetNavigateTo?: string;
  sortingCriterion: SORTING_CRITERION;
}
