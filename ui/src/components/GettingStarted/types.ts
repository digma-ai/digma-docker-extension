import { DockerDesktopClient } from "@docker/extension-api-client-types/dist/v1";

export interface GettingStartedProps {
  client: DockerDesktopClient;
  onJetBrainsPluginLinkClick: () => void;
}
