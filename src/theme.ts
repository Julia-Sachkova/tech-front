import { cyan } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";
import WixMadeforText from "./assets/fonts/WixMadeforText-Regular.woff2";

export const customTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      light: cyan[400],
      main: cyan[500],
      dark: cyan[600],
      contrastText: "#fff",
    },
  },
  typography: {
    fontFamily: "WixMadeforText, Arial",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'WixMadeforText';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('WixMadeforText'), local('WixMadeforText-Regular'), url(${WixMadeforText}) format('woff2');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `,
    },
  },
});
