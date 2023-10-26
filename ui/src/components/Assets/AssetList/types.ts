import { AssetEntryWithServices, SORTING_CRITERION } from "../types";

export interface AssetListProps {
  entries: AssetEntryWithServices[];
  onAssetEntryClick: (asset: AssetEntryWithServices) => void;
  onAssetNavigate: () => void;
  assetNavigateTo?: string;
  sortingCriterion: SORTING_CRITERION;
}
