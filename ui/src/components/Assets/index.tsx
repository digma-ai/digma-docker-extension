import CloseIcon from "@mui/icons-material/Close";
import ExtensionIcon from "@mui/icons-material/Extension";
import SearchIcon from "@mui/icons-material/Search";
import { useTheme } from "@mui/material";
import ButtonGroup from "@mui/material/ButtonGroup";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Typography from "@mui/material/Typography";
import { ChangeEvent, useEffect, useMemo, useRef, useState } from "react";
import { DefaultTheme } from "styled-components";
import { usePrevious } from "../../hooks/usePrevious";
import { groupBy } from "../../utils/groupBy";
import { Loader } from "../common/Loader";
import { Menu } from "../common/Menu";
import { CardsCircleIcon } from "../common/icons/CardsCircleIcon";
import { SortIcon } from "../common/icons/SortIcon";
import { StackIcon } from "../common/icons/StackIcon";
import { AssetList } from "./AssetList";
import { AssetTypeList } from "./AssetTypeList";
import { NoData } from "./NoData";
import { ToolbarMenuButton } from "./ToolbarMenuButton";
import * as s from "./styles";
import {
  AssetsData,
  AssetsProps,
  ExtendedAssetEntry,
  GroupedAssetEntries,
  SORTING_CRITERION,
  SORTING_ORDER,
  Sorting
} from "./types";

const groupEntries = (data: AssetsData): GroupedAssetEntries => {
  const assetEntries: ExtendedAssetEntry[] = data.serviceAssetsEntries
    .flat()
    .map((entry) =>
      entry.assetEntries.map((entry) => ({
        ...entry,
        id: entry.span.spanCodeObjectId
      }))
    )
    .flat();

  const assetTypes = groupBy(assetEntries, (x) => x.assetType);

  const groupedAssetEntries: {
    [key: string]: { [key: string]: ExtendedAssetEntry[] };
  } = {};

  Object.keys(assetTypes).forEach((assetType) => {
    groupedAssetEntries[assetType] = groupBy(
      assetTypes[assetType],
      (x) => x.id
    );
  });

  return groupedAssetEntries;
};

const getSortIconColor = (theme: DefaultTheme, selected: boolean) => {
  if (selected) {
    return "#fff";
  }

  switch (theme.palette.mode) {
    case "light":
      return "#8993a5";
    case "dark":
      return "#7794ab";
  }
};

const getDefaultSortingOrder = (
  criterion: SORTING_CRITERION
): SORTING_ORDER => {
  switch (criterion) {
    case SORTING_CRITERION.NAME:
      return SORTING_ORDER.ASC;
    case SORTING_CRITERION.PERFORMANCE:
    case SORTING_CRITERION.SLOWEST_FIVE_PERCENT:
    case SORTING_CRITERION.CRITICAL_INSIGHTS:
    case SORTING_CRITERION.LATEST:
    default:
      return SORTING_ORDER.DESC;
  }
};

export const Assets = (props: AssetsProps) => {
  const [selectedAssetTypeId, setSelectedAssetTypeId] = useState<string>(
    props.assetNavigateTo?.assetType || "Endpoint"
  );
  const previousSelectedAssetTypeId = usePrevious(selectedAssetTypeId);
  const previousEnvironment = usePrevious(props.environment);

  const [sorting, setSorting] = useState<Sorting>({
    criterion: SORTING_CRITERION.CRITICAL_INSIGHTS,
    order: SORTING_ORDER.DESC
  });
  const [searchInputValue, setSearchInputValue] = useState("");

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
    previousEnvironment
  ]);

  const handleAssetTypeSelect = (assetTypeId: string) => {
    setSelectedAssetTypeId(assetTypeId);
  };

  const handleSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchInputValue(e.target.value);
  };

  const handleSearchInputClearIconClick = () => {
    setSearchInputValue("");
  };

  const handleSortingMenuItemSelect = (value: string) => {
    if (sorting.criterion === value) {
      setSorting({
        ...sorting,
        order:
          sorting.order === SORTING_ORDER.DESC
            ? SORTING_ORDER.ASC
            : SORTING_ORDER.DESC
      });
    } else {
      setSorting({
        criterion: value as SORTING_CRITERION,
        order: getDefaultSortingOrder(value as SORTING_CRITERION)
      });
    }
  };

  const handleSortingOrderToggleOptionButtonClick = (order: SORTING_ORDER) => {
    setSorting({
      ...sorting,
      order
    });
  };

  const renderContent = useMemo((): JSX.Element => {
    if (!data || assetsCount === 0) {
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
              onClick={props.onGettingStartedButtonClick}
              variant={"contained"}
              endIcon={
                <ExtensionIcon
                  sx={{
                    width: 16,
                    height: 16
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
            onAssetEntryClick={props.onAssetSelect}
            assetTypeId={selectedAssetTypeId}
            entries={data[selectedAssetTypeId]}
            sorting={sorting}
            searchValue={searchInputValue}
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
    props.environments,
    selectedAssetTypeId,
    sorting,
    searchInputValue,
    props.onAssetSelect,
    props.onGettingStartedButtonClick,
    props.assetNavigateTo,
    props.onAssetNavigate,
    theme.palette.mode
  ]);

  return (
    <s.Container>
      <s.Header>
        <Typography variant={"h4"} component={"h2"}>
          Assets ({assetsCount})
        </Typography>
        <s.Toolbar>
          <s.SearchTextField
            placeholder={"Search"}
            value={searchInputValue}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  {searchInputValue ? (
                    <IconButton
                      onClick={handleSearchInputClearIconClick}
                      disableFocusRipple={true}
                    >
                      <CloseIcon />
                    </IconButton>
                  ) : (
                    <SearchIcon />
                  )}
                </InputAdornment>
              )
            }}
            onChange={handleSearchInputChange}
          />
          <Menu
            value={sorting.criterion}
            title={"Sort by"}
            items={Object.values(SORTING_CRITERION)}
            onSelect={handleSortingMenuItemSelect}
            button={ToolbarMenuButton}
          />
          <ButtonGroup variant={"contained"} disableElevation>
            {[SORTING_ORDER.DESC, SORTING_ORDER.ASC].map((order) => {
              const isSelected = sorting.order === order;
              const iconColor = getSortIconColor(theme, isSelected);

              return (
                <s.SortingOrderButton
                  key={order}
                  selected={isSelected}
                  disabled={isSelected}
                  onClick={() =>
                    handleSortingOrderToggleOptionButtonClick(order)
                  }
                >
                  <s.SortingOrderIconContainer sortingOrder={order}>
                    <SortIcon color={iconColor} size={24} />
                  </s.SortingOrderIconContainer>
                </s.SortingOrderButton>
              );
            })}
          </ButtonGroup>
        </s.Toolbar>
      </s.Header>
      {renderContent}
    </s.Container>
  );
};
