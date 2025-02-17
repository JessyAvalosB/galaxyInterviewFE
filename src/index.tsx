import React from 'react';
import { createRoot } from 'react-dom/client';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';

import App from './App';
import { DefaultTheme as theme } from './themes';

const container = document.getElementById('root') as HTMLElement;

if (container) {
    const root = createRoot(container);
    root.render(
        <React.StrictMode>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <App />
            </ThemeProvider>
        </React.StrictMode>);
}
