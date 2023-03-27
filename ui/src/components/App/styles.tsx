import Button from "@mui/material/Button";
import MuiGlobalStyles from "@mui/material/GlobalStyles";
import styled from "styled-components";
import "../../../assets/styles.css";

export const GlobalStyles = () => (
  <MuiGlobalStyles
    styles={{
      body: {
        padding: 0,
      },
    }}
  />
);

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 52px;
`;

export const NavigationButton = styled(Button)`
  margin-left: auto;
  font-weight: 500;
`;

export const GoToAssetsPageButton = styled(NavigationButton)`
  background: ${({ theme }) =>
    theme.palette.mode === "light" ? "#086dd7" : "#3391ee"};
`;
