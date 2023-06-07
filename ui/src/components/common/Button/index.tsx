import { useTheme } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import { DefaultTheme } from "styled-components";
import * as s from "./styles";
import { ButtonProps, ButtonType } from "./types";

const getIconColor = (
  theme: DefaultTheme,
  isDisabled: boolean,
  isHovered: boolean,
  isFocused: boolean,
  isPressed: boolean,
  buttonType: ButtonType
): string => {
  if (buttonType === "secondary") {
    if (isDisabled) {
      switch (theme.palette.mode) {
        case "light":
          return "#b9c0d4";
        case "dark":
          return "#49494d";
      }
    }

    if (isPressed) {
      switch (theme.palette.mode) {
        case "light":
          return "#3538cd";
        case "dark":
          return "#e2e7ff";
      }
    }

    if (isHovered || isFocused) {
      switch (theme.palette.mode) {
        case "light":
          return "#5154ec";
        case "dark":
          return "#e2e7ff";
      }
    }

    switch (theme.palette.mode) {
      case "light":
        return "#3538cd";
      case "dark":
        return "#b9c2eb";
    }
  }

  if (isDisabled) {
    switch (theme.palette.mode) {
      case "light":
        return "#f1f5fa";
      case "dark":
        return "#49494d";
    }
  }

  if (isPressed) {
    switch (theme.palette.mode) {
      case "light":
        return "#f1f5fa";
      case "dark":
        return "#dadada";
    }
  }

  if (isFocused || isHovered) {
    switch (theme.palette.mode) {
      case "light":
        return "#e2e7ff";
      case "dark":
        return "#b9c2eb";
    }
  }

  return "#b9c2eb";
};

export const Button = (props: ButtonProps) => {
  const theme = useTheme();

  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  const handleMouseEnter = useCallback(() => setIsHovered(true), []);
  const handleMouseLeave = useCallback(() => setIsHovered(false), []);

  const handleFocus = useCallback(() => setIsFocused(true), []);
  const handleBlur = useCallback(() => setIsFocused(false), []);

  const handleMouseDown = useCallback(() => setIsPressed(true), []);

  useEffect(() => {
    const handleMouseUp = () => {
      setIsPressed(false);
    };

    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (props.onClick) {
      props.onClick(e);
    }
  };

  const buttonType = props.buttonType || "primary";

  return (
    <s.Button
      className={props.className}
      onClick={handleClick}
      disabled={props.disabled}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseDown={handleMouseDown}
      buttonType={buttonType}
    >
      <s.ContentContainer>
        {props.icon && (
          <props.icon.component
            size={props.icon.size}
            color={
              props.icon.color ||
              getIconColor(
                theme,
                Boolean(props.disabled),
                isHovered,
                isFocused,
                isPressed,
                buttonType
              )
            }
          />
        )}
        <span>{props.children}</span>
      </s.ContentContainer>
    </s.Button>
  );
};
