import { AssetEntryWithServices } from "../types";

export const findAssetBySpanCodeObjectId = (
  assets: AssetEntryWithServices[],
  spanCodeObjectId: string
): AssetEntryWithServices | undefined =>
  assets.find((x) => x.spanCodeObjectId === spanCodeObjectId);
