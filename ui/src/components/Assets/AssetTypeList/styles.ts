import MuiTab from "@mui/material/Tab";
import MuiTabs from "@mui/material/Tabs";
import styled from "styled-components";

export const Tabs = styled(MuiTabs)`
  min-height: 40px;
  & .MuiTabs-indicator {
    height: 3px;

    background: ${({ theme }) => {
      switch (theme.palette.mode) {
        case "light":
          return "#086dd7";
        case "dark":
          return "#3391ee";
      }
    }};
  }

  & .MuiTabs-flexContainer {
    gap: 37px;
  }
  margin-bottom: 28px;
`;

export const Tab = styled(MuiTab)`
  min-height: 40px;
  padding: 0;
  font-weight: 400;

  color: ${({ theme }) => {
    switch (theme.palette.mode) {
      case "light":
        return "#000";
      case "dark":
        return "#fff";
    }
  }};

  &.Mui-selected {
    font-weight: 500;

    color: ${({ theme }) => {
      switch (theme.palette.mode) {
        case "light":
          return "#116ed0";
        case "dark":
          return "#fff";
      }
    }};
  }
`;
