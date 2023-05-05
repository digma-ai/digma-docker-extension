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
