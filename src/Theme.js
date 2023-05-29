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
      primary: '#141414',
      secondary: '#6A6A6A',
    },
  },
  typography: {
    fontSize: 12,
  },
});

export default theme;
