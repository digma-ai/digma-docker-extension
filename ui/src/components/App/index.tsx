import { createDockerDesktopClient } from "@docker/extension-api-client";
import ExtensionIcon from "@mui/icons-material/Extension";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { usePrevious } from "../../hooks/usePrevious";
import { Assets } from "../Assets";
import { Menu } from "../Assets/Menu";
import { AssetsData, GetAssetsResponse } from "../Assets/types";
import { DigmaLogoIcon } from "../common/icons/DigmaLogoIcon";
import { StackIcon } from "../common/icons/StackIcon";
import { Page } from "../common/Page";
import { GettingStarted } from "../GettingStarted";
import * as s from "./styles";

// Note: This line relies on Docker Desktop's presence as a host application.
// If you're running this React app in a browser, it won't work properly.
const client = createDockerDesktopClient();

function useDockerDesktopClient() {
  return client;
}

const REFRESH_INTERVAL = 10 * 1000; // in milliseconds

export const App = () => {
  const [assets, setAssets] = useState<AssetsData>();
  const previousAssets = usePrevious(assets);
  const [environments, setEnvironments] = useState<string[]>([]);
  const [selectedEnvironment, setSelectedEnvironment] = useState<string>();
  const [isGettingStartedPage, setIsGettingStartedPage] = useState(true);

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
    if (!selectedEnvironment && environments.length > 0) {
      setSelectedEnvironment(environments[0]);
    }
  }, [environments]);

  useEffect(() => {
    if (selectedEnvironment && environments.length > 0) {
      fetchAssets(selectedEnvironment);
    }
  }, [environments, selectedEnvironment]);

  useEffect(() => {
    if (
      (!previousAssets ||
        previousAssets.serviceAssetsEntries.map((x) => x.assetEntries).flat()
          .length === 0) &&
      assets &&
      assets.serviceAssetsEntries.map((x) => x.assetEntries).flat().length > 0
    ) {
      setIsGettingStartedPage(false);
    }
  }, [assets]);

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

  console.log("State:", { environments, assets, selectedEnvironment });

  const handleGoToButtonClick = () => {
    setIsGettingStartedPage(!isGettingStartedPage);
  };

  return (
    <>
      <s.GlobalStyles />
      {isGettingStartedPage ? (
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
                <s.Badge variant={"dot"} invisible={environments.length === 0}>
                  <s.GoToAssetsPageButton
                    variant={"contained"}
                    onClick={handleGoToButtonClick}
                    endIcon={<StackIcon size={16} color={"#fff"} />}
                  >
                    Go To Assets page
                  </s.GoToAssetsPageButton>
                </s.Badge>
              </s.NavigationButtonContainer>
            </>
          }
          main={<GettingStarted client={ddClient} />}
          dockerClient={ddClient}
        />
      ) : (
        <Page
          header={
            <>
              {selectedEnvironment && (
                <Menu
                  title={"Environments"}
                  icon={<DigmaLogoIcon size={24} />}
                  value={selectedEnvironment}
                  items={environments}
                  onSelect={handleEnvironmentSelect}
                />
              )}
              <s.NavigationButtonContainer>
                <s.NavigationButton
                  variant="outlined"
                  onClick={handleGoToButtonClick}
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
              onGettingStartedButtonClick={handleGoToButtonClick}
              environments={environments}
            />
          }
          dockerClient={ddClient}
        />
      )}
    </>
  );
};
