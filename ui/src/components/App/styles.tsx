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

export const Container = styled.div`
  display: flex;
  flex-grow: 1;
`;

export const DigmaLogoContainer = styled.div`
  flex-shrink: 0;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  flex-grow: 1;
`;

export const JaegerContainer = styled.div`
  display: flex;
  overflow: auto;
  flex-shrink: 0;
  width: 50%;
`;
