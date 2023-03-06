import styled, {
  createGlobalStyle,
  css,
  FlattenSimpleInterpolation,
} from "styled-components";
import { os } from "../../os";

export const getMainFont = (customFont: string): FlattenSimpleInterpolation => {
  let osFont = "";

  if (os === "Linux") {
    osFont = 'system-ui, Ubuntu, "Droid Sans"';
  }

  if (os === "macOS") {
    osFont = "-apple-system, BlinkMacSystemFont";
  }

  if (os === "Windows") {
    osFont = '"Segoe WPC", "Segoe UI"';
  }

  return css`
    /* stylelint-disable-next-line font-family-no-missing-generic-family-keyword */
    font-family: ${[customFont, osFont, "sans-serif"]
      .filter(Boolean)
      .join(", ")};
  `;
};

export const GlobalStyle = createGlobalStyle`
  html, body, #root {
    height: 100%;
  }

  body {
    margin: 0;
    padding: 0;
    overscroll-behavior: none;
    ${getMainFont("")}
  }
`;

export const EnvironmentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px;
  gap: 8px;
  background: #3d3f41;
  color: #dadada;
`;

export const EnvironmentsList = styled.div`
  display: flex;
  gap: 24px;
`;

export const EnvironmentLink = styled.a`
  color: #7891d0;
  text-decoration: none;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  cursor: pointer;
`;
