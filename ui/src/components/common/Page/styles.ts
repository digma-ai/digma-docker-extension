import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import MuiDivider from "@mui/material/Divider";
import MuiLink from "@mui/material/Link";
import styled from "styled-components";
import { NavigationButtonProps } from "./types";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  max-width: 100%;
  min-width: 50%;
  overflow: auto;
  flex-grow: 1;
`;

export const Header = styled.header`
  display: flex;
  min-height: 112px;
  align-items: center;
  padding: 16px 40px;
  flex-shrink: 0;
  flex-wrap: wrap;
  justify-content: flex-end;
`;

export const Divider = styled(MuiDivider)`
  margin: 0;

  &.MuiDivider-vertical {
    margin: 16px 0;
  }
`;

export const MainContainer = styled.main`
  display: flex;
  flex-grow: 1;
  padding: 0 40px;
  flex-direction: column;
  overflow: auto;
`;

export const NavigationButtonGroup = styled(ButtonGroup)`
  margin-left: 16px;
`;

export const NavigationButton = styled(Button)<NavigationButtonProps>`
  font-weight: 500;
  width: 156px;

  &.MuiButtonGroup-grouped:not(:last-of-type) {
    border: none;
    &.MuiButton-containedPrimary.Mui-disabled {
      border: none;
    }
  }

  &,
  &focus,
  &:hover,
  &:disabled {
    background: ${({ theme, selected }) =>
      selected
        ? theme.palette.mode === "light"
          ? "#116ed0"
          : "#3391ee"
        : theme.palette.mode === "light"
        ? "#efeff2"
        : "#27343e"};

    color: ${({ selected }) => (selected ? "#fff" : "#7794ab")};
  }
`;

// export const Badge = styled(MuiBadge)`
//   & .MuiBadge-badge {
//     min-width: 16px;
//     min-height: 16px;
//     border-radius: 50%;
//     background: ${({ theme }) =>
//       theme.palette.mode === "light" ? "#08489b" : "#fff"};
//   }
// `;

export const LinksContainer = styled.div`
  margin-left: auto;
  display: flex;
  gap: 16px;
  margin-right: 16px;
`;

export const LinkTooltipTextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LinkTooltipTitle = styled.span`
  font-weight: 500;
  padding-bottom: 14px;
`;

export const Link = styled(MuiLink)`
  cursor: pointer;
  display: flex;
  gap: 8px;
  align-items: center;
  color: #0087c8;
`;
