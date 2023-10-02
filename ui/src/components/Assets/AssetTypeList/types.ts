import { GroupedAssetEntries } from "../types";

export interface AssetListProps {
  data: GroupedAssetEntries;
  selectedAssetTypeId: string;
  onAssetTypeSelect: (assetTypeId: string) => void;
}
