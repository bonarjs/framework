import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#6d9eeb'
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;