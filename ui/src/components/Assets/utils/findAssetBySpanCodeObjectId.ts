import { ExtendedAssetEntryWithServices, GroupedAssetEntries } from "../types";

export const findAssetBySpanCodeObjectId = (
  assets: GroupedAssetEntries,
  spanCodeObjectId: string
): ExtendedAssetEntryWithServices | undefined =>
  Object.values(assets)
    .flat()
    .find((x) => x.id === spanCodeObjectId);
