import Button from "@mui/material/Button";
import MuiMenu from "@mui/material/Menu";
import MuiMenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import styled from "styled-components";

export const MenuButton = styled(Button)`
  display: flex;
  gap: 10px;
  background: none;
  padding: 11px 16px 11px 0px;
  min-width: 130px;

  color: ${({ theme }) =>
    theme.palette.mode === "light" ? "#677285" : "#fff"};

  &:hover,
  &:focus {
    color: ${({ theme }) =>
      theme.palette.mode === "light" ? "#677285" : "#fff"};
    background: none;
  }
`;

export const SelectedValue = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Menu = styled(MuiMenu)`
  & .MuiPaper-root {
    width: 202px;
    padding: 4px;
  }
`;

export const MenuItem = styled(MuiMenuItem)`
  display: flex;
  justify-content: space-between;
  padding: 4px;
  gap: 2px;
  border-radius: 4px;
`;

export const Title = styled(Typography)`
  height: 16px;
  margin: 4px 4px 8px;
  font-size: 12px;
  line-height: 16px;
  display: flex;
  align-items: center;
  letter-spacing: 0.02em;
  color: ${({ theme }) =>
    theme.palette.mode === "light" ? "#677285" : "#adbecb"};
`;
