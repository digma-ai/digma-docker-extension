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
  font-size: 12px;
  line-height: 14px;
  font-weight: 500;
  color: ${({ theme }) => {
    switch (theme.palette.mode) {
      case "light":
        return "#4d668a";
      case "dark":
        return "#dadada";
    }
  }};
`;

export const Description = styled.span`
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
