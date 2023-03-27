import MuiTab from "@mui/material/Tab";
import MuiTabs from "@mui/material/Tabs";
import styled from "styled-components";

export const Tabs = styled(MuiTabs)`
  min-height: 40px;
  & .MuiTabs-indicator {
    background: ${({ theme }) =>
      theme.palette.mode === "light" ? "#086dd7" : "#3391ee"};
    height: 3px;
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
  color: ${({ theme }) => (theme.palette.mode === "light" ? "#000" : "#fff")};

  &.Mui-selected {
    color: ${({ theme }) =>
      theme.palette.mode === "light" ? "#116ed0" : "#fff"};
    font-weight: 500;
  }
`;
