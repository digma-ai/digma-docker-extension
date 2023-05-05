import styled from "styled-components";

export const DurationList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Duration = styled.span`
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
