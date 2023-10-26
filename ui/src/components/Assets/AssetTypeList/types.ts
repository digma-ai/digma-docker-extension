import { AssetTypeData } from "../types";

export interface AssetTypeListProps {
  data?: AssetTypeData[];
  selectedAssetTypeId: string;
  onAssetTypeSelect: (assetTypeId: string) => void;
}
