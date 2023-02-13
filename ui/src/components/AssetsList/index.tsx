import { AssetsListCategory } from "./AssetsListItem";
import { SubItem } from "./AssetsListItem/types";
import * as s from "./styles";
import { AssetsListProps } from "./types";

export const AssetsList = (props: AssetsListProps) => {
  const handleSelect = (groupId: string, item: SubItem) => {
    props.onSelect(groupId, item);
  };

  return (
    <s.List>
      {props.groups.map((group) => (
        <AssetsListCategory
          id={group.id}
          key={group.id}
          icon={group.icon}
          items={group.items}
          label={group.label}
          onSelect={handleSelect}
        />
      ))}
    </s.List>
  );
};
