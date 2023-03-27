import { IntellijLogoIcon } from "../icons/IntellijLogoIcon";
import { PageProps } from "./types";
// import { VSCodeLogoIcon } from "../common/icons/VSCodeLogoIcon";
import { SlackLogoIcon } from "../icons/SlackLogoIcon";
import * as s from "./styles";

export const Page = (props: PageProps) => {
  const handleVSCodeLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    props.dockerClient?.host.openExternal(
      "https://marketplace.visualstudio.com/items?itemName=digma.digma"
    );
  };

  const handleIntellijLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    props.dockerClient?.host.openExternal(
      "https://plugins.jetbrains.com/plugin/19470-digma-continuous-feedback"
    );
  };

  const handleSlackChannelClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    props.dockerClient?.host.openExternal(
      "https://join.slack.com/t/continuous-feedback/shared_invite/zt-1hk5rbjow-yXOIxyyYOLSXpCZ4RXstgA"
    );
  };

  return (
    <s.Container>
      <s.Header>{props.header}</s.Header>
      <s.Divider />
      <s.MainContainer>{props.main}</s.MainContainer>
      <s.Footer>
        <s.IDEInfoContainer>
          <s.FooterText>
            <s.IntellijIconContainer>
              <IntellijLogoIcon size={20} />
            </s.IntellijIconContainer>
            Install the Digma Plugin to see more code data in the{" "}
            <s.Link onClick={handleIntellijLinkClick}>IDE</s.Link>
          </s.FooterText>
          {/* <s.LinksContainer>
            <s.Link onClick={handleVSCodeLinkClick}>
            VSCode
            <VSCodeLogoIcon size={20} />
          </s.Link>
            <s.IDELink onClick={handleIntellijLinkClick}>
              IntelliJ
              <IntellijLogoIcon size={20} />
            </s.IDELink>
          </s.LinksContainer> */}
        </s.IDEInfoContainer>
        <s.FooterText>
          <s.SlackIconContainer>
            <SlackLogoIcon size={40} />
          </s.SlackIconContainer>
          We want your feedback! Join our Slack channel{" "}
          <s.Link onClick={handleSlackChannelClick}>here</s.Link> to let us know
          your thoughts, suggestions or report any issues
        </s.FooterText>
      </s.Footer>
    </s.Container>
  );
};
