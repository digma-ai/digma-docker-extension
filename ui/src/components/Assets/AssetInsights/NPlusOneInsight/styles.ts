import styled from "styled-components";
import { Button as CommonButton } from "../../../common/Button";

export const Stats = styled.span`
  display: flex;
  gap: 24px;
`;

export const Stat = styled.span`
  display: flex;
  gap: 4px;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
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
  font-weight: 400;
  color: ${({ theme }) => {
    switch (theme.palette.mode) {
      case "light":
        return "#70787d";
      case "dark":
        return "#9b9b9b";
    }
  }};
`;

export const SpanContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Button = styled(CommonButton)`
  height: fit-content;
`;

export const Endpoint = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
