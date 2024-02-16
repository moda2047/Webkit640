import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { unstable_createMuiStrictModeTheme } from '@mui/material/styles';
import { ThemeProvider } from 'styled-components';
import { CssBaseline } from '@mui/material';

const theme = unstable_createMuiStrictModeTheme();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <App />
      </CssBaseline>
    </ThemeProvider>
  </React.StrictMode>
);