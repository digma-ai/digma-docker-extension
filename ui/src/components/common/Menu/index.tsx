import { useTheme } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useRef, useState } from "react";
import { ChevronIcon } from "../icons/ChevronIcon";
import { Direction } from "../icons/types";
import * as s from "./styles";
import { MenuProps } from "./types";

export const Menu = (props: MenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const theme = useTheme();

  const handleMenuButtonClick = (e: React.MouseEvent<HTMLElement>) => {
    if (!props.disabled) {
      setAnchorEl(e.currentTarget);
      setIsOpen(!isOpen);
    }
  };

  const handleMenuItemClick = (value: string) => {
    props.onSelect(value);
    setIsOpen(false);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setIsOpen(false);
  };

  const value =
    props.items?.find((x) => x.value === props.value)?.label ||
    props.placeholder;

  const menuWidth = props.width || menuButtonRef.current?.clientWidth || 0;

  return (
    <>
      {props.button ? (
        <props.button
          title={props.title}
          value={value}
          isMenuOpen={isOpen}
          onClick={handleMenuButtonClick}
          ref={menuButtonRef}
        />
      ) : (
        <s.MenuButton
          ref={menuButtonRef}
          startIcon={props.icon}
          endIcon={
            <ChevronIcon
              direction={isOpen ? Direction.UP : Direction.DOWN}
              color={theme.palette.mode === "light" ? "#8993a5" : "#677285"}
            />
          }
          onClick={handleMenuButtonClick}
        >
          <s.SelectedValue title={value}>{value}</s.SelectedValue>
        </s.MenuButton>
      )}
      <s.Menu
        anchorEl={anchorEl}
        open={isOpen}
        onClose={handleMenuClose}
        $width={menuWidth}
      >
        <s.Title>{props.title}</s.Title>
        {props.items ? (
          props.items.map((item) => (
            <s.MenuItem
              key={item.value}
              onClick={() => handleMenuItemClick(item.value)}
              title={item.label}
            >
              <Typography noWrap={true}>{item.label}</Typography>
            </s.MenuItem>
          ))
        ) : (
          <s.MenuItem title={props.placeholder}>
            <Typography noWrap={true}>{props.placeholder}</Typography>
          </s.MenuItem>
        )}
      </s.Menu>
    </>
  );
};
