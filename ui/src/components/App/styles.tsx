import MuiBadge from "@mui/material/Badge";
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

export const NavigationButtonContainer = styled.div`
  margin-left: auto;
`;

export const NavigationButton = styled(Button)`
  font-weight: 500;
`;

export const Badge = styled(MuiBadge)`
  & .MuiBadge-badge {
    min-width: 16px;
    min-height: 16px;
    border-radius: 50%;
    background: ${({ theme }) =>
      theme.palette.mode === "light" ? "#08489b" : "#fff"};
  }
`;

export const GoToAssetsPageButton = styled(NavigationButton)`
  background: ${({ theme }) =>
    theme.palette.mode === "light" ? "#086dd7" : "#3391ee"};
`;

export const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;
