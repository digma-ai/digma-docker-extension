import styled from "styled-components";
import { ButtonElementProps } from "./types";

export const Button = styled.button<ButtonElementProps>`
  font-family: inherit;
  font-weight: 500;
  font-size: 14px;
  line-height: normal;
  padding: 4px 8px;
  height: 25px;
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
          return "#e2e7ff";
      }
    }

    return "#e2e7ff";
  }};
  background: ${({ buttonType }) => {
    if (buttonType === "secondary") {
      return "none";
    }

    return "#3538cd";
  }};
  border: ${({ buttonType }) => {
    if (buttonType === "secondary") {
      return "1px solid #3538cd";
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

      return "#e2e7ff";
    }};
    background: ${({ buttonType }) => {
      if (buttonType === "secondary") {
        return "none";
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
          return "#fbfdff";
        case "dark":
          return "#dadada";
      }
    }};
    background: ${({ buttonType }) => {
      if (buttonType === "secondary") {
        return "none";
      }

      return "#3538cd";
    }};
    border: ${({ buttonType }) => {
      if (buttonType === "secondary") {
        return "1px solid #3538cd";
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
