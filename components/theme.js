import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { cyan, pink } from "@mui/material/colors";

const preTheme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#51232e',
    },
    secondary: {
      main: '#FCBA04',
    },
    background: {
      default: '#ffffff',
      gradient:  'radial-gradient(circle, rgba(195,88,114,1) 17%, rgba(81,35,46,1) 85%, rgba(81,35,46,1) 100%)',
      paper: '#f6eaed',
      oldHome: '#f6eaed',
      oldAway: '#fff8e6',
      dark: '#51232e'
    },
  },
  typography: {
    fontFamily: ['Roboto', 'sans-serif'].join(','),
  },
  spacing: 8,
  shape: {
    borderRadius: 4,
  },
  overrides: {
    MuiAppBar: {
      colorInherit: {
        backgroundColor: '#689f38',
        color: '#fff',
      },
    },
  },
  props: {
    MuiButtonBase: {
      disableRipple: true,
    },
    MuiButton: {
      size: 'small',
    },
    MuiButtonGroup: {
      size: 'small',
    },
    MuiCheckbox: {
      size: 'small',
    },
    MuiFab: {
      size: 'small',
    },
    MuiFormControl: {
      margin: 'dense',
      size: 'small',
    },
    MuiFormHelperText: {
      margin: 'dense',
    },
    MuiIconButton: {
      size: 'small',
    },
    MuiInputBase: {
      margin: 'dense',
    },
    MuiInputLabel: {
      margin: 'dense',
    },
    MuiRadio: {
      size: 'small',
    },
    MuiSwitch: {
      size: 'small',
    },
    MuiTextField: {
      margin: 'dense',
      size: 'small',
    },
  },
});

const theme = responsiveFontSizes(preTheme);

export default theme;
