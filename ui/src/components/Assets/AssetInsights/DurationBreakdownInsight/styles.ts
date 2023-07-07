import styled from "styled-components";

export const DurationList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Duration = styled.span`
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
