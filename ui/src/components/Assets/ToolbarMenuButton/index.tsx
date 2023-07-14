import { useTheme } from "@mui/material";
import Typography from "@mui/material/Typography";
import { ForwardedRef, forwardRef } from "react";
import { ChevronIcon } from "../../common/icons/ChevronIcon";
import { Direction } from "../../common/icons/types";
import * as s from "./styles";

interface ToolbarMenuButtonProps {
  title?: string;
  value?: string;
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
  isMenuOpen: boolean;
}

const ToolbarMenuButtonComponent = (
  props: ToolbarMenuButtonProps,
  ref: ForwardedRef<HTMLButtonElement>
) => {
  const theme = useTheme();

  const label = props.value || props.title;

  return (
    <s.Button
      ref={ref}
      variant={"outlined"}
      endIcon={
        <ChevronIcon
          direction={props.isMenuOpen ? Direction.UP : Direction.DOWN}
          color={theme.palette.mode === "light" ? "#8993a5" : "#677285"}
        />
      }
      onClick={props.onClick}
      title={label}
    >
      <Typography noWrap={true}>{label}</Typography>
    </s.Button>
  );
};

export const ToolbarMenuButton = forwardRef(ToolbarMenuButtonComponent);
