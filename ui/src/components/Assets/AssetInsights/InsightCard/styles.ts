import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px;
  gap: 8px;
  border-radius: 4px;

  color: ${({ theme }) => {
    switch (theme.palette.mode) {
      case "light":
        return "#4d668a";
      case "dark":
        return "#dadada";
    }
  }};

  background: ${({ theme }) => {
    switch (theme.palette.mode) {
      case "light":
        return "#f1f5fa";
      case "dark":
        return "#27343e";
    }
  }};
`;

export const TitleRow = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
`;

export const Stats = styled.span`
  margin-left: auto;
  font-size: 12px;
  line-height: 14px;
  color: ${({ theme }) => {
    switch (theme.palette.mode) {
      case "light":
        return "#7891d0";
      case "dark":
        return "#b9C2eb";
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
