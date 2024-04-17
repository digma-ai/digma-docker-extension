import Typography from "@mui/material/Typography";
import { Allotment } from "allotment";
import "allotment/dist/style.css";
import { useCallback, useEffect, useRef, useState } from "react";
import { ddClient } from "../../dockerDesktopClient";
import { usePrevious } from "../../hooks/usePrevious";
import { Assets, PAGE_SIZE } from "../Assets";
import { AssetInsights } from "../Assets/AssetInsights";
import { Trace } from "../Assets/AssetInsights/types";
import {
  AssetEntry,
  AssetTypeData,
  AssetsData,
  AssetsFilters,
  GetAssetTypesResponse,
  GetAssetsResponse,
  SORTING_CRITERION,
  SORTING_ORDER
} from "../Assets/types";
import { GettingStarted } from "../GettingStarted";
import { Jaeger } from "../Jaeger";
import { SpanData } from "../Jaeger/types";
import { Loader } from "../common/Loader";
import { Menu } from "../common/Menu";
import { Page } from "../common/Page";
import { PageContent } from "../common/Page/types";
import { DigmaLogoIcon } from "../common/icons/DigmaLogoIcon";
import { PAGES } from "./constants";
import * as s from "./styles";

const REFRESH_INTERVAL = 10 * 1000; // in milliseconds

const defaultAssetsFilters = {
  type: "Endpoint",
  page: 0,
  pageSize: PAGE_SIZE,
  sortBy: SORTING_CRITERION.CRITICAL_INSIGHTS,
  order: SORTING_ORDER.DESC,
  search: ""
};

export const App = () => {
  const [assets, setAssets] = useState<AssetsData>();
  const [assetTypes, setAssetTypes] = useState<AssetTypeData[]>();
  const [environments, setEnvironments] = useState<string[]>();
  const [selectedEnvironment, setSelectedEnvironment] = useState<string>();
  const [currentPage, setCurrentPage] = useState<string>(PAGES.GETTING_STARTED);
  const previousPage = usePrevious(currentPage);
  const [isRedirectedToAssets, setIsRedirectedToAssets] = useState(false);
  const [selectedAsset, setSelectedAsset] = useState<AssetEntry | string>();
  const [assetNavigateTo, setAssetNavigateTo] = useState<string>();
  const [selectedTraces, setSelectedTraces] = useState<Trace[]>();
  const refreshTimerId = useRef<number>();
  const [lastRefreshTimeStamp, setLastRefreshTimeStamp] = useState<number>();
  const previousLastRefreshTimeStamp = usePrevious(lastRefreshTimeStamp);
  const [assetsFilters, setAssetsFilters] =
    useState<AssetsFilters>(defaultAssetsFilters);
  // const [isBadgeVisible, setIsBadgeVisible] = useState<boolean>(false);

  // const isBadgeEnabled = ["true", null].includes(
  //   localStorage.getItem("isBadgeEnabled")
  // );

  const fetchEnvironments = useCallback(async () => {
    const environments = (await ddClient.extension.vm?.service?.get(
      "/environments"
    )) as string[];
    console.debug("Environments have been fetched:", environments);
    const sortedEnvironments = [...environments].sort((a, b) =>
      a.localeCompare(b)
    );
    setEnvironments(sortedEnvironments);
    setLastRefreshTimeStamp(Date.now());
  }, []);

  const fetchAssetTypes = useCallback(async (environment: string) => {
    const assetTypes = (await ddClient.extension.vm?.service?.get(
      `/environments/${encodeURIComponent(environment)}/asset-types`
    )) as GetAssetTypesResponse;
    console.debug(
      `Asset types for "${environment}" environment have been fetched:`,
      assetTypes
    );

    setAssetTypes(assetTypes.assetCategories);
  }, []);

  const fetchAssets = useCallback(
    async (environment: string, filters: AssetsFilters) => {
      const params = Object.entries(filters)
        .filter(([, value]) => typeof value !== "string" || value.length !== 0)
        .reduce<Record<string, string>>(
          (acc, [key, value]) => ({ ...acc, [key]: String(value) }),
          {}
        );

      const queryString = new URLSearchParams(params).toString();

      const assets = (await ddClient.extension.vm?.service?.get(
        `/environments/${encodeURIComponent(environment)}/assets?${queryString}`
      )) as GetAssetsResponse;
      console.debug(
        `Assets for "${environment}" environment have been fetched:`,
        assets
      );

      setAssets({ ...assets, data: assets.data });
    },
    []
  );

  // useEffect(() => {
  //   void fetchEnvironments();

  //   return () => {
  //     window.clearTimeout(refreshTimerId.current);
  //   };
  // }, []);

  useEffect(() => {
    if (
      previousLastRefreshTimeStamp !== lastRefreshTimeStamp &&
      currentPage === PAGES.ASSETS
    ) {
      refreshTimerId.current = window.setTimeout(() => {
        void fetchEnvironments();
      }, REFRESH_INTERVAL);
    }
  }, [
    fetchEnvironments,
    currentPage,
    previousLastRefreshTimeStamp,
    lastRefreshTimeStamp
  ]);

  useEffect(() => {
    if (previousPage !== currentPage) {
      window.clearTimeout(refreshTimerId.current);
      if (currentPage === PAGES.ASSETS) {
        void fetchEnvironments();
      }
    }
  }, [fetchEnvironments, previousPage, currentPage]);

  useEffect(() => {
    if (!selectedEnvironment && environments && environments.length > 0) {
      setSelectedEnvironment(environments[0]);
    }
  }, [selectedEnvironment, environments]);

  useEffect(() => {
    if (selectedEnvironment && environments) {
      if (environments.includes(selectedEnvironment)) {
        void fetchAssetTypes(selectedEnvironment);
      } else {
        setSelectedEnvironment(undefined);
        setAssetTypes(undefined);
        setAssets(undefined);
        setSelectedAsset(undefined);
        setAssetsFilters(defaultAssetsFilters);
      }
    }
  }, [selectedEnvironment, environments, fetchAssetTypes]);

  useEffect(() => {
    if (selectedEnvironment && assetTypes) {
      void fetchAssets(selectedEnvironment, assetsFilters);
    }
  }, [fetchAssets, assetTypes, selectedEnvironment, assetsFilters]);

  // Redirect to "Getting started" page on startup if there are no environments yet
  useEffect(() => {
    if (!currentPage && environments?.length === 0) {
      setCurrentPage(PAGES.GETTING_STARTED);
    }
  }, [currentPage, environments]);

  // Redirect to corresponding page on startup depending on assets availability
  useEffect(() => {
    if (!currentPage && assetTypes) {
      const areAssetsAvailable = assetTypes.some((x) => x.count > 0);
      if (areAssetsAvailable) {
        setCurrentPage(PAGES.ASSETS);
        setIsRedirectedToAssets(true);
      } else {
        setCurrentPage(PAGES.GETTING_STARTED);
      }
    }
  }, [assetTypes, currentPage]);

  // Show badge on "Go To Assets page" button
  // when the are environments with no assets yet
  // useEffect(() => {
  //   const assetsCount =
  //     assets?.serviceAssetsEntries.map((x) => x.assetEntries).flat().length ||
  //     0;

  //   if (environments && environments.length > 0 && isBadgeEnabled) {
  //     setIsBadgeVisible(assetsCount === 0);
  //   }
  // }, [assets, environments, isRedirectedToAssets]);

  const handleEnvironmentSelect = (environment: string) => {
    setSelectedEnvironment(environment);
  };

  const handleGoToAssetPage = () => {
    setSelectedAsset(undefined);

    // if (isBadgeEnabled && isBadgeVisible) {
    //   localStorage.setItem("isBadgeEnabled", "false");
    //   setIsBadgeVisible(false);
    // }

    setCurrentPage(PAGES.ASSETS);
  };

  const handleAssetNavigate = () => {
    setAssetNavigateTo(undefined);
  };

  const handleGettingStartedButtonClick = () => {
    setCurrentPage(PAGES.GETTING_STARTED);
  };

  const handleAssetSelect = (asset: AssetEntry | string) => {
    setSelectedAsset(asset);

    if (typeof asset === "object") {
      setAssetNavigateTo(asset.spanCodeObjectId);
    }
  };

  const handlePageChange = (page: string) => {
    setCurrentPage(page);
  };

  const handleTracesSelect = (traces: Trace[]) => {
    setSelectedTraces(traces);
  };

  const handleJaegerCloseButtonClick = () => {
    setSelectedTraces(undefined);
  };

  const handleSpanSelect = (span: SpanData) => {
    if (
      !environments ||
      !span.environment ||
      !selectedEnvironment ||
      !span.spanCodeObjectId
    ) {
      return;
    }

    const spanEnvironment = span.environment.toUpperCase();

    if (!environments.includes(spanEnvironment)) {
      return;
    }

    if (spanEnvironment !== selectedEnvironment) {
      setSelectedEnvironment(spanEnvironment);
    }

    setSelectedAsset(span.spanCodeObjectId);
  };

  const handleAssetsFiltersChange = (filters: AssetsFilters) => {
    setAssetsFilters(filters);
  };

  console.debug("State:", {
    currentPage,
    environments,
    selectedEnvironment,
    lastRefreshTimeStamp,
    assets,
    assetTypes,
    assetsFilters,
    // isBadgeVisible,
    isRedirectedToAssets,
    selectedAsset,
    assetNavigateTo,
    selectedTraces
  });

  const pages: Record<string, PageContent> = {
    [PAGES.GETTING_STARTED]: {
      header: (
        <s.GettingStartedHeader>
          <s.DigmaLogoContainer>
            <DigmaLogoIcon size={52} />
          </s.DigmaLogoContainer>
          <s.TitleContainer>
            <Typography variant={"h3"} component={"h1"}>
              Digma
            </Typography>
            <Typography color={"text.secondary"}>
              Getting Started with Digma
            </Typography>
          </s.TitleContainer>
        </s.GettingStartedHeader>
      ),
      main: <GettingStarted />
    },
    [PAGES.ASSETS]: {
      header: (
        <Menu
          title={"Environments"}
          placeholder={"No Environments"}
          icon={<DigmaLogoIcon size={24} />}
          value={selectedEnvironment}
          items={
            environments
              ? environments.map((x) => ({ label: x, value: x }))
              : undefined
          }
          onSelect={handleEnvironmentSelect}
          disabled={!environments || environments.length === 0}
          width={202}
        />
      ),
      main:
        assets && selectedAsset && selectedEnvironment ? (
          <AssetInsights
            assets={assets.data}
            assetEntry={selectedAsset}
            environment={selectedEnvironment}
            onGoToAssetsPage={handleGoToAssetPage}
            onAssetSelect={handleAssetSelect}
            onTracesSelect={handleTracesSelect}
          />
        ) : (
          <Assets
            data={assets}
            assetTypes={assetTypes}
            onGettingStartedButtonClick={handleGettingStartedButtonClick}
            environments={environments}
            onAssetSelect={handleAssetSelect}
            assetNavigateTo={assetNavigateTo}
            onAssetNavigate={handleAssetNavigate}
            environment={selectedEnvironment}
            filters={assetsFilters}
            onFiltersChange={handleAssetsFiltersChange}
          />
        )
    }
  };

  return (
    <s.Container>
      <s.GlobalStyles />
      <Allotment defaultSizes={[50, 50]}>
        <Allotment.Pane>
          {currentPage && (
            <Page
              header={pages[currentPage].header}
              main={pages[currentPage].main}
              onPageChange={handlePageChange}
              currentPage={currentPage}
              isSidePanelOpen={Boolean(selectedTraces)}
            />
          )}
          {!currentPage && (
            <s.LoaderContainer>
              <Loader size={100} status={"pending"} />
              <Typography>Initializing...</Typography>
            </s.LoaderContainer>
          )}
        </Allotment.Pane>
        <Allotment.Pane
          minSize={450}
          visible={Boolean(selectedTraces && selectedEnvironment)}
        >
          {selectedTraces && selectedEnvironment && (
            <s.JaegerContainer>
              <Jaeger
                environment={selectedEnvironment}
                onSpanSelect={handleSpanSelect}
                traces={selectedTraces}
                onClose={handleJaegerCloseButtonClick}
              />
            </s.JaegerContainer>
          )}
        </Allotment.Pane>
      </Allotment>
    </s.Container>
  );
};
