import { ReactNode } from "react";

export interface PageContent {
  header: ReactNode;
  main: ReactNode;
}

export interface PageProps extends PageContent {
  currentPage: string;
  onPageChange: (page: string) => void;
}

export interface NavigationButtonProps {
  selected: boolean;
}
