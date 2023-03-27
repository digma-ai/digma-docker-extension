import { ExtendedAssetEntry } from "../types";

export interface ExtendedAssetEntryWithServices extends ExtendedAssetEntry {
  relatedServices: string[];
}

export interface AssetListProps {
  assetTypeId: string;
  entries: { [key: string]: ExtendedAssetEntry[] };
  onAssetLinkClick: (entry: ExtendedAssetEntryWithServices) => void;
  sorting: Sorting;
}

export interface Sorting {
  criterion: string;
  isDesc: boolean;
}
