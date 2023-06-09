import styled from "styled-components";

export const ContentContainer = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const PieChartContainer = styled.div`
  padding: 2px;
  border-radius: 50%;
  border: 1px solid #46454e;
  background: #2e2e2e;
`;

export const Legend = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
`;

export const LegendItem = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const LegendItemDataColor = styled.div<{ color: string }>`
  height: 4px;
  width: 4px;
  border-radius: 50%;
  background: ${({ color }) => color};
`;

export const LegendItemDataLabel = styled.span`
  font-size: 10px;
  line-height: 12px;
  color: #9b9b9b;
`;

export const LegendItemDataValue = styled.span`
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  color: #dadada;
`;
