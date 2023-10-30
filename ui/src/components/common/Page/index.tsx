import ExtensionIcon from "@mui/icons-material/Extension";
import Tooltip from "@mui/material/Tooltip";
import { ddClient } from "../../../dockerDesktopClient";
import {
  JETBRAINS_PLUGIN_URL,
  PAGES,
  SLACK_WORKSPACE_URL
} from "../../App/constants";
import { IntellijLogoIcon } from "../icons/IntellijLogoIcon";
import { SlackLogoIcon } from "../icons/SlackLogoIcon";
import { StackIcon } from "../icons/StackIcon";
import * as s from "./styles";
import { PageProps } from "./types";

const handleSlackButtonClick = () => {
  ddClient.host.openExternal(SLACK_WORKSPACE_URL);
};

const openJetBrainsPluginPage = () => {
  ddClient.host.openExternal(JETBRAINS_PLUGIN_URL);
};

const getNavigationButtonIconColor = (currentPage: string, page: string) =>
  currentPage === page ? "#fff" : "#7794ab";

const renderLinks = () => (
  <s.LinksContainer>
    <Tooltip
      title={
        <s.LinkTooltipTextContainer>
          <s.LinkTooltipTitle>We want your feedback!</s.LinkTooltipTitle>
          Join our Slack channel to let us know your thoughts, suggestions or
          report any issues
        </s.LinkTooltipTextContainer>
      }
    >
      <s.Link onClick={handleSlackButtonClick}>
        <SlackLogoIcon size={16} />
        Slack
      </s.Link>
    </Tooltip>
    <Tooltip
      title={
        "Install the Digma Plugin to see more code data in the IDE (Java only for now)"
      }
    >
      <s.Link onClick={openJetBrainsPluginPage}>
        <IntellijLogoIcon size={16} />
        IntelliJ
      </s.Link>
    </Tooltip>
  </s.LinksContainer>
);

export const Page = (props: PageProps) => {
  const handlePageSelect = (page: string) => {
    props.onPageChange(page);
  };

  const pageButtons = [
    {
      pageId: PAGES.GETTING_STARTED,
      icon: (
        <ExtensionIcon
          sx={{
            width: 16,
            height: 16
          }}
        />
      ),
      label: "Getting started"
    },
    {
      pageId: PAGES.ASSETS,
      icon: (
        <StackIcon
          size={16}
          color={getNavigationButtonIconColor(props.currentPage, PAGES.ASSETS)}
        />
      ),
      label: "Asset page"
    }
  ];

  return (
    <s.Container>
      <s.Header>
        {props.header}
        {renderLinks()}
        <s.Divider orientation={"vertical"} flexItem />
        <s.NavigationButtonGroup variant={"contained"} disableElevation>
          {pageButtons.map((x) => {
            const isSelected = props.currentPage === x.pageId;

            return (
              <s.NavigationButton
                key={x.pageId}
                $selected={isSelected}
                disabled={isSelected}
                onClick={() => handlePageSelect(x.pageId)}
                startIcon={
                  // <s.Badge variant={"dot"} invisible={!x.isBadgeVisible}>
                  x.icon
                  // </s.Badge>
                }
              >
                {x.label}
              </s.NavigationButton>
            );
          })}
        </s.NavigationButtonGroup>
      </s.Header>
      <s.Divider />
      <s.MainContainer>{props.main}</s.MainContainer>
    </s.Container>
  );
};
