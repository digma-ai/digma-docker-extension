import styled from "styled-components";

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
