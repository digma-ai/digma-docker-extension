import { INSIGHT_TYPES } from "../../App/types";
import { IconProps } from "../../common/icons/types";

export interface SubItem {
  id: string;
  label: string;
  items: {
    id: string;
    label: string;
    insights: INSIGHT_TYPES[];
  }[];
}

export interface AssetsListCategoryProps {
  id: string;
  label: string;
  icon: React.ComponentType<IconProps>;
  items: SubItem[];
  onSelect: (groupId: string, item: SubItem) => void;
}

export interface CategoryProps {
  isExpanded: boolean;
}

export interface InsightCountProps {
  isExpanded?: boolean;
}
