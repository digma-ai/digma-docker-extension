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
      theme.palette.mode === "light" ? "#393f49" : "#adbecb"};
    background: ${({ theme }) =>
      theme.palette.mode === "light" ? "#e1e2e6" : "#27343e"};
    border-color: ${({ theme }) =>
      theme.palette.mode === "light" ? "#c4c8d1" : "#364754"};
    padding: 10px 50px 10px 8px;
  }

  & .MuiInputBase-multiline {
    padding: 8px 56px 8px 8px;
  }

  & .MuiInputBase-input {
    padding: 0;
    min-height: 24;
  }
`;

export const FloatingCopyButton = styled(Button)`
  position: absolute;
  top: 8px;
  right: 8px;
  min-width: 40px;
  height: 40px;
  padding: 0;
  background: ${({ theme }) =>
    theme.palette.mode === "light" ? "#086dd7" : "#3391ee"};
`;

export const CopyButton = styled(Button)`
  position: absolute;
  right: 0;
  min-width: 40px;
  height: 100%;
  background: ${({ theme }) =>
    theme.palette.mode === "light" ? "#086dd7" : "#3391ee"};
  padding: 0;
  border-radius: 0px 4px 4px 0px;
`;
