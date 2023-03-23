import { createDockerDesktopClient } from "@docker/extension-api-client";
import ExtensionIcon from "@mui/icons-material/Extension";
import { useTheme } from "@mui/material";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { Assets } from "../Assets";
import { AssetsData, GetAssetsResponse } from "../Assets/types";
import { DigmaLogoIcon } from "../common/icons/DigmaLogoIcon";
import { IntellijLogoIcon } from "../common/icons/IntellijLogoIcon";
import { StackIcon } from "../common/icons/StackIcon";
// import { VSCodeLogoIcon } from "../common/icons/VSCodeLogoIcon";
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
  const [environments, setEnvironments] = useState<string[]>([]);
  const [selectedEnvironment, setSelectedEnvironment] = useState<string>();
  const [isGettingStartedPage, setIsGettingStartedPage] = useState(true);

  const ddClient = useDockerDesktopClient();
  const theme = useTheme();

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
    fetchEnvironments();
    const refreshInterval = setInterval(() => {
      fetchEnvironments();
    }, REFRESH_INTERVAL);

    return () => {
      clearInterval(refreshInterval);
    };
  }, []);

  const handleEnvironmentClick = (environment: string) => {
    setSelectedEnvironment(environment);
  };

  console.log("State:", { environments, assets, selectedEnvironment });

  const handleGoToButtonClick = () => {
    setIsGettingStartedPage(!isGettingStartedPage);
  };

  const handleVSCodeLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    ddClient.host.openExternal(
      "https://marketplace.visualstudio.com/items?itemName=digma.digma"
    );
  };

  const handleIntellijLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    ddClient.host.openExternal(
      "https://plugins.jetbrains.com/plugin/19470-digma-continuous-feedback"
    );
  };

  const handleSampleAppLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    ddClient.host.openExternal(
      "https://github.com/digma-ai/otel-sample-app-java"
    );
  };

  return (
    <>
      <s.GlobalStyles />
      <s.Container>
        <s.Header>
          <DigmaLogoIcon size={52} />
          <s.TitleContainer>
            <Typography variant={"h3"} component={"h1"}>
              Digma
            </Typography>
            <Typography variant={"body1"} color={"text.secondary"}>
              Getting Started with Digma
            </Typography>
          </s.TitleContainer>
          <s.GoToButton
            variant={"contained"}
            onClick={handleGoToButtonClick}
            endIcon={
              isGettingStartedPage ? (
                <StackIcon size={16} color={"#fff"} />
              ) : (
                <ExtensionIcon
                  sx={{
                    width: 16,
                    height: 16,
                  }}
                />
              )
            }
          >
            {isGettingStartedPage ? "Go To Assets page" : "Getting Started"}
          </s.GoToButton>
        </s.Header>
        <Divider />
        <s.MainContainer>
          {isGettingStartedPage ? (
            <GettingStarted
              handleSampleAppLinkClick={handleSampleAppLinkClick}
            />
          ) : (
            <>
              <s.EnvironmentsContainer>
                <Typography variant={"h4"} component={"h2"}>
                  Environments
                </Typography>
                <s.EnvironmentsList>
                  {environments.map((environment) => (
                    <s.Link onClick={() => handleEnvironmentClick(environment)}>
                      {environment}
                    </s.Link>
                  ))}
                </s.EnvironmentsList>
              </s.EnvironmentsContainer>
              <Assets data={assets} />
            </>
          )}
        </s.MainContainer>
        <s.Footer>
          <s.FooterText variant="body1">
            Install the Digma Plugin to see more code data in the IDE
          </s.FooterText>
          <s.LinksContainer>
            {/* <s.Link onClick={handleVSCodeLinkClick}>
              VSCode
              <VSCodeLogoIcon size={20} />
            </s.Link> */}
            <s.Link onClick={handleIntellijLinkClick}>
              IntelliJ
              <IntellijLogoIcon size={20} />
            </s.Link>
          </s.LinksContainer>
        </s.Footer>
      </s.Container>
    </>
  );
};
