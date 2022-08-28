import { createTheme } from "@mui/material/styles";
import { cyan, pink } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: "#51232e",
    },
    secondary: {
      main: "#FCBA04",
    },
    backgrounds: {
      main: "#fcf8f9",
      main2: "#f6eaed",
      main3: "#f0dbe0",
      main4: "#e9cdd4",
      main5: "#ddb1bb",
    },
    darks: {
      dark1: "#070304",
      dark2: "#15090c",
      dark3: "#240f14",
      dark4: "#32161c",
      dark5: "#401c24",
    },
    chips: {
      yellow: {
        text: '#89632a',
        fill: '#e1c69d'
      },
      purple: {
        text: '#492f64',
        fill: '#bfa8d6'
      },
      green: {
        text: '#2b593f',
        fill: '#a9d5bc'
      },
      red: {
        text: '#6e3630',
        fill: '#d8aba6'
      },
      blue: {
        text: '#28456c',
        fill: '#a2bbdd'
      },
    }
  },
  typography: {
    "@ $root": {
      fontFamiliy: [
        'Noto Sans Display',
        'sans-serif'
      ].join(','),
    },
  },
  components: {
    MuiPaper: {
      palette: ({ theme }) => ({
        primary: theme.palette.primary.main,
      }),
    },
  },
});

export default theme;
