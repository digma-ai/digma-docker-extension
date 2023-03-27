import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import styled from "styled-components";

export const Container = styled(Paper)`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px;
  background: ${({ theme }) =>
    theme.palette.mode === "light" ? "#fff" : "#27343e"};
  border: 1px solid
    ${({ theme }) => (theme.palette.mode === "light" ? "#efeff2" : "#465c6e")};
`;

export const Header = styled.div`
  display: flex;
  gap: 2px;
  height: 28px;
  align-items: center;
`;

export const OpenTelemetryIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 100%;
  flex-shrink: 0;
`;

export const Link = styled.a`
  color: #7891d0;
  text-decoration: none;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  cursor: pointer;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export const Name = styled(Typography)`
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export const InsightIconsContainer = styled.div`
  display: flex;
  gap: 2px;
  margin-left: auto;
  height: 100%;
`;

export const InsightIconContainer = styled(OpenTelemetryIconContainer)`
  width: 28px;
  height: 100%;
  border-radius: 4px;
  background: ${({ theme }) =>
    theme.palette.mode === "light" ? "none" : "#36414e"};
  border: ${({ theme }) =>
    theme.palette.mode === "light" ? "1px solid #efeff2" : "none"};
`;

export const StatsContainer = styled.div`
  display: flex;
  font-size: 14px;
  line-height: 20px;
  gap: 40px;
`;

export const Stats = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 4px;
  color: ${({ theme }) =>
    theme.palette.mode === "light" ? "#70787d" : "#9b9b9b"};

  &:first-child {
    width: 20%;
  }

  &:nth-child(2) {
    width: 20%;
  }

  &:nth-child(3) {
    width: 15%;
  }
`;

export const ServicesContainer = styled.div`
  display: flex;
  gap: 2px;
  align-items: center;
  font-size: 12px;
  line-height: 14px;
  color: #9b9b9b;
  overflow: hidden;
`;

export const ServiceName = styled.div`
  padding: 4px 6px;
  color: ${({ theme }) =>
    theme.palette.mode === "light" ? "#49494d" : "#dadada"};
  background: ${({ theme }) =>
    theme.palette.mode === "light" ? "#f0f0f0" : "#3d4753"};
  border-radius: 23px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ValueContainer = styled.div`
  display: flex;
  align-items: flex-end;
  color: ${({ theme }) =>
    theme.palette.mode === "light" ? "#49494d" : "#c6c6c6"};
  gap: 2px;
  font-size: 12px;
  line-height: 14px;
  font-weight: 500;
`;

export const Suffix = styled.span`
  font-weight: 500;
  font-size: 11px;
  line-height: 14px;
  color: ${({ theme }) =>
    theme.palette.mode === "light" ? "#383838" : "#9b9b9b"};
`;
