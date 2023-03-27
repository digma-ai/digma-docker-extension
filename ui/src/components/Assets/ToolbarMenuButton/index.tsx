import { useTheme } from "@mui/material";
import { ChevronIcon } from "../../common/icons/ChevronIcon";
import { DIRECTION } from "../../common/icons/types";
import * as s from "./styles";

interface ToolbarMenuButtonProps {
  title: string;
  value: string;
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
  isMenuOpen: boolean;
}

export const ToolbarMenuButton = (props: ToolbarMenuButtonProps) => {
  const theme = useTheme();

  return (
    <s.Button
      variant="outlined"
      endIcon={
        <ChevronIcon
          direction={props.isMenuOpen ? DIRECTION.UP : DIRECTION.DOWN}
          color={theme.palette.mode === "light" ? "#8993a5" : "#677285"}
        />
      }
      onClick={props.onClick}
    >
      <s.Label>{props.value || props.title}</s.Label>
    </s.Button>
  );
};
