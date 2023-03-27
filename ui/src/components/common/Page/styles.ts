import MuiDivider from "@mui/material/Divider";
import MuiLink from "@mui/material/Link";
import Typography from "@mui/material/Typography";
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

export const Footer = styled.footer`
  display: flex;
  padding: 30px 40px 40px;
  height: 135px;
  flex-shrink: 0;
  flex-direction: column;
`;

export const FooterText = styled(Typography)`
  color: #70787d;
`;

export const IDEInfoContainer = styled.div`
  display: flex;
  gap: 20px;
`;

export const LinksContainer = styled.div`
  display: flex;
  gap: 28px;
`;

export const Link = styled(MuiLink)`
  cursor: pointer;
`;

export const IDELink = styled(Link)`
  display: flex;
  gap: 8px;
  align-items: center;
  height: fit-content;
`;

export const IntellijIconContainer = styled.span`
  display: inline-block;
  vertical-align: middle;
  padding-right: 10px;
`;

export const SlackIconContainer = styled.span`
  margin-left: -10px;
  display: inline-block;
  vertical-align: middle;
`;
