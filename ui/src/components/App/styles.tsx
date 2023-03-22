import Button from "@mui/material/Button";
import MuiGlobalStyles from "@mui/material/GlobalStyles";
import MuiLink from "@mui/material/Link";
import Typography from "@mui/material/Typography";
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

export const EnvironmentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px;
  gap: 8px;
`;

export const EnvironmentsList = styled.div`
  display: flex;
  gap: 24px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const Header = styled.header`
  display: flex;
  height: 112px;
  align-items: center;
  gap: 16px;
  padding: 0 40px;
  top: 0;
  flex-shrink: 0;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 52px;
`;

export const GoToButton = styled(Button)`
  display: flex;
  align-items: center;
  margin-left: auto;
  font-weight: 500;
  background: ${({ theme }) =>
    theme.palette.mode === "light" ? "#086dd7" : "#3391ee"};
`;

// export const GoToButtonText = styled(Typography)`
//   font-weight: 500;
//   color: ${({ theme }) =>
//     theme.palette.mode === "light" ? "#086dd7" : "#fff"};
// `;

export const MainContainer = styled.main`
  display: flex;
  flex-grow: 1;
  padding: 40px;
  flex-direction: column;
`;

export const Footer = styled.footer`
  bottom: 0;
  display: flex;
  padding: 0 40px;
  height: 60px;
  gap: 20px;
  flex-shrink: 0;
`;

export const FooterText = styled(Typography)`
  color: #70787d;
`;

export const LinksContainer = styled.div`
  display: flex;
  gap: 28px;
`;

export const Link = styled(MuiLink)`
  display: flex;
  gap: 8px;
  align-items: center;
  height: fit-content;
  cursor: pointer;
`;
