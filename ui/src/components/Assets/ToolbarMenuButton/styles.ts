import MuiButton from "@mui/material/Button";
import styled from "styled-components";

export const Button = styled(MuiButton)`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  padding: 10px 20px 10px 16px;
  width: 175px;

  color: ${({ theme }) => {
    switch (theme.palette.mode) {
      case "light":
        return "#677285";
      case "dark":
        return "#7794ab";
    }
  }};

  background: ${({ theme }) => {
    switch (theme.palette.mode) {
      case "light":
        return "#fff";
      case "dark":
        return "#1c262d";
    }
  }};

  border: 1.5px solid
    ${({ theme }) => {
      switch (theme.palette.mode) {
        case "light":
          return "#e1e2e6";
        case "dark":
          return "#364754";
      }
    }};
`;
