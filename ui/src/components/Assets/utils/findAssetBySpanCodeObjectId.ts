import { AssetsData, ExtendedAssetEntry } from "../types";

export const findAssetBySpanCodeObjectId = (
  assets: AssetsData,
  spanCodeObjectId: string,
  serviceName: string
): ExtendedAssetEntry | undefined => {
  const asset = assets?.serviceAssetsEntries
    .find((x) => x.serviceName === serviceName)
    ?.assetEntries.find((x) => x.span.spanCodeObjectId === spanCodeObjectId);

  return asset ? { ...asset, id: asset.span.spanCodeObjectId } : undefined;
};
