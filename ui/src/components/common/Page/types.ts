import { DockerDesktopClient } from "@docker/extension-api-client-types/dist/v1";
import { ReactNode } from "react";

export interface PageProps {
  header: ReactNode;
  main: ReactNode;
  dockerClient: DockerDesktopClient;
}
