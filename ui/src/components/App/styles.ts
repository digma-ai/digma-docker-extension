import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html, body, #root {
    height: 100%;
    background: #3d3f41;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe WPC", "Segoe UI",
      system-ui, "Ubuntu", "Droid Sans", sans-serif;
  }
`;
