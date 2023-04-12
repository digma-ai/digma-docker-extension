import MuiDivider from "@mui/material/Divider";
import styled from "styled-components";

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
  flex-shrink: 0;
`;

export const Divider = styled(MuiDivider)`
  margin: 0;
`;

export const MainContainer = styled.main`
  display: flex;
  flex-grow: 1;
  padding: 0 40px;
  flex-direction: column;
  overflow: auto;
`;
