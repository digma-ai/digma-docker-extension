import styled from "styled-components";

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const ErrorList = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 4px;
  gap: 4px;
  word-break: break-all;
`;

export const EntityName = styled.span`
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

export const Description = styled.span`
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
