import { ExtendedAssetEntry } from "../types";

export interface AssetListProps {
  data: { [key: string]: { [key: string]: ExtendedAssetEntry[] } };
  selectedAssetTypeId: string;
  onAssetTypeSelect: (assetTypeId: string) => void;
}
