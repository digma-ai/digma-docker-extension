import { ExtendedAssetEntryWithServices } from "../../types";

export interface AssetEntryProps {
  entry: ExtendedAssetEntryWithServices;
  onClick: (entry: ExtendedAssetEntryWithServices) => void;
  id: string;
}
