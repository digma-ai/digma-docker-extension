import styled from "styled-components";
import { Button as CommonButton } from "../../../common/Button";

export const FlowList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Flow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4px;
`;

export const FlowData = styled.span`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  font-size: 14px;
  line-height: 17px;
  font-weight: 500;
  word-break: break-all;

  color: ${({ theme }) => {
    switch (theme.palette.mode) {
      case "light":
        return "#49494d";
      case "dark":
        return "#dadada";
    }
  }};
`;

export const Button = styled(CommonButton)`
  margin-left: auto;
  height: fit-content;
  align-self: flex-start;
`;
