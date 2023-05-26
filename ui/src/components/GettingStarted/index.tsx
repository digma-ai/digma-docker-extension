import Typography from "@mui/material/Typography";
import { useState } from "react";
import { DefaultTheme, useTheme } from "styled-components";
import jetBrainsPluginThumbnailDark from "../../../assets/images/jetBrainsPluginThumbnail_dark.png";
import jetBrainsPluginThumbnailLight from "../../../assets/images/jetBrainsPluginThumbnail_light.png";
import { ContainerIcon } from "../common/icons/ContainerIcon";
import { IntellijLogoFlatIcon } from "../common/icons/IntellijLogoFlatIcon";
import { IntellijLogoIcon } from "../common/icons/IntellijLogoIcon";
import { CodeSnippet } from "./CodeSnippet";
import * as s from "./styles";
import { GettingStartedProps } from "./types";

const dockerInstrumentationCommands = `curl --create-dirs -O -L --output-dir ./otel
https://github.com/open-telemetry/opentelemetry-java-instrumentation/releases/latest/download/opentelemetry-javaagent.jar

curl --create-dirs -O -L --output-dir ./otel
https://github.com/digma-ai/otel-java-instrumentation/releases/latest/download/digma-otel-agent-extension.jar

export JAVA_TOOL_OPTIONS="-javaagent:/otel/javaagent.jar -Dotel.exporter.otlp.endpoint=http://localhost:5050 -Dotel.javaagent.extensions=/otel/digma-otel-agent-extension.jar"
export OTEL_SERVICE_NAME={--ENTER YOUR SERVICE NAME HERE--}
export DEPLOYMENT_ENV=LOCAL_DOCKER

docker run -d -v "/$(pwd)/otel:/otel" --env JAVA_TOOL_OPTIONS --env OTEL_SERVICE_NAME --env DEPLOYMENT_ENV {-- APPEND PARAMS AND REPO/IMAGE --}`;

const sampleAppCommands = `docker run -d -p 9753:9753 --name petshop-sample digmaai/petshop-app:latest
docker run --rm digmaai/petshop-app-tester:latest`;

const getCardTitleIconColor = (theme: DefaultTheme) => {
  switch (theme.palette.mode) {
    case "light":
      return "#505968";
    case "dark":
      return "#fff";
  }
};

const getJetBrainsPluginThumbnail = (theme: DefaultTheme) => {
  switch (theme.palette.mode) {
    case "light":
      return jetBrainsPluginThumbnailLight;
    case "dark":
      return jetBrainsPluginThumbnailDark;
  }
};

export const GettingStarted = (props: GettingStartedProps) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const theme = useTheme();
  const iconColor = getCardTitleIconColor(theme);

  const handleTabChange = (
    e: React.SyntheticEvent<Element, Event>,
    value: number
  ) => {
    setSelectedTab(value);
  };

  const handleJavaSampleAppLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>
  ) => {
    e.preventDefault();
    props.client.host.openExternal(
      "https://github.com/digma-ai/otel-sample-app-java"
    );
  };

  const handleJetBrainsPluginLink = (
    e: React.MouseEvent<HTMLAnchorElement>
  ) => {
    e.preventDefault();
    props.onJetBrainsPluginLinkClick();
  };

  return (
    <s.Container>
      <iframe src="./jaeger/index.html" style={{ resize: "both" }} />
      <s.Card>
        <s.CardTextContent>
          <s.SectionTitleContainer>
            <s.IntellijFlatIconContainer>
              <IntellijLogoFlatIcon color={iconColor} size={16} />
            </s.IntellijFlatIconContainer>
            <s.SectionTitle component={"h2"}>
              Collecting data from your source code in the IDE
            </s.SectionTitle>
          </s.SectionTitleContainer>
          <s.JetBrainsPluginLinkContainer>
            <s.SectionText color={"text.secondary"}>
              Get continuous code feedback by installing the Digma plugin
            </s.SectionText>
            <s.JetBrainsPluginLink onClick={handleJetBrainsPluginLink}>
              <IntellijLogoIcon size={20} />
              Digma JetBrains Plugin
              <s.LaunchIcon />
            </s.JetBrainsPluginLink>
          </s.JetBrainsPluginLinkContainer>
          <s.SectionText>
            Digma analyzes your code runtime data. It enables rapid development
            in complex projects by dynamic runtime linting, detecting issues as
            they appear. Digma highlights possible risks in the IDE, provides
            code change analysis and context and detect common code smells and
            bad practices.
          </s.SectionText>
        </s.CardTextContent>
        <s.CardIllustration>
          <s.JetBrainsPluginThumbnail
            src={getJetBrainsPluginThumbnail(theme)}
          />
        </s.CardIllustration>
      </s.Card>
      <s.Card>
        <s.CardTextContent>
          <s.SectionTitleContainer>
            <ContainerIcon color={iconColor} size={24} />
            <s.SectionTitle component={"h2"}>
              Collecting data from your containers
            </s.SectionTitle>
          </s.SectionTitleContainer>
          <s.SectionText color={"text.secondary"}>
            Add the following commands/parameters when running a docker
            container to collect data from it
          </s.SectionText>
          <div>
            <s.Tabs value={selectedTab} onChange={handleTabChange}>
              <s.Tab label={"Java"} />
              <s.Tab disabled={true} label={"Python (Coming soon)"} />
            </s.Tabs>
            <CodeSnippet
              text={dockerInstrumentationCommands}
              multiline={true}
            />
          </div>
          <s.SectionDivider variant={"subtitle1"}>-or-</s.SectionDivider>
          <Typography variant={"h4"} component={"h3"}>
            Run a sample application
          </Typography>
          <CodeSnippet text={sampleAppCommands} multiline={true} />
          <s.SectionText color={"text.secondary"}>
            To see complete code insights you can clone the sample repo{" "}
            <s.Link onClick={handleJavaSampleAppLinkClick}>here</s.Link> and
            install the Digma plugin into your IDE using the link above
          </s.SectionText>
        </s.CardTextContent>
      </s.Card>
    </s.Container>
  );
};
