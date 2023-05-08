import styled from "styled-components";

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const EndpointList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Endpoint = styled.span`
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
