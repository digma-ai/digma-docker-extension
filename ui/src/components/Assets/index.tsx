import { useEffect, useMemo, useState } from "react";
import { groupBy } from "../../utils/groupBy";
import { AssetList } from "./AssetList";
import { AssetTypeList } from "./AssetTypeList";
import * as s from "./styles";
import { AssetsProps, ExtendedAssetEntry, GroupedAssetEntries } from "./types";

export const Assets = (props: AssetsProps) => {
  const [selectedAssetTypeId, setSelectedAssetTypeId] = useState<string | null>(
    null
  );
  const [data, setData] = useState<GroupedAssetEntries>();

  useEffect(() => {
    if (!props.data) {
      return;
    }

    const assetEntries: ExtendedAssetEntry[] = props.data.serviceAssetsEntries
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

    setData(groupedAssetEntries);
  }, [props.data]);

  const handleBackButtonClick = () => {
    setSelectedAssetTypeId(null);
  };

  const handleSelect = (assetTypeId: string) => {
    setSelectedAssetTypeId(assetTypeId);
  };

  const renderContent = useMemo((): JSX.Element => {
    if (!data) {
      return <></>;
    }

    if (!selectedAssetTypeId) {
      return <AssetTypeList data={data} onSelect={handleSelect} />;
    }

    const selectedAssetTypeEntries = data[selectedAssetTypeId] || [];

    return (
      <AssetList
        onBackButtonClick={handleBackButtonClick}
        assetTypeId={selectedAssetTypeId}
        entries={selectedAssetTypeEntries}
      />
    );
  }, [data, selectedAssetTypeId]);

  return <s.Container>{renderContent}</s.Container>;
};
