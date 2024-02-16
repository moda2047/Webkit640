import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CssBaseline, unstable_createMuiStrictModeTheme } from "@mui/material";
import { ThemeProvider } from "styled-components";

const theme = unstable_createMuiStrictModeTheme();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
