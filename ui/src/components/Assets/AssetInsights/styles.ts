import MuiBreadcrumbs from "@mui/material/Breadcrumbs";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
  padding-bottom: 28px;
`;

export const Header = styled.div`
  display: flex;
  height: 96px;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
`;

export const Breadcrumbs = styled(MuiBreadcrumbs)`
  &.MuiBreadcrumbs-root {
    overflow: hidden;
  }

  & .MuiBreadcrumbs-separator {
    margin: 0 8px;
    color: #70787d;
  }

  & .MuiBreadcrumbs-ol {
    flex-wrap: nowrap;
  }

  & .MuiBreadcrumbs-li {
    color: #70787d;

    &:last-child {
      overflow: hidden;

      color: ${({ theme }) => theme.palette.text.primary};
    }
  }
`;

export const AssetTypeIconContainer = styled.span`
  display: flex;
  flex-shrink: 0;
`;

export const Breadcrumb = styled.span`
  display: flex;
  gap: 8px;

  ${({ onClick }) =>
    onClick
      ? `
    &:hover {
      color: #1277db;
    }
    cursor: pointer;
    `
      : ""}
`;

export const InsightsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  overflow: auto;
`;

export const Description = styled.span`
  font-size: 12px;
  line-height: 14px;

  color: ${({ theme }) => {
    switch (theme.palette.mode) {
      case "light":
        return "#828797";
      case "dark":
        return "#9b9b9b";
    }
  }};
`;

export const Link = styled.a`
  color: #7891d0;
  cursor: pointer;
`;

export const InsightGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const InsightGroupName = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  height: 28px;

  color: ${({ theme }) => {
    switch (theme.palette.mode) {
      case "light":
        return "#7891d0";
      case "dark":
        return "#dadada";
    }
  }};
`;
