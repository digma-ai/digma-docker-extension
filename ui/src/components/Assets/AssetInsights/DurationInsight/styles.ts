import styled from "styled-components";

export const PercentileList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Percentile = styled.span`
  display: flex;
  gap: 8px;
  font-size: 14px;
  line-height: 17px;
  font-weight: 500;

  color: ${({ theme }) => {
    switch (theme.palette.mode) {
      case "light":
        return "#49494d";
      case "dark":
        return "#dadada";
    }
  }};
`;

export const Change = styled.span`
  display: flex;
  gap: 4px;
  align-items: center;
  font-weight: 400;

  color: ${({ theme }) => {
    switch (theme.palette.mode) {
      case "light":
        return "#70787d";
      case "dark":
        return "#9b9b9b";
    }
  }};
`;
