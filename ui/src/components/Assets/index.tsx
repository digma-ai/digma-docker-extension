import CloseIcon from "@mui/icons-material/Close";
import ExtensionIcon from "@mui/icons-material/Extension";
import SearchIcon from "@mui/icons-material/Search";
import { useTheme } from "@mui/material";
import ButtonGroup from "@mui/material/ButtonGroup";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Pagination from "@mui/material/Pagination";
import Typography from "@mui/material/Typography";
import { ChangeEvent, useEffect, useMemo, useRef, useState } from "react";
import { DefaultTheme } from "styled-components";
import { useDebounce } from "../../hooks/useDebounce";
import { usePrevious } from "../../hooks/usePrevious";
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
import { AssetsProps, SORTING_CRITERION, SORTING_ORDER } from "./types";

export const PAGE_SIZE = 10;

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

const getSortingCriterionInfo = (
  sortingCriterion: SORTING_CRITERION
): {
  label: string;
  defaultOrder: SORTING_ORDER;
} => {
  const sortingCriterionInfoMap = {
    [SORTING_CRITERION.CRITICAL_INSIGHTS]: {
      label: "Critical insights",
      defaultOrder: SORTING_ORDER.DESC
    },
    [SORTING_CRITERION.PERFORMANCE]: {
      label: "Performance",
      defaultOrder: SORTING_ORDER.DESC
    },
    [SORTING_CRITERION.SLOWEST_FIVE_PERCENT]: {
      label: "Slowest 5%",
      defaultOrder: SORTING_ORDER.DESC
    },
    [SORTING_CRITERION.LATEST]: {
      label: "Latest",
      defaultOrder: SORTING_ORDER.DESC
    },
    [SORTING_CRITERION.NAME]: {
      label: "Name",
      defaultOrder: SORTING_ORDER.ASC
    },
    [SORTING_CRITERION.PERFORMANCE_IMPACT]: {
      label: "Performance impact",
      defaultOrder: SORTING_ORDER.DESC
    },
    [SORTING_CRITERION.OVERALL_IMPACT]: {
      label: "Overall impact",
      defaultOrder: SORTING_ORDER.DESC
    }
  };

  return sortingCriterionInfoMap[sortingCriterion];
};

export const Assets = (props: AssetsProps) => {
  const previousSelectedAssetTypeId = usePrevious(props.filters.type);
  const previousEnvironment = usePrevious(props.environment);
  const previousFilters = usePrevious(props.filters);
  const [searchInputValue, setSearchInputValue] = useState(
    props.filters.search
  );
  const debouncedSearchInputValue = useDebounce(searchInputValue, 1000);
  const previousDebouncedSearchInputValue = usePrevious(
    debouncedSearchInputValue
  );

  const assetListRef = useRef<HTMLUListElement>(null);

  const theme = useTheme();

  const assetsCount = useMemo(
    () =>
      props.assetTypes
        ? props.assetTypes.reduce((acc, cur) => acc + cur.count, 0)
        : 0,
    [props.assetTypes]
  );

  const pageCount = props.data
    ? Math.ceil(props.data.filteredCount / PAGE_SIZE)
    : 0;

  useEffect(() => {
    const didEnvironmentChanged =
      previousEnvironment && previousEnvironment !== props.environment;
    const didAssetTypeIdChanged =
      previousSelectedAssetTypeId &&
      previousSelectedAssetTypeId !== props.filters.type;
    const didSortingCriterionChanged =
      previousFilters && previousFilters.sortBy !== props.filters.sortBy;
    const didSortingOrderChanged =
      previousFilters && previousFilters.order !== props.filters.order;
    const didSearchValueChanged =
      previousFilters && previousFilters.search !== props.filters.search;
    const didPageChanged =
      previousFilters && previousFilters.page !== props.filters.page;
    const didPageSizeChanged =
      previousFilters && previousFilters.pageSize !== props.filters.pageSize;

    if (
      didEnvironmentChanged ||
      didAssetTypeIdChanged ||
      didSortingCriterionChanged ||
      didSortingOrderChanged ||
      didSearchValueChanged ||
      didPageSizeChanged
    ) {
      props.onFiltersChange({ ...props.filters, page: 0 });
    }

    if (
      (didEnvironmentChanged ||
        didAssetTypeIdChanged ||
        didSortingCriterionChanged ||
        didSortingOrderChanged ||
        didSearchValueChanged ||
        didPageChanged ||
        didPageSizeChanged) &&
      assetListRef.current
    ) {
      assetListRef.current.scrollTop = 0;
    }
  }, [
    previousSelectedAssetTypeId,
    props.environment,
    previousEnvironment,
    props.filters,
    previousFilters,
    props.onFiltersChange
  ]);

  useEffect(() => {
    if (previousDebouncedSearchInputValue !== debouncedSearchInputValue) {
      props.onFiltersChange({
        ...props.filters,
        search: debouncedSearchInputValue
      });
    }
  }, [
    props.onFiltersChange,
    props.filters,
    previousDebouncedSearchInputValue,
    debouncedSearchInputValue
  ]);

  const handleAssetTypeSelect = (assetTypeId: string) => {
    props.onFiltersChange({ ...props.filters, type: assetTypeId });
  };

  const handlePageChange = (e: React.ChangeEvent<unknown>, page: number) => {
    props.onFiltersChange({ ...props.filters, page: page - 1 });
  };

  const handleSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchInputValue(e.target.value);
  };

  const handleSearchInputClearIconClick = () => {
    setSearchInputValue("");
  };

  const handleSortingMenuItemSelect = (value: string) => {
    if (props.filters.sortBy === value) {
      props.onFiltersChange({
        ...props.filters,
        order:
          props.filters.order === SORTING_ORDER.DESC
            ? SORTING_ORDER.ASC
            : SORTING_ORDER.DESC
      });
    } else {
      props.onFiltersChange({
        ...props.filters,
        sortBy: value as SORTING_CRITERION,
        order: getSortingCriterionInfo(value as SORTING_CRITERION).defaultOrder
      });
    }
  };

  const handleSortingOrderToggleOptionButtonClick = (order: SORTING_ORDER) => {
    props.onFiltersChange({ ...props.filters, order });
  };

  const renderContent = (): JSX.Element => {
    if (!props.data || assetsCount === 0) {
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
          selectedAssetTypeId={props.filters.type}
          data={props.assetTypes}
          onAssetTypeSelect={handleAssetTypeSelect}
        />
        {props.data.data.length > 0 ? (
          <s.AssetListContainer>
            <AssetList
              ref={assetListRef}
              onAssetEntryClick={props.onAssetSelect}
              entries={props.data.data}
              assetNavigateTo={props.assetNavigateTo}
              onAssetNavigate={props.onAssetNavigate}
              sortingCriterion={props.filters.sortBy}
            />
            <Pagination
              page={props.filters.page + 1}
              count={pageCount}
              onChange={handlePageChange}
              size={"large"}
            />
          </s.AssetListContainer>
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
  };

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
                  {searchInputValue.length > 0 ? (
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
            value={props.filters.sortBy}
            title={"Sort by"}
            items={Object.values(SORTING_CRITERION).map((x) => ({
              value: x,
              label: getSortingCriterionInfo(x).label
            }))}
            onSelect={handleSortingMenuItemSelect}
            button={ToolbarMenuButton}
          />
          <ButtonGroup variant={"contained"} disableElevation>
            {[SORTING_ORDER.DESC, SORTING_ORDER.ASC].map((order) => {
              const isSelected = props.filters.order === order;
              const iconColor = getSortIconColor(theme, isSelected);

              return (
                <s.SortingOrderButton
                  key={order}
                  $selected={isSelected}
                  disabled={isSelected}
                  onClick={() =>
                    handleSortingOrderToggleOptionButtonClick(order)
                  }
                >
                  <s.SortingOrderIconContainer $sortingOrder={order}>
                    <SortIcon color={iconColor} size={24} />
                  </s.SortingOrderIconContainer>
                </s.SortingOrderButton>
              );
            })}
          </ButtonGroup>
        </s.Toolbar>
      </s.Header>
      {renderContent()}
    </s.Container>
  );
};
