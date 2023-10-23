import Typography from "@mui/material/Typography";
import { Allotment } from "allotment";
import "allotment/dist/style.css";
import { useCallback, useEffect, useRef, useState } from "react";
import { ddClient } from "../../dockerDesktopClient";
import { usePrevious } from "../../hooks/usePrevious";
import { groupBy } from "../../utils/groupBy";
import { Assets } from "../Assets";
import { AssetInsights } from "../Assets/AssetInsights";
import { Trace } from "../Assets/AssetInsights/types";
import {
  AssetsData,
  ExtendedAssetEntry,
  ExtendedAssetEntryWithServices,
  GetAssetsResponse,
  GroupedAssetEntries
} from "../Assets/types";
import { findAssetBySpanCodeObjectId } from "../Assets/utils/findAssetBySpanCodeObjectId";
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

const dedupeEntries = (groupedEntries: {
  [key: string]: ExtendedAssetEntry[];
}): ExtendedAssetEntryWithServices[] =>
  Object.keys(groupedEntries).map((entryId) => {
    const entries = groupedEntries[entryId];

    const latestEntry = entries.reduce(
      (acc, cur) =>
        new Date(cur.lastSpanInstanceInfo.startTime).valueOf() >
        new Date(acc.lastSpanInstanceInfo.startTime).valueOf()
          ? cur
          : acc,
      entries[0]
    );

    const relatedServices = entries.map((entry) => entry.serviceName).sort();

    return {
      ...latestEntry,
      relatedServices
    };
  });

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

  const groupedAssetEntries: GroupedAssetEntries = {};

  Object.keys(assetTypes).forEach((assetType) => {
    const assetTypeGroups = groupBy(assetTypes[assetType], (x) => x.id);
    console.debug("Assets dictionary: ", assetTypeGroups);

    groupedAssetEntries[assetType] = dedupeEntries(assetTypeGroups);
  });

  return groupedAssetEntries;
};

const REFRESH_INTERVAL = 10 * 1000; // in milliseconds

export const App = () => {
  const [assets, setAssets] = useState<GroupedAssetEntries>();
  const [environments, setEnvironments] = useState<string[]>();
  const [selectedEnvironment, setSelectedEnvironment] = useState<string>();
  const [currentPage, setCurrentPage] = useState<string>();
  const previousPage = usePrevious(currentPage);
  const [isRedirectedToAssets, setIsRedirectedToAssets] = useState(false);
  const [selectedAsset, setSelectedAsset] =
    useState<ExtendedAssetEntryWithServices>();
  const [assetNavigateTo, setAssetNavigateTo] =
    useState<ExtendedAssetEntryWithServices>();
  const [selectedTraces, setSelectedTraces] = useState<Trace[]>();
  const [spanSelectTo, setSpanSelectTo] = useState<SpanData>();
  const refreshTimerId = useRef<number>();
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
  }, []);

  const fetchAssets = useCallback(async (environment: string) => {
    const assets = (await ddClient.extension.vm?.service?.post(
      `/environments/${encodeURIComponent(environment)}/assets`,
      { serviceNames: [] }
    )) as GetAssetsResponse;
    console.debug(
      `Assets for "${environment}" environment have been fetched:`,
      assets
    );

    const groupedAssetEntries = assets ? groupEntries(assets) : undefined;

    setAssets(groupedAssetEntries);
  }, []);

  useEffect(() => {
    void fetchEnvironments();
  }, [fetchEnvironments]);

  useEffect(() => {
    if (previousPage !== currentPage) {
      window.clearTimeout(refreshTimerId.current);
      if (currentPage === PAGES.ASSETS) {
        void fetchEnvironments();
        refreshTimerId.current = window.setTimeout(() => {
          void fetchEnvironments();
        }, REFRESH_INTERVAL);
      }
    }
  }, [fetchEnvironments, currentPage, previousPage]);

  useEffect(() => {
    if (!selectedEnvironment && environments && environments.length > 0) {
      setSelectedEnvironment(environments[0]);
    }
  }, [selectedEnvironment, environments]);

  useEffect(() => {
    if (selectedEnvironment && environments) {
      if (environments.includes(selectedEnvironment)) {
        void fetchAssets(selectedEnvironment);
      } else {
        setSelectedEnvironment(undefined);
        setAssets(undefined);
        setSelectedAsset(undefined);
      }
    }
  }, [selectedEnvironment, environments, fetchAssets]);

  // Redirect to "Getting started" page on startup if there are no environments yet
  useEffect(() => {
    if (!currentPage && environments?.length === 0) {
      setCurrentPage(PAGES.GETTING_STARTED);
    }
  }, [currentPage, environments]);

  // Redirect to corresponding page on startup depending on assets availability
  useEffect(() => {
    if (!currentPage && assets) {
      const areAssetsAvailable = Object.values(assets).some(
        (x) => x.length > 0
      );
      if (areAssetsAvailable) {
        setCurrentPage(PAGES.ASSETS);
        setIsRedirectedToAssets(true);
      } else {
        setCurrentPage(PAGES.GETTING_STARTED);
      }
    }
  }, [assets, currentPage]);

  useEffect(() => {
    if (
      spanSelectTo &&
      assets &&
      [assets.environment, selectedEnvironment].every(
        (x) =>
          x &&
          spanSelectTo.environment &&
          x === spanSelectTo.environment.toUpperCase()
      ) &&
      spanSelectTo.spanCodeObjectId
    ) {
      const asset = findAssetBySpanCodeObjectId(
        assets,
        spanSelectTo.spanCodeObjectId
      );

      if (asset) {
        setSelectedAsset(asset);
      }

      setSpanSelectTo(undefined);
    }
  }, [assets, spanSelectTo, selectedEnvironment]);

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

  const handleGoToAssetPage = (asset?: ExtendedAssetEntryWithServices) => {
    goToAssetPage(asset);
  };

  const handleAssetNavigate = () => {
    setAssetNavigateTo(undefined);
  };

  const goToAssetPage = (assetNavigateTo?: ExtendedAssetEntryWithServices) => {
    setSelectedAsset(undefined);
    setAssetNavigateTo(assetNavigateTo);

    // if (isBadgeEnabled && isBadgeVisible) {
    //   localStorage.setItem("isBadgeEnabled", "false");
    //   setIsBadgeVisible(false);
    // }

    setCurrentPage(PAGES.ASSETS);
  };

  const handleGettingStartedButtonClick = () => {
    setCurrentPage(PAGES.GETTING_STARTED);
  };

  const handleAssetSelect = (asset: ExtendedAssetEntryWithServices) => {
    setSelectedAsset(asset);
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
      !environments.includes(span.environment.toUpperCase()) ||
      !assets ||
      !span.spanCodeObjectId
    ) {
      return;
    }

    const spanEnvironment = span.environment.toUpperCase();

    if (spanEnvironment !== selectedEnvironment) {
      setSelectedEnvironment(spanEnvironment);
      setSpanSelectTo(span);
      return;
    }

    const asset = findAssetBySpanCodeObjectId(assets, span.spanCodeObjectId);

    if (asset) {
      setSelectedAsset(asset);
    }
  };

  console.debug("State:", {
    assets,
    environments,
    selectedEnvironment,
    currentPage,
    // isBadgeVisible,
    isRedirectedToAssets,
    selectedAsset,
    assetNavigateTo,
    selectedTraces,
    spanSelectTo
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
          items={environments}
          onSelect={handleEnvironmentSelect}
          disabled={!environments || environments.length === 0}
          width={202}
        />
      ),
      main:
        assets && selectedAsset && selectedEnvironment ? (
          <AssetInsights
            assets={assets}
            assetEntry={selectedAsset}
            environment={selectedEnvironment}
            onGoToAssetsPage={handleGoToAssetPage}
            onAssetSelect={handleAssetSelect}
            onTracesSelect={handleTracesSelect}
          />
        ) : (
          <Assets
            data={assets}
            onGettingStartedButtonClick={handleGettingStartedButtonClick}
            environments={environments}
            onAssetSelect={handleAssetSelect}
            assetNavigateTo={assetNavigateTo}
            onAssetNavigate={handleAssetNavigate}
            environment={selectedEnvironment}
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
