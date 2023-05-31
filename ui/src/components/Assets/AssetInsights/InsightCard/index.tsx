import { useTheme } from "@mui/material";
import { useState } from "react";
import { ChevronIcon } from "../../../common/icons/ChevronIcon";
import { Direction } from "../../../common/icons/types";
import { getInsightImportanceColor } from "../../utils/getInsightImportanceColor";
import { getInsightTypeInfo } from "../../utils/getInsightTypeInfo";
import * as s from "./styles";
import { InsightCardProps } from "./types";

export const InsightCard = (props: InsightCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  // const [isKebabMenuOpen, setIsKebabMenuOpen] = useState(false);

  const theme = useTheme();
  const insightTypeInfo = getInsightTypeInfo(props.data.type);
  const insightIconColor = getInsightImportanceColor(
    props.data.importance,
    theme
  );

  // const handleKebabMenuButtonToggle = () => {
  //   setIsKebabMenuOpen(!isKebabMenuOpen);
  // };

  // const handleKebabMenuItemSelect = () => {
  //   // TODO
  // };

  const handleExpandButtonClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <s.Container elevation={0}>
      <s.TitleRow>
        {insightTypeInfo && (
          <s.InsightIconContainer>
            <insightTypeInfo.icon color={insightIconColor} size={24} />
          </s.InsightIconContainer>
        )}
        {insightTypeInfo?.label || props.data.type}
        {props.stats && <s.Stats>{props.stats}</s.Stats>}
        {/* {props.menuItems && (
          <Popover
            open={isKebabMenuOpen}
            onOpenChange={setIsKebabMenuOpen}
            placement={"bottom-start"}
          >
            <PopoverTrigger onClick={handleKebabMenuButtonToggle}>
              <KebabMenuButton />
            </PopoverTrigger>
            <PopoverContent className={"Popover"}>
              <Menu
                items={props.menuItems.map((x) => ({ value: x, label: x }))}
                onSelect={handleKebabMenuItemSelect}
              />
            </PopoverContent>
          </Popover>
        )} */}
        {props.isExpandable && (
          <s.ExpandButton onClick={handleExpandButtonClick}>
            <ChevronIcon
              color={theme.palette.mode === "light" ? "#828797" : "#b9c2eb"}
              direction={isExpanded ? Direction.UP : Direction.DOWN}
              size={12}
            />
          </s.ExpandButton>
        )}
      </s.TitleRow>
      {props.content && (
        <s.ContentContainer>{props.content}</s.ContentContainer>
      )}
      {isExpanded && props.expandableContent && (
        <s.ContentContainer>{props.expandableContent}</s.ContentContainer>
      )}
      {props.buttons && (
        <s.ButtonsContainer>{props.buttons}</s.ButtonsContainer>
      )}
    </s.Container>
  );
};
