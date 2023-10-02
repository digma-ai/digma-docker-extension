import { ExtendedAssetEntryWithServices, Sorting } from "../types";

export interface AssetListProps {
  assetTypeId: string;
  entries: ExtendedAssetEntryWithServices[];
  onAssetEntryClick: (asset: ExtendedAssetEntryWithServices) => void;
  sorting: Sorting;
  searchValue: string;
  onAssetNavigate: () => void;
  assetNavigateTo?: ExtendedAssetEntryWithServices;
}
