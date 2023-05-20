import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#FFFFFF',
    },
    secondary: {
      main: '#f8f8f8',
    },
    background: {
      default: '#ffff',
    },
    text: {
      primary: '#333',
      secondary: '#777',
    },
  },
  typography: {
    fontSize: 12,
  },
});

export default theme;
