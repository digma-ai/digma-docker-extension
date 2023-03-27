import Typography from "@mui/material/Typography";
import { useState } from "react";
import { CodeSnippet } from "./CodeSnippet";
import * as s from "./styles";
import { GettingStartedProps } from "./types";

const dockerInstrumentationCommands = `curl --create-dirs -O -L --output-dir ./otel
https://github.com/open-telemetry/opentelemetry-java-instrumentation/releases/latest/download/opentelemetry-javaagent.jar

curl --create-dirs -O -L --output-dir ./otel
https://github.com/digma-ai/otel-java-instrumentation/releases/latest/download/digma-otel-agent-extension.jar

export JAVA_TOOL_OPTIONS=-javaagent:/otel/javaagent.jar -Dotel.exporter.otlp.endpoint=http://localhost:5050 -Dotel.javaagent.extensions=/otel/digma-otel-agent-extension.jar
export OTEL_SERVICE_NAME={--ENTER YOUR SERVICE NAME HERE--}
export DEPLOYMENT_ENV=LOCAL_DOCKER

docker run -d -v “/$(pwd)/otel:/otel” --env JAVA_TOOL_OPTIONS --env OTEL_SERVICE_NAME --env DEPLOYMENT_ENV {-- APPEND PARAMS AND REPO/IMAGE --}`;

const sampleAppCommands = `docker run -d -p 9753:9753 --name petshop-sample digmaai/petshop-app:latest
docker run --rm digmaai/petshop-app-tester:latest`;

export const GettingStarted = (props: GettingStartedProps) => {
  const [selectedTab, setSelectedTab] = useState(0);

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

  return (
    <s.Container>
      <s.SectionTitleContainer>
        <Typography variant={"h4"} component={"h2"}>
          Collecting data from your containers
        </Typography>
        <s.SectionText color={"text.secondary"}>
          Add the following commands/parameters when running a docker container
          to collect data from it
        </s.SectionText>
      </s.SectionTitleContainer>
      <s.Tabs value={selectedTab} onChange={handleTabChange}>
        <s.Tab label={"Java"} />
        <s.Tab disabled={true} label={"Python (Coming soon)"} />
      </s.Tabs>
      <div>
        <CodeSnippet text={dockerInstrumentationCommands} multiline={true} />
        <s.SectionDivider variant={"subtitle1"}>-or-</s.SectionDivider>
        <s.SectionTitleContainer>
          <Typography variant={"h4"} component={"h2"}>
            Run a sample application
          </Typography>
        </s.SectionTitleContainer>
        <CodeSnippet text={sampleAppCommands} multiline={true} />
        <s.SectionText color={"text.secondary"}>
          To see complete code insights you can clone the sample repo{" "}
          <s.Link onClick={handleJavaSampleAppLinkClick}>here</s.Link> and
          install the Digma plugin into your IDE using the link below
        </s.SectionText>
      </div>
    </s.Container>
  );
};
