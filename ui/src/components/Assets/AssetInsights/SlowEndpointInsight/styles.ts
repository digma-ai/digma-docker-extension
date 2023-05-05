import styled from "styled-components";

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
