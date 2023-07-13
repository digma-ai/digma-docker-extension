import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import styled from "styled-components";

export const Container = styled(Paper)`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px;
  cursor: pointer;
  background: ${({ theme }) => {
    switch (theme.palette.mode) {
      case "light":
        return "#fff";
      case "dark":
        return "#27343e";
    }
  }};
  border: 1px solid
    ${({ theme }) => {
      switch (theme.palette.mode) {
        case "light":
          return "#efeff2";
        case "dark":
          return "#465c6e";
      }
    }};
`;

export const Header = styled.div`
  display: flex;
  gap: 2px;
  height: 28px;
  align-items: center;
`;

export const AssetTypeIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;
  flex-shrink: 0;
`;

export const Name = styled(Typography)`
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #7891d0;
`;

export const InsightIconsContainer = styled.div`
  display: flex;
  gap: 2px;
  margin-left: auto;
  height: 100%;
`;

export const InsightIconContainer = styled(AssetTypeIconContainer)`
  border-radius: 4px;
  background: ${({ theme }) => {
    switch (theme.palette.mode) {
      case "light":
        return "#e9eef4";
      case "dark":
        return "#36414e";
    }
  }};
`;

export const StatsContainer = styled.div`
  display: flex;
  font-size: 14px;
  line-height: 17px;
  gap: 40px;
`;

export const Stats = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 4px;
  color: ${({ theme }) => {
    switch (theme.palette.mode) {
      case "light":
        return "#70787d";
      case "dark":
        return "#9b9b9b";
    }
  }};

  &:first-child {
    width: 20%;
  }

  &:nth-child(2) {
    width: 20%;
  }

  &:nth-child(3) {
    width: 15%;
  }

  &:nth-child(4) {
    width: 20%;
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

export const ServiceIconContainer = styled.div`
  display: flex;
`;

export const ServiceName = styled.div`
  padding: 4px 0;
  border-radius: 23px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: ${({ theme }) => {
    switch (theme.palette.mode) {
      case "light":
        return "#49494d";
      case "dark":
        return "#dadada";
    }
  }};
`;

export const ValueContainer = styled.div`
  display: flex;
  gap: 2px;
  font-weight: 500;
  color: ${({ theme }) => {
    switch (theme.palette.mode) {
      case "light":
        return "#49494d";
      case "dark":
        return "#c6c6c6";
    }
  }};
`;

export const Suffix = styled.span`
  font-size: 11px;
  color: ${({ theme }) => {
    switch (theme.palette.mode) {
      case "light":
        return "#383838";
      case "dark":
        return "#9b9b9b";
    }
  }};
`;
