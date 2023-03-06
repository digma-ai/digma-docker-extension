import { createDockerDesktopClient } from "@docker/extension-api-client";
import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { Mode } from "../../globals";
import { Assets } from "../Assets";
import { GetAssetsResponse } from "../Assets/types";
import * as s from "./styles";
// Note: This line relies on Docker Desktop's presence as a host application.
// If you're running this React app in a browser, it won't work properly.
const client = createDockerDesktopClient();

function useDockerDesktopClient() {
  return client;
}

const REFRESH_INTERVAL = 10 * 1000; // in milliseconds

const isMode = (mode: unknown): mode is Mode => {
  return (
    typeof mode === "string" &&
    ["light", "dark", "dark-jetbrains"].includes(mode)
  );
};

const getMode = (): Mode => {
  if (!isMode(window.theme)) {
    const bodyEl = document.getElementsByTagName("body");
    const vscodeTheme =
      bodyEl[0].dataset.vscodeThemeKind === "vscode-light" ? "light" : "dark";
    return vscodeTheme;
  }

  return window.theme;
};

export function App() {
  const [mode, setMode] = useState(getMode());
  const [mainFont, setMainFont] = useState("");
  const [codeFont, setCodeFont] = useState("");
  const ddClient = useDockerDesktopClient();
  const [assets, setAssets] = useState<GetAssetsResponse>();
  const [environments, setEnvironments] = useState<string[]>([]);
  const [selectedEnvironment, setSelectedEnvironment] = useState<string>();

  const fetchEnvironments = async () => {
    const environments = (await ddClient.extension.vm?.service?.get(
      "/environments"
    )) as string[];

    setEnvironments(environments);
  };

  const fetchAssets = async (environment: string) => {
    const assets = (await ddClient.extension.vm?.service?.post(
      `/environments/${environment}/assets`,
      { serviceNames: [] }
    )) as GetAssetsResponse;
    setAssets(assets);
  };

  useEffect(() => {
    if (!selectedEnvironment && environments.length > 0) {
      setSelectedEnvironment(environments[0]);
    }
  }, [environments]);

  useEffect(() => {
    if (selectedEnvironment) {
      fetchAssets(selectedEnvironment);
    }
  }, [selectedEnvironment]);

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

  return (
    <ThemeProvider theme={{ mode, mainFont, codeFont }}>
      <s.GlobalStyle />
      <s.EnvironmentsContainer>
        <span>Environments:</span>
        <s.EnvironmentsList>
          {environments.map((environment) => (
            <s.EnvironmentLink
              onClick={() => handleEnvironmentClick(environment)}
            >
              {environment}
            </s.EnvironmentLink>
          ))}
        </s.EnvironmentsList>
      </s.EnvironmentsContainer>
      <Assets data={assets} />
    </ThemeProvider>
  );
}
