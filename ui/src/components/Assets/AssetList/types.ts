import { ExtendedAssetEntry, Sorting } from "../types";

export interface ExtendedAssetEntryWithServices extends ExtendedAssetEntry {
  relatedServices: string[];
}

export interface AssetListProps {
  assetTypeId: string;
  entries: { [key: string]: ExtendedAssetEntry[] };
  onAssetEntryClick: (entry: ExtendedAssetEntryWithServices) => void;
  sorting: Sorting;
  searchValue: string;
  onAssetNavigate: () => void;
  assetNavigateTo?: ExtendedAssetEntry;
}
