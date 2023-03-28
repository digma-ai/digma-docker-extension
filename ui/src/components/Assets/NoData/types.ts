import { ReactNode } from "react";

export interface NoDataProps {
  icon: ReactNode;
  title: string;
  description?: string;
  additionalContent?: ReactNode;
}
