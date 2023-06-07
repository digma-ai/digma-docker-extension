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

export const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;
