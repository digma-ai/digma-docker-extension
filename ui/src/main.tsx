import { DockerMuiThemeProvider } from "@docker/docker-mui-theme";
import CssBaseline from "@mui/material/CssBaseline";
import { StyledEngineProvider } from "@mui/material/styles";
import React from "react";
import ReactDOM from "react-dom/client";

import { App } from "./components/App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    {/*
      If you eject from MUI (which we don't recommend!), you should add
      the `dockerDesktopTheme` class to your root <html> element to get
      some minimal Docker theming.
    */}
    <StyledEngineProvider injectFirst>
      <DockerMuiThemeProvider>
        <CssBaseline />
        <App />
      </DockerMuiThemeProvider>
    </StyledEngineProvider>
  </React.StrictMode>
);
