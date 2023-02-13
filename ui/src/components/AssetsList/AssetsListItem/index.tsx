import { useState } from "react";
import { ChevronIcon } from "../../common/icons/ChevronIcon";
import { DataIcon } from "../../common/icons/DataIcon";
import { DIRECTION } from "../../common/icons/types";
import * as s from "./styles";
import { AssetsListCategoryProps, SubItem } from "./types";

export const AssetsListCategory = (props: AssetsListCategoryProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleGroupClick = () => {
    setIsExpanded(!isExpanded);
  };

  const handleGroupItemClick = (groupId: string, item: SubItem) => {
    props.onSelect(groupId, item);
  };

  return (
    <s.ListItem>
      <s.Category isExpanded={isExpanded} onClick={handleGroupClick}>
        <ChevronIcon
          direction={isExpanded ? DIRECTION.DOWN : DIRECTION.RIGHT}
          color={isExpanded ? "#dadada" : "#9b9b9b"}
        />
        <props.icon size={16} color={isExpanded ? "#dadada" : "#9b9b9b"} />
        {props.label}
        {
          <s.InsightCount isExpanded={isExpanded}>
            {props.items.length}
          </s.InsightCount>
        }
      </s.Category>
      {isExpanded ? (
        props.items.length > 0 ? (
          <s.SubItemsList>
            {props.items.map((item) => (
              <s.SubItem
                key={item.id}
                onClick={() => handleGroupItemClick(props.id, item)}
              >
                <DataIcon size={10} color={"#9b9b9b"} />
                {item.label}
                {<s.InsightCount>{item.items.length}</s.InsightCount>}
              </s.SubItem>
            ))}
          </s.SubItemsList>
        ) : (
          <s.NoDataText>
            Not seeing your data here? Maybe you’re missing some
            instrumentation!
          </s.NoDataText>
        )
      ) : null}
    </s.ListItem>
  );
};
