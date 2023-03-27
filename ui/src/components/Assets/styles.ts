import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import styled from "styled-components";

export const NoDataContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
`;

export const NoDataContent = styled.div`
  max-width: 440px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

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

export const NoDataTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

export const NoDataText = styled(Typography)`
  text-align: center;
  color: ${({ theme }) =>
    theme.palette.mode === "light" ? "#677285" : "#adbecb"};
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
