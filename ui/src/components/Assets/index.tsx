import { useEffect, useMemo, useState } from "react";
import { groupBy } from "../../utils/groupBy";
import { AssetList } from "./AssetList";
import { AssetTypeList } from "./AssetTypeList";
import * as s from "./styles";
import {
  AssetEntry,
  AssetsData,
  AssetsProps,
  ExtendedAssetEntry,
  GroupedAssetEntries,
} from "./types";

const groupEntries = (data: AssetsData): GroupedAssetEntries => {
  const assetEntries: ExtendedAssetEntry[] = data.serviceAssetsEntries
    .flat()
    .map((entry) =>
      entry.assetEntries.map((entry) => ({
        ...entry,
        id: entry.span.spanCodeObjectId,
      }))
    )
    .flat();

  const assetTypes = groupBy<ExtendedAssetEntry>(assetEntries, "assetType");

  const groupedAssetEntries: {
    [key: string]: { [key: string]: ExtendedAssetEntry[] };
  } = {};

  Object.keys(assetTypes).forEach((assetType) => {
    groupedAssetEntries[assetType] = groupBy<ExtendedAssetEntry>(
      assetTypes[assetType],
      "id"
    );
  });

  return groupedAssetEntries;
};

export const Assets = (props: AssetsProps) => {
  const [selectedAssetTypeId, setSelectedAssetTypeId] = useState<string | null>(
    null
  );
  const [data, setData] = useState<GroupedAssetEntries>();

  useEffect(() => {
    if (!props.data) {
      return;
    }

    const groupedAssetEntries = groupEntries(props.data);
    setData(groupedAssetEntries);
  }, [props.data]);

  const handleBackButtonClick = () => {
    setSelectedAssetTypeId(null);
  };

  const handleAssetTypeSelect = (assetTypeId: string) => {
    setSelectedAssetTypeId(assetTypeId);
  };

  const handleAssetLinkClick = (entry: AssetEntry) => {
    // TODO
  };

  const renderContent = useMemo((): JSX.Element => {
    if (!data) {
      return <></>;
    }

    if (!selectedAssetTypeId) {
      return (
        <AssetTypeList data={data} onAssetTypeSelect={handleAssetTypeSelect} />
      );
    }

    const selectedAssetTypeEntries = data[selectedAssetTypeId] || [];

    return (
      <AssetList
        onBackButtonClick={handleBackButtonClick}
        onAssetLinkClick={handleAssetLinkClick}
        assetTypeId={selectedAssetTypeId}
        entries={selectedAssetTypeEntries}
      />
    );
  }, [data, selectedAssetTypeId]);

  return <s.Container>{renderContent}</s.Container>;
};
