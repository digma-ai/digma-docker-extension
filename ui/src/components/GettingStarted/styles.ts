import MuiLink from "@mui/material/Link";
import MuiTab from "@mui/material/Tab";
import MuiTabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const SectionTitleContainer = styled.div`
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;
`;

export const SectionText = styled(Typography)`
  margin-top: 8px;
`;

export const Link = styled(MuiLink)`
  cursor: pointer;
`;

export const Tabs = styled(MuiTabs)`
  min-height: 24px;

  & .MuiTabs-indicator {
    background: ${({ theme }) =>
      theme.palette.mode === "light" ? "#086dd7" : "#3391ee"};
    height: 3px;
  }
`;

export const Tab = styled(MuiTab)`
  min-height: 20px;
  padding: 0 16px;
  font-weight: 400;

  &.Mui-selected {
    color: ${({ theme }) => theme.palette.text.primary};
    font-weight: 500;
  }
`;

export const SectionDivider = styled(Typography)`
  margin: 40px 0;
  color: ${({ theme }) =>
    theme.palette.mode === "light" ? "#677285" : "#898f93"};
`;
