import ExtensionIcon from "@mui/icons-material/Extension";
import { useTheme } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useEffect, useMemo, useRef, useState } from "react";
import { usePrevious } from "../../hooks/usePrevious";
import { groupBy } from "../../utils/groupBy";
import { Loader } from "../common/Loader";
import { CardsCircleIcon } from "../common/icons/CardsCircleIcon";
import { StackIcon } from "../common/icons/StackIcon";
import { AssetList } from "./AssetList";
import { AssetTypeList } from "./AssetTypeList";
import { Menu } from "./Menu";
import { NoData } from "./NoData";
import { ToolbarMenuButton } from "./ToolbarMenuButton";
import * as s from "./styles";
import {
  AssetsData,
  AssetsProps,
  ExtendedAssetEntry,
  GroupedAssetEntries,
  SORTING_CRITERION,
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
  const [selectedAssetTypeId, setSelectedAssetTypeId] = useState<string>(
    props.assetNavigateTo?.assetType || "Endpoint"
  );
  const previousSelectedAssetTypeId = usePrevious(selectedAssetTypeId);
  const previousEnvironment = usePrevious(props.environment);

  const [sorting, setSorting] = useState<{
    criterion: SORTING_CRITERION;
    isDesc: boolean;
  }>({
    criterion: SORTING_CRITERION.CRITICAL_INSIGHTS,
    isDesc: true,
  });

  const assetListRef = useRef<HTMLUListElement>(null);

  const theme = useTheme();

  const data = useMemo(() => {
    return props.data ? groupEntries(props.data) : undefined;
  }, [props.data]);

  console.debug("Assets dictionary: ", data);

  const assetsCount = useMemo(() => {
    return (
      props.data?.serviceAssetsEntries.map((x) => x.assetEntries).flat()
        .length || 0
    );
  }, [props.data]);

  useEffect(() => {
    if (props.assetNavigateTo) {
      setSelectedAssetTypeId(props.assetNavigateTo.assetType);
    }
  }, [props.assetNavigateTo]);

  useEffect(() => {
    const didEnvironmentChanged =
      previousEnvironment && previousEnvironment !== props.environment;
    const didAssetTypeIdChanged =
      previousSelectedAssetTypeId &&
      previousSelectedAssetTypeId !== selectedAssetTypeId;

    if (
      (didEnvironmentChanged || didAssetTypeIdChanged) &&
      assetListRef.current
    ) {
      assetListRef.current.scrollTop = 0;
    }
  }, [
    selectedAssetTypeId,
    previousSelectedAssetTypeId,
    props.environment,
    previousEnvironment,
  ]);

  const handleAssetTypeSelect = (assetTypeId: string) => {
    setSelectedAssetTypeId(assetTypeId);
  };

  const handleAssetLinkClick = (entry: ExtendedAssetEntry) => {
    props.onAssetSelect(entry);
  };

  const handleSortingMenuItemSelect = (value: string) => {
    if (sorting.criterion === value) {
      setSorting({
        ...sorting,
        isDesc: !sorting.isDesc,
      });
    } else {
      setSorting({
        criterion: value as SORTING_CRITERION,
        isDesc: false,
      });
    }
  };

  const onGettingStartedButtonClick = () => {
    props.onGettingStartedButtonClick();
  };

  const renderContent = useMemo((): JSX.Element => {
    if (!data || !props.data || assetsCount === 0) {
      return !props.environments || props.environments.length === 0 ? (
        <NoData
          icon={
            <s.Circle>
              <StackIcon
                size={32}
                color={theme.palette.mode === "light" ? "#677285" : "#adbecb"}
              />
            </s.Circle>
          }
          title={"No Data"}
          description={
            'Please follow the instructions on the "Getting started" page to collect data from your containers. Then, just make some API calls or generate any activity to see the assets behavior on this page'
          }
          additionalContent={
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
          }
        />
      ) : (
        <NoData
          icon={<Loader status={"pending"} size={86} />}
          title={"Processing Insights..."}
        />
      );
    }

    return (
      <>
        <AssetTypeList
          selectedAssetTypeId={selectedAssetTypeId}
          data={data}
          onAssetTypeSelect={handleAssetTypeSelect}
        />
        {data[selectedAssetTypeId] ? (
          <AssetList
            ref={assetListRef}
            onAssetLinkClick={handleAssetLinkClick}
            assetTypeId={selectedAssetTypeId}
            entries={data[selectedAssetTypeId]}
            sorting={sorting}
            assetNavigateTo={props.assetNavigateTo}
            onAssetNavigate={props.onAssetNavigate}
          />
        ) : (
          <NoData
            icon={
              <CardsCircleIcon
                color={theme.palette.mode === "light" ? "#677285" : "#adbecb"}
                size={96}
              />
            }
            title={"No Data Yet"}
            description={
              "Just make some API calls or generate any activity to see this type of assets"
            }
          />
        )}
      </>
    );
  }, [
    data,
    assetsCount,
    props.data,
    props.environments,
    selectedAssetTypeId,
    sorting,
  ]);

  return (
    <s.Container>
      <s.Header>
        <Typography variant={"h4"} component={"h2"}>
          Assets ({assetsCount})
        </Typography>
        <Menu
          value={sorting.criterion}
          title={"Sort by"}
          items={Object.values(SORTING_CRITERION)}
          onSelect={handleSortingMenuItemSelect}
          button={ToolbarMenuButton}
        />
      </s.Header>
      {renderContent}
    </s.Container>
  );
};
