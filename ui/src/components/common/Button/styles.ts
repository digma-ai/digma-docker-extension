import styled from "styled-components";
import { ButtonElementProps } from "./types";

export const Button = styled.button<ButtonElementProps>`
  font-family: inherit;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  padding: 2px 4px;
  border-radius: 2px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: max-content;
  user-select: none;

  color: ${({ theme, buttonType }) => {
    if (buttonType === "secondary") {
      switch (theme.palette.mode) {
        case "light":
          return "#3538cd";
        case "dark":
          return "#b9c2eb";
      }
    }

    return "#b9c2eb";
  }};

  background: ${({ theme, buttonType }) => {
    if (buttonType === "secondary") {
      switch (theme.palette.mode) {
        case "light":
          return "none";
        case "dark":
          return "#414363";
      }
    }

    return "#3538cd";
  }};

  border: ${({ theme, buttonType }) => {
    if (buttonType === "secondary") {
      switch (theme.palette.mode) {
        case "light":
          return "1px solid #3538cd";
        case "dark":
          return "1px solid #5154ec";
      }
    }

    return "none";
  }};

  &:hover,
  &:focus {
    color: ${({ theme, buttonType }) => {
      if (buttonType === "secondary") {
        switch (theme.palette.mode) {
          case "light":
            return "#5154ec";
          case "dark":
            return "#e2e7ff";
        }
      }

      switch (theme.palette.mode) {
        case "light":
          return "#e2e7ff";
        case "dark":
          return "#b9c2eb";
      }
    }};

    background: ${({ theme, buttonType }) => {
      if (buttonType === "secondary") {
        switch (theme.palette.mode) {
          case "light":
            return "#eeeefd";
          case "dark":
            return "#414363";
        }
      }

      return "#5154ec";
    }};

    border: ${({ buttonType }) => {
      if (buttonType === "secondary") {
        return "1px solid #5154ec";
      }

      return "none";
    }};
  }

  &:active {
    color: ${({ theme, buttonType }) => {
      if (buttonType === "secondary") {
        switch (theme.palette.mode) {
          case "light":
            return "#3538cd";
          case "dark":
            return "#e2e7ff";
        }
      }

      switch (theme.palette.mode) {
        case "light":
          return "#f1f5fa";
        case "dark":
          return "#dadada";
      }
    }};

    background: ${({ theme, buttonType }) => {
      if (buttonType === "secondary") {
        switch (theme.palette.mode) {
          case "light":
            return "#eeeefd";
          case "dark":
            return "#414363";
        }
      }

      return "#3538cd";
    }};

    border: ${({ theme, buttonType }) => {
      if (buttonType === "secondary") {
        switch (theme.palette.mode) {
          case "light":
            return "1px solid #3538cd";
          case "dark":
            return "1px solid #5154ec";
        }
      }

      return "none";
    }};
  }

  &:disabled {
    cursor: initial;

    color: ${({ theme, buttonType }) => {
      if (buttonType === "secondary") {
        switch (theme.palette.mode) {
          case "light":
            return "#b9c0d4";
          case "dark":
            return "#49494d";
        }
      }

      switch (theme.palette.mode) {
        case "light":
          return "#f1f5fa";
        case "dark":
          return "#49494d";
      }
    }};

    background: ${({ theme, buttonType }) => {
      if (buttonType === "secondary") {
        return "none";
      }

      switch (theme.palette.mode) {
        case "light":
          return "#b9c0d4";
        case "dark":
          return "#2e2e2e";
      }
    }};

    border: ${({ theme, buttonType }) => {
      if (buttonType === "secondary") {
        switch (theme.palette.mode) {
          case "light":
            return "#b9c0d4";
          case "dark":
            return "#49494d";
        }
      }

      return "none";
    }};
  }
`;

export const ContentContainer = styled.span`
  display: flex;
  gap: 2px;
  align-items: center;
`;
