import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import styled from "styled-components";

export const Container = styled.div`
  margin-top: 8px;
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
    color: ${({ theme }) =>
      theme.palette.mode === "light" ? "#17191e" : "#fff"};
    background: ${({ theme }) =>
      theme.palette.mode === "light" ? "#fff" : "#27343e"};
    border-color: ${({ theme }) =>
      theme.palette.mode === "light" ? "#efeff2" : "#465c6e"};
    padding: 11px 42px 11px 8px;
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
  color: ${({ theme }) =>
    theme.palette.mode === "light" ? "#086dd7" : "#55a4f1"};
  padding: 0;
  background: transparent;

  &:hover {
    color: ${({ theme }) =>
      theme.palette.mode === "light" ? "#55a4F1" : "#fff"};
    background: transparent;
  }
`;

export const FloatingCopyButton = styled(CopyButton)`
  top: 8px;
  right: 8px;
`;
