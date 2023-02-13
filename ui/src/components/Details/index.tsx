import { getCategoryInfo, getInsightIcon } from "../../utils";
import { ChevronIcon } from "../common/icons/ChevronIcon";
import { DIRECTION } from "../common/icons/types";
import * as s from "./styles";
import { DetailsProps } from "./types";

export const Details = (props: DetailsProps) => {
  const handleBackButtonClick = () => {
    props.onBackButtonClick();
  };

  const categoryInfo = getCategoryInfo(props.groupId);

  if (!categoryInfo) {
    return <></>;
  }

  return (
    <s.Container>
      <s.Header>
        <s.BackButton onClick={handleBackButtonClick}>
          <ChevronIcon direction={DIRECTION.LEFT} color={"#dadada"} />
        </s.BackButton>
        <categoryInfo.icon color={"#9c9c9c"} />
        <span>
          {categoryInfo?.label} / {props.itemId}
        </span>
        <s.ItemsCount>{props.items.length}</s.ItemsCount>
      </s.Header>
      <s.List>
        {props.items.map((item) => (
          <s.ListItem key={item.id}>
            <s.Link href="#">{item.label}</s.Link>
            <s.InsightIconsContainer>
              {item.insights.map((insight) => (
                <s.InsightIconContainer key={insight}>
                  {getInsightIcon(insight)}
                </s.InsightIconContainer>
              ))}
            </s.InsightIconsContainer>
          </s.ListItem>
        ))}
      </s.List>
    </s.Container>
  );
};
