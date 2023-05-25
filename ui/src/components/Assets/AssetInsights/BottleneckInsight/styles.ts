import styled from "styled-components";

export const EndpointList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Endpoint = styled.span`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
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

export const EndpointName = styled.span`
  display: flex;
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

export const Duration = styled.span`
  margin-left: auto;
`;
