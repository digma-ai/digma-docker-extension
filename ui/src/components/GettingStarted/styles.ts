import MuiLaunchIcon from "@mui/icons-material/Launch";
import MuiLink from "@mui/material/Link";
import MuiTab from "@mui/material/Tab";
import MuiTabs from "@mui/material/Tabs";
import Typography, { TypographyProps } from "@mui/material/Typography";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 40px 0;
  width: 100%;
`;

export const Card = styled.div`
  display: flex;
  gap: 40px;
  padding: 20px;
  border-radius: 8px;

  background: ${({ theme }) => {
    switch (theme.palette.mode) {
      case "light":
        return "#f4f4f4";
      case "dark":
        return "#172026";
    }
  }};
`;

export const CardTextContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 20px;
`;

export const CardIllustration = styled.div`
  flex-basis: 43%;
  flex-shrink: 0;
`;

export const SectionTitleContainer = styled.div`
  display: flex;
  gap: 8px;

  color: ${({ theme }) => {
    switch (theme.palette.mode) {
      case "light":
        return "#505968";
      case "dark":
        return "#fff";
    }
  }};
`;

export const SectionTitle = styled(Typography)<
  TypographyProps<"span", { component: "h2" }>
>`
  font-size: 20px;
  line-height: 24px;
  font-weight: 500;
`;

export const SectionText = styled(Typography)`
  margin-top: 4px;

  color: ${({ theme }) => {
    switch (theme.palette.mode) {
      case "light":
        return "#505968";
      case "dark":
        return "#c4d0da";
    }
  }};
`;

export const Link = styled(MuiLink)`
  cursor: pointer;
`;

export const JetBrainsPluginLinkContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;
`;

export const JetBrainsPluginLink = styled(Link)`
  display: inline-flex;
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
  margin: 4px 0 8px;
  min-height: 32px;

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
`;

export const Tab = styled(MuiTab)`
  min-height: 20px;
  padding: 0 16px;
  font-weight: 400;

  &.Mui-selected {
    font-weight: 500;

    color: ${({ theme }) => theme.palette.text.primary};
  }
`;

export const SectionDivider = styled(Typography)`
  color: ${({ theme }) => {
    switch (theme.palette.mode) {
      case "light":
        return "#677285";
      case "dark":
        return "#898f93";
    }
  }};
`;

export const JetBrainsPluginThumbnail = styled.img`
  width: 100%;
`;
