import Typography from "@mui/material/Typography";
import { Allotment } from "allotment";
import "allotment/dist/style.css";
import { useCallback, useEffect, useState } from "react";
import { ddClient } from "../../dockerDesktopClient";
import { Assets } from "../Assets";
import { AssetInsights } from "../Assets/AssetInsights";
import { Trace } from "../Assets/AssetInsights/types";
import { Menu } from "../Assets/Menu";
import {
  AssetsData,
  ExtendedAssetEntry,
  GetAssetsResponse
} from "../Assets/types";
import { findAssetBySpanCodeObjectId } from "../Assets/utils/findAssetBySpanCodeObjectId";
import { GettingStarted } from "../GettingStarted";
import { Jaeger } from "../Jaeger";
import { SpanData } from "../Jaeger/types";
import { Loader } from "../common/Loader";
import { Page } from "../common/Page";
import { PageContent } from "../common/Page/types";
import { DigmaLogoIcon } from "../common/icons/DigmaLogoIcon";
import { PAGES } from "./constants";
import * as s from "./styles";

const REFRESH_INTERVAL = 10 * 1000; // in milliseconds

export const App = () => {
  const [assets, setAssets] = useState<AssetsData>();
  const [environments, setEnvironments] = useState<string[]>();
  const [selectedEnvironment, setSelectedEnvironment] = useState<string>();
  const [currentPage, setCurrentPage] = useState<string>();
  const [isRedirectedToAssets, setIsRedirectedToAssets] = useState(false);
  const [selectedAsset, setSelectedAsset] = useState<ExtendedAssetEntry>();
  const [assetNavigateTo, setAssetNavigateTo] = useState<ExtendedAssetEntry>();
  const [selectedTraces, setSelectedTraces] = useState<Trace[]>();
  // const [isBadgeVisible, setIsBadgeVisible] = useState<boolean>(false);

  // const isBadgeEnabled = ["true", null].includes(
  //   localStorage.getItem("isBadgeEnabled")
  // );

  const fetchEnvironments = useCallback(async () => {
    const environments = (await ddClient.extension.vm?.service?.get(
      "/environments"
    )) as string[];
    console.debug("Environments have been fetched:", environments);
    setEnvironments(environments);
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
    setAssets({
      serviceAssetsEntries: assets.serviceAssetsEntries
    });
  }, []);

  useEffect(() => {
    void fetchEnvironments();
  }, [fetchEnvironments]);

  useEffect(() => {
    const timer = setTimeout(() => {
      void fetchEnvironments();
    }, REFRESH_INTERVAL);

    return () => {
      clearTimeout(timer);
    };
  }, [environments, fetchEnvironments]);

  useEffect(() => {
    if (!selectedEnvironment && environments && environments.length > 0) {
      setSelectedEnvironment(environments[0]);
    }
  }, [selectedEnvironment, environments]);

  useEffect(() => {
    if (selectedEnvironment && environments && environments.length > 0) {
      void fetchAssets(selectedEnvironment);
    }
  }, [selectedEnvironment, environments, fetchAssets]);

  // Redirect to "Getting started" page on startup if there are no environments yet
  useEffect(() => {
    if (!currentPage && environments?.length === 0) {
      setCurrentPage(PAGES.GETTING_STARTED);
    }
  }, [currentPage, environments]);

  // Redirect to corresponding page page on startup depending on assets availability
  useEffect(() => {
    if (!currentPage && assets) {
      const areAssetsAvailable =
        assets.serviceAssetsEntries.map((x) => x.assetEntries).flat().length >
        0;
      if (areAssetsAvailable) {
        setCurrentPage(PAGES.ASSETS);
        setIsRedirectedToAssets(true);
      } else {
        setCurrentPage(PAGES.GETTING_STARTED);
      }
    }
  }, [assets, currentPage]);

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

  const handleGoToAssetPage = (asset?: ExtendedAssetEntry) => {
    goToAssetPage(asset);
  };

  const handleAssetNavigate = () => {
    setAssetNavigateTo(undefined);
  };

  const goToAssetPage = (assetNavigateTo?: ExtendedAssetEntry) => {
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

  const handleAssetSelect = (asset: ExtendedAssetEntry) => {
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
    if (!assets || !span.spanCodeObjectId) {
      return;
    }

    const asset = findAssetBySpanCodeObjectId(
      assets,
      span.spanCodeObjectId,
      span.serviceName
    );

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
          items={environments}
          onSelect={handleEnvironmentSelect}
          disabled={!environments || environments.length === 0}
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
