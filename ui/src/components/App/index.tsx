import { createDockerDesktopClient } from "@docker/extension-api-client";
import ExtensionIcon from "@mui/icons-material/Extension";
import Divider from "@mui/material/Divider";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import { useCallback, useEffect, useState } from "react";
import { Assets } from "../Assets";
import { Menu } from "../Assets/Menu";
import { AssetsData, GetAssetsResponse } from "../Assets/types";
import { GettingStarted } from "../GettingStarted";
import { Loader } from "../common/Loader";
import { Page } from "../common/Page";
import { DigmaLogoIcon } from "../common/icons/DigmaLogoIcon";
import { IntellijLogoIcon } from "../common/icons/IntellijLogoIcon";
import { SlackLogoIcon } from "../common/icons/SlackLogoIcon";
import { StackIcon } from "../common/icons/StackIcon";
import * as s from "./styles";

// Note: This line relies on Docker Desktop's presence as a host application.
// If you're running this React app in a browser, it won't work properly.
const client = createDockerDesktopClient();

function useDockerDesktopClient() {
  return client;
}

const REFRESH_INTERVAL = 10 * 1000; // in milliseconds

const PAGES = {
  GETTING_STARTED: "GETTING_STARTED",
  ASSETS: "ASSETS",
};

export const App = () => {
  const [assets, setAssets] = useState<AssetsData>();
  const [environments, setEnvironments] = useState<string[]>();
  const [selectedEnvironment, setSelectedEnvironment] = useState<string>();
  const [currentPage, setCurrentPage] = useState<string | undefined>();
  const [isRedirectedToAssets, setIsRedirectedToAssets] = useState(false);

  const isBadgeEnabled = ["true", null].includes(
    localStorage.getItem("isBadgeEnabled")
  );
  const [isBadgeVisible, setIsBadgeVisible] = useState<boolean>(false);

  const ddClient = useDockerDesktopClient();

  const fetchEnvironments = async () => {
    const environments = (await ddClient.extension.vm?.service?.get(
      "/environments"
    )) as string[];
    console.log("Environments have been fetched:", environments);
    setEnvironments(environments);
  };

  const fetchAssets = async (environment: string) => {
    const assets = (await ddClient.extension.vm?.service?.post(
      `/environments/${environment}/assets`,
      { serviceNames: [] }
    )) as GetAssetsResponse;
    console.log(
      `Assets for "${environment}" environment have been fetched:`,
      assets
    );
    setAssets({
      serviceAssetsEntries: assets.serviceAssetsEntries,
    });
  };

  useEffect(() => {
    if (!selectedEnvironment && environments && environments.length > 0) {
      setSelectedEnvironment(environments[0]);
    }
  }, [selectedEnvironment, environments]);

  useEffect(() => {
    if (selectedEnvironment && environments && environments.length > 0) {
      fetchAssets(selectedEnvironment);
    }
  }, [selectedEnvironment, environments]);

  // Redirect to "Getting started" page on startup if there are no environments yet
  useEffect(() => {
    if (!currentPage && environments && environments.length === 0) {
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
  useEffect(() => {
    const assetsCount =
      assets?.serviceAssetsEntries.map((x) => x.assetEntries).flat().length ||
      0;

    if (environments && environments.length > 0 && isBadgeEnabled) {
      if (assetsCount === 0) {
        setIsBadgeVisible(true);
      } else {
        setIsBadgeVisible(false);
      }
    }
  }, [assets, environments, isRedirectedToAssets]);

  useEffect(() => {
    fetchEnvironments();
    const refreshInterval = setInterval(() => {
      fetchEnvironments();
    }, REFRESH_INTERVAL);

    return () => {
      clearInterval(refreshInterval);
    };
  }, []);

  const handleEnvironmentSelect = (environment: string) => {
    setSelectedEnvironment(environment);
  };

  console.log("State:", {
    environments,
    assets,
    selectedEnvironment,
    currentPage,
    isRedirectedToAssets,
    isBadgeVisible,
  });

  const handleGoToAssetsPageButton = () => {
    if (isBadgeEnabled && isBadgeVisible) {
      localStorage.setItem("isBadgeEnabled", "false");
      setIsBadgeVisible(false);
    }

    setCurrentPage(PAGES.ASSETS);
  };

  const handleGettingStartedButtonClick = () => {
    setCurrentPage(PAGES.GETTING_STARTED);
  };

  const renderLinkButtons = useCallback(() => {
    const handleSlackButtonClick = () => {
      client.host.openExternal(
        "https://join.slack.com/t/continuous-feedback/shared_invite/zt-1hk5rbjow-yXOIxyyYOLSXpCZ4RXstgA"
      );
    };

    const handleIntellijIDEAButtonClick = () => {
      client.host.openExternal(
        "https://plugins.jetbrains.com/plugin/19470-digma-continuous-feedback"
      );
    };

    return (
      <s.LinkButtonsContainer>
        <Tooltip
          key={"slack"}
          title={
            <s.LinkButtonTooltipTextContainer>
              <s.LinkButtonTooltipTitle>
                We want your feedback!
              </s.LinkButtonTooltipTitle>
              Join our Slack channel to let us know your thoughts, suggestions
              or report any issues
            </s.LinkButtonTooltipTextContainer>
          }
        >
          <s.LinkButton variant={"outlined"} onClick={handleSlackButtonClick}>
            <SlackLogoIcon size={16} />
          </s.LinkButton>
        </Tooltip>
        <Tooltip
          key={"intellij-idea"}
          title={
            "Install the Digma Plugin to see more code data in the IDE (Java only for now)"
          }
        >
          <s.LinkButton
            variant={"outlined"}
            onClick={handleIntellijIDEAButtonClick}
          >
            <IntellijLogoIcon size={16} />
          </s.LinkButton>
        </Tooltip>
      </s.LinkButtonsContainer>
    );
  }, []);

  return (
    <>
      <s.GlobalStyles />
      {currentPage === PAGES.GETTING_STARTED && (
        <Page
          header={
            <>
              <DigmaLogoIcon size={52} />
              <s.TitleContainer>
                <Typography variant={"h3"} component={"h1"}>
                  Digma
                </Typography>
                <Typography color={"text.secondary"}>
                  Getting Started with Digma
                </Typography>
              </s.TitleContainer>
              <s.NavigationButtonContainer>
                {renderLinkButtons()}
                <Divider orientation="vertical" flexItem />
                <s.Badge variant={"dot"} invisible={!isBadgeVisible}>
                  <s.GoToAssetsPageButton
                    variant={"contained"}
                    onClick={handleGoToAssetsPageButton}
                    endIcon={<StackIcon size={16} color={"#fff"} />}
                  >
                    Go To Assets page
                  </s.GoToAssetsPageButton>
                </s.Badge>
              </s.NavigationButtonContainer>
            </>
          }
          main={<GettingStarted client={ddClient} />}
        />
      )}
      {currentPage === PAGES.ASSETS && (
        <Page
          header={
            <>
              <Menu
                title={"Environments"}
                placeholder={"No Environments"}
                icon={<DigmaLogoIcon size={24} />}
                value={selectedEnvironment}
                items={environments}
                onSelect={handleEnvironmentSelect}
                disabled={!environments || environments.length === 0}
              />
              <s.NavigationButtonContainer>
                {renderLinkButtons()}
                <Divider orientation="vertical" flexItem />
                <s.NavigationButton
                  variant="outlined"
                  onClick={handleGettingStartedButtonClick}
                  endIcon={
                    <ExtensionIcon
                      sx={{
                        width: 16,
                        height: 16,
                      }}
                    />
                  }
                >
                  Getting Started
                </s.NavigationButton>
              </s.NavigationButtonContainer>
            </>
          }
          main={
            <Assets
              data={assets}
              onGettingStartedButtonClick={handleGettingStartedButtonClick}
              environments={environments}
            />
          }
        />
      )}
      {!currentPage && (
        <s.LoaderContainer>
          <Loader size={100} status={"pending"} />
          <Typography>Initializing...</Typography>
        </s.LoaderContainer>
      )}
    </>
  );
};
