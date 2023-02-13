import { IconProps } from "../common/icons/types";
import { SubItem } from "./AssetsListItem/types";

export type AssetsListProps = {
  groups: {
    id: string;
    icon: React.ComponentType<IconProps>;
    label: string;
    items: SubItem[];
  }[];
  onSelect: (groupId: string, itemId: SubItem) => void;
};
