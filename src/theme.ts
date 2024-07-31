import { cyan } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

export const customTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      light: cyan[200],
      main: cyan[300],
      dark: cyan[400],
      contrastText: "#000",
    },
  },
});
