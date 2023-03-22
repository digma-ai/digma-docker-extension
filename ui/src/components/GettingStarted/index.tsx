import Typography from "@mui/material/Typography";
import { useState } from "react";
import { CodeSnippet } from "./CodeSnippet";
import * as s from "./styles";

const dockerFileCode = `{
  “experimental”: false,
  “features”: {
    “buildkit”: true
  },
  “builder”: {
    “gc”: {
      “enabled”: true, 
      “defaultKeepStorage”: “20GB”
    }
  }
}`;

const runSampleAppCommandCode = "docker pull command";

export const GettingStarted = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (
    e: React.SyntheticEvent<Element, Event>,
    value: number
  ) => {
    setSelectedTab(value);
  };

  return (
    <s.Container>
      <s.SectionTitleContainer>
        <Typography variant={"h4"} component={"h2"}>
          Collecting data from your containers
        </Typography>
        <Typography variant={"body1"} color={"text.secondary"}>
          Add the following to your Docker file:
        </Typography>
      </s.SectionTitleContainer>
      <s.Tabs value={selectedTab} onChange={handleTabChange}>
        <s.Tab label={"Java"} />
        <s.Tab disabled={true} label={"Python"} />
      </s.Tabs>
      <CodeSnippet text={dockerFileCode} multiline={true} />
      <s.SectionDivider variant={"subtitle1"}>-or-</s.SectionDivider>
      <s.SectionTitleContainer>
        <Typography variant={"h4"} component={"h2"}>
          Run a sample application
        </Typography>
      </s.SectionTitleContainer>
      <CodeSnippet text={runSampleAppCommandCode} />
    </s.Container>
  );
};
