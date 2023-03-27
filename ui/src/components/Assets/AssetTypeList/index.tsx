import { getAssetTypeInfo } from "../utils";
import { AssetTypeListItem } from "./AssetTypeListItem";
import * as s from "./styles";
import { AssetListProps } from "./types";

const ASSET_TYPE_IDS = [
  "Endpoint",
  "Consumer",
  "DatabaseQueries",
  "CodeLocation",
  "EndpointClient",
  "Other",
];

export const AssetTypeList = (props: AssetListProps) => {
  const handleAssetTypeChange = (
    e: React.SyntheticEvent<Element, Event>,
    value: number
  ) => {
    props.onAssetTypeSelect(ASSET_TYPE_IDS[value]);
  };

  return (
    <s.Tabs
      value={ASSET_TYPE_IDS.indexOf(props.selectedAssetTypeId)}
      onChange={handleAssetTypeChange}
      variant={"scrollable"}
      scrollButtons={"auto"}
    >
      {ASSET_TYPE_IDS.map((assetTypeId, i) => {
        const assetTypeInfo = getAssetTypeInfo(assetTypeId);
        const entryCount = props.data[assetTypeId]
          ? Object.values(props.data[assetTypeId]).flat().length
          : 0;

        return (
          <s.Tab
            key={assetTypeId}
            label={
              <AssetTypeListItem
                id={assetTypeId}
                icon={assetTypeInfo?.icon}
                entryCount={entryCount}
                label={assetTypeInfo?.label}
                isSelected={assetTypeId === props.selectedAssetTypeId}
              />
            }
          />
        );
      })}
    </s.Tabs>
  );
};
