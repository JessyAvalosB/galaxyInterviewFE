// src/theme.ts
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#1976d2', // Azul MUI por defecto
        },
        secondary: {
            main: '#d32f2f', // Rojo MUI por defecto
        },
    },
});

export default theme;
