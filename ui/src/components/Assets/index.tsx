import ExtensionIcon from "@mui/icons-material/Extension";
import { useTheme } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useMemo, useState } from "react";
import { groupBy } from "../../utils/groupBy";
import { StackIcon } from "../common/icons/StackIcon";
import { AssetList } from "./AssetList";
import { AssetTypeList } from "./AssetTypeList";
import { Menu } from "./Menu";
import * as s from "./styles";
import { ToolbarMenuButton } from "./ToolbarMenuButton";
import {
  AssetEntry,
  AssetsData,
  AssetsProps,
  ExtendedAssetEntry,
  GroupedAssetEntries,
} from "./types";

const SORTING_CRITERION = [
  "Critical insights",
  "Performance",
  "Latest",
  "Name",
];

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
  const [selectedAssetTypeId, setSelectedAssetTypeId] =
    useState<string>("Endpoint");
  const [sorting, setSorting] = useState<{
    criterion: string;
    isDesc: boolean;
  }>({
    criterion: "Critical insights",
    isDesc: true,
  });

  const theme = useTheme();

  const data = useMemo(() => {
    return props.data ? groupEntries(props.data) : undefined;
  }, [props.data]);

  const assetsCount = useMemo(() => {
    return (
      props.data?.serviceAssetsEntries.map((x) => x.assetEntries).flat()
        .length || 0
    );
  }, [props.data]);

  const handleAssetTypeSelect = (assetTypeId: string) => {
    setSelectedAssetTypeId(assetTypeId);
  };

  const handleAssetLinkClick = (entry: AssetEntry) => {
    // TODO
  };

  const handleSortingMenuItemSelect = (value: string) => {
    if (sorting.criterion === value) {
      setSorting({
        ...sorting,
        isDesc: !sorting.isDesc,
      });
    } else {
      setSorting({
        criterion: value,
        isDesc: false,
      });
    }
  };

  const onGettingStartedButtonClick = () => {
    props.onGettingStartedButtonClick();
  };

  const renderContent = useMemo((): JSX.Element => {
    if (!data || !props.data || assetsCount === 0) {
      return (
        <s.NoDataContainer>
          <s.NoDataContent>
            <s.Circle>
              <StackIcon
                size={32}
                color={theme.palette.mode === "light" ? "#677285" : "#adbecb"}
              />
            </s.Circle>
            <s.NoDataTextContainer>
              <Typography variant="subtitle1">No Data</Typography>
              <s.NoDataText>
                Please follow the instructions on the "Getting started" page to
                collect data from your containers. Then, just make some API
                calls or generate any activity to see the assets behavior on
                this page
              </s.NoDataText>
            </s.NoDataTextContainer>
            <s.GettingStartedButton
              onClick={onGettingStartedButtonClick}
              variant={"contained"}
              endIcon={
                <ExtensionIcon
                  sx={{
                    width: 16,
                    height: 16,
                  }}
                />
              }
            >
              Getting started
            </s.GettingStartedButton>
          </s.NoDataContent>
        </s.NoDataContainer>
      );
    }

    return (
      <>
        <AssetTypeList
          selectedAssetTypeId={selectedAssetTypeId}
          data={data}
          onAssetTypeSelect={handleAssetTypeSelect}
        />
        {selectedAssetTypeId && data[selectedAssetTypeId] && (
          <AssetList
            onAssetLinkClick={handleAssetLinkClick}
            assetTypeId={selectedAssetTypeId}
            entries={data[selectedAssetTypeId]}
            sorting={sorting}
          />
        )}
      </>
    );
  }, [data, assetsCount, props.data, selectedAssetTypeId, sorting]);

  return (
    <s.Container>
      <s.Header>
        <Typography variant={"h4"} component={"h2"}>
          Assets ({assetsCount})
        </Typography>
        <Menu
          value={sorting.criterion}
          title={"Sort by"}
          items={SORTING_CRITERION}
          onSelect={handleSortingMenuItemSelect}
          button={ToolbarMenuButton}
        />
      </s.Header>
      {renderContent}
    </s.Container>
  );
};
