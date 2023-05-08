import styled from "styled-components";

export const PercentileList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Percentile = styled.span`
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-size: 14px;
  line-height: 17px;

  color: ${({ theme }) => {
    switch (theme.palette.mode) {
      case "light":
        return "#70787d";
      case "dark":
        return "#9b9b9b";
    }
  }};
`;
