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
