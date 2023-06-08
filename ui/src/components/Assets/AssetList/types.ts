import { ExtendedAssetEntry, SORTING_CRITERION } from "../types";

export interface ExtendedAssetEntryWithServices extends ExtendedAssetEntry {
  relatedServices: string[];
}

export interface AssetListProps {
  assetTypeId: string;
  entries: { [key: string]: ExtendedAssetEntry[] };
  onAssetLinkClick: (entry: ExtendedAssetEntryWithServices) => void;
  sorting: Sorting;
  onAssetNavigate: () => void;
  assetNavigateTo?: ExtendedAssetEntry;
}

export interface Sorting {
  criterion: SORTING_CRITERION;
  isDesc: boolean;
}
