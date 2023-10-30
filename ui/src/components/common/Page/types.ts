import { ReactNode } from "react";

export interface PageContent {
  header: ReactNode;
  main: ReactNode;
}

export interface PageProps extends PageContent {
  currentPage: string;
  onPageChange: (page: string) => void;
  isSidePanelOpen: boolean;
}

export interface NavigationButtonProps {
  $selected: boolean;
}
