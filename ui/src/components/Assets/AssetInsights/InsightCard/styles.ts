import Paper from "@mui/material/Paper";
import styled from "styled-components";

export const Container = styled(Paper)`
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  box-sizing: border-box;

  border: 1px solid
    ${({ theme }) => {
      switch (theme.palette.mode) {
        case "light":
          return theme.palette.background.paper;
        case "dark":
          return "#465c6e";
      }
    }};
`;

export const TitleRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;

  color: ${({ theme }) => {
    switch (theme.palette.mode) {
      case "light":
        return "#49494d";
      case "dark":
        return "#dadada";
    }
  }};
`;

export const InsightIconContainer = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;
  flex-shrink: 0;
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

export const Stats = styled.span`
  margin-left: auto;
  font-size: 14px;
  line-height: 17px;

  color: ${({ theme }) => {
    switch (theme.palette.mode) {
      case "light":
        return "#7891d0";
      case "dark":
        return "#b9c2eb";
    }
  }};
`;

export const ExpandButton = styled.button`
  padding: 0;
  border: none;
  background: none;
`;

export const ContentContainer = styled.div`
  font-size: 10px;
  line-height: 12px;
`;

export const ButtonsContainer = styled.div`
  margin-top: auto;
  display: flex;
  justify-content: flex-end;
`;
