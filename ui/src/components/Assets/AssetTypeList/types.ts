import { ExtendedAssetEntry } from "../types";

export interface AssetListProps {
  data: { [key: string]: { [key: string]: ExtendedAssetEntry[] } };
  selectedAssetTypeId: string | null;
  onAssetTypeSelect: (assetTypeId: string) => void;
}
