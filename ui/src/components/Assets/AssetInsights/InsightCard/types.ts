import { ReactNode } from "react";
import { CodeObjectInsight } from "../types";

export interface InsightCardProps {
  data: CodeObjectInsight;
  content?: ReactNode;
  expandableContent?: ReactNode;
  menuItems?: string[];
  stats?: string;
  buttons?: ReactNode[];
  isExpandable?: boolean;
}
