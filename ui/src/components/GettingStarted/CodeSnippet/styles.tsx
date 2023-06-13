import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import styled from "styled-components";

export const Container = styled.div`
  margin-top: 4px;
  position: relative;
`;

export const Code = styled(TextField)`
  width: 100%;
  margin: 0;

  & .MuiInputBase-root {
    font-family: "Roboto Mono", monospace;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.02em;
    padding: 11px 42px 11px 8px;

    color: ${({ theme }) => {
      switch (theme.palette.mode) {
        case "light":
          return "#17191e";
        case "dark":
          return "#fff";
      }
    }};

    background: ${({ theme }) => {
      switch (theme.palette.mode) {
        case "light":
          return "#fff";
        case "dark":
          return "#27343e";
      }
    }};

    border-color: ${({ theme }) => {
      switch (theme.palette.mode) {
        case "light":
          return "#efeff2";
        case "dark":
          return "#465c6e";
      }
    }};
  }

  & .MuiInputBase-multiline {
    padding: 8px;
  }

  & .MuiInputBase-input {
    padding: 0;
    min-height: 24px;
  }
`;

export const CopyButton = styled(Button)`
  position: absolute;
  top: 9px;
  right: 11px;
  min-width: 24px;
  height: 24px;
  padding: 0;
  background: transparent;

  color: ${({ theme }) => {
    switch (theme.palette.mode) {
      case "light":
        return "#086dd7";
      case "dark":
        return "#55a4f1";
    }
  }};

  &:focus,
  &:hover {
    background: transparent;

    color: ${({ theme }) => {
      switch (theme.palette.mode) {
        case "light":
          return "#55a4F1";
        case "dark":
          return "#fff";
      }
    }};
  }
`;

export const FloatingCopyButton = styled(CopyButton)`
  top: 8px;
  right: 8px;
`;
