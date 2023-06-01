import styled from "styled-components";

export const Change = styled.span`
  display: flex;
  gap: 4px;
  align-items: center;
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
