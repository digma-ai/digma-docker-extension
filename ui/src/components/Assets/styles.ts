import Button from "@mui/material/Button";
import styled from "styled-components";

export const Circle = styled.div`
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: ${({ theme }) =>
    theme.palette.mode === "light" ? "#e1e2e6" : "#333c42"};
`;

export const GettingStartedButton = styled(Button)`
  font-weight: 500;
  background: ${({ theme }) =>
    theme.palette.mode === "light" ? "#086dd7" : "#3391ee"};
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow: auto;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 96px;
  flex-shrink: 0;
`;
