import { useTheme } from "@mui/material";
import { useState } from "react";
import { ChevronIcon } from "../../common/icons/ChevronIcon";
import { DIRECTION } from "../../common/icons/types";
import * as s from "./styles";
import { MenuProps } from "./types";

export const Menu = (props: MenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const theme = useTheme();

  const handleMenuButtonClick = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(e.currentTarget);
    setIsOpen(!isOpen);
  };

  const handleMenuItemClick = (value: string) => {
    props.onSelect(value);
    setIsOpen(false);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setIsOpen(false);
  };

  return (
    <>
      {props.button ? (
        <props.button
          title={props.title}
          value={props.value}
          isMenuOpen={isOpen}
          onClick={handleMenuButtonClick}
        />
      ) : (
        <s.MenuButton
          startIcon={props.icon}
          endIcon={
            <ChevronIcon
              direction={isOpen ? DIRECTION.UP : DIRECTION.DOWN}
              color={theme.palette.mode === "light" ? "#8993a5" : "#677285"}
            />
          }
          onClick={handleMenuButtonClick}
        >
          {props.value}
        </s.MenuButton>
      )}
      <s.Menu anchorEl={anchorEl} open={isOpen} onClose={handleMenuClose}>
        <s.Title>{props.title}</s.Title>
        {props.items.map((item) => (
          <s.MenuItem key={item} onClick={() => handleMenuItemClick(item)}>
            {item}
            {/* <OpenTelemetryLogoIcon size={16} /> */}
          </s.MenuItem>
        ))}
      </s.Menu>
    </>
  );
};
