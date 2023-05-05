import MuiLaunchIcon from "@mui/icons-material/Launch";
import MuiLink from "@mui/material/Link";
import MuiTab from "@mui/material/Tab";
import MuiTabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding-top: 40px;
  width: 100%;
`;

export const Card = styled.div`
  display: flex;
  gap: 40px;
  padding: 20px;
  background: ${({ theme }) =>
    theme.palette.mode === "light" ? "#f4f4f4" : "#172026"};
  border-radius: 8px;
`;

export const CardTextContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const CardIllustration = styled.div`
  flex-basis: 43%;
  flex-shrink: 0;
`;

export const SectionTitleContainer = styled.div`
  display: flex;
  gap: 8px;
  color: ${({ theme }) =>
    theme.palette.mode === "light" ? "#505968" : "#fff"};
`;

export const SectionContent = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 32px;
`;

export const SectionText = styled(Typography)`
  margin-top: 8px;
  color: ${({ theme }) =>
    theme.palette.mode === "light" ? "#505968" : "#c4d0da"};
`;

export const Link = styled(MuiLink)`
  cursor: pointer;
`;

export const JetBrainsPluginLink = styled(Link)`
  margin: 24px 0;
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const IntellijFlatIconContainer = styled.span`
  padding: 4px;
  display: flex;
`;

export const LaunchIcon = styled(MuiLaunchIcon)`
  &.MuiSvgIcon-root {
    margin-left: 0;
  }
`;

export const Tabs = styled(MuiTabs)`
  margin-top: 24px;
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
  margin: 20px 0;
  color: ${({ theme }) =>
    theme.palette.mode === "light" ? "#677285" : "#898f93"};
`;

export const JetBrainsPluginThumbnail = styled.img`
  width: 100%;
`;
