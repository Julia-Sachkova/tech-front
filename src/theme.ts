import { cyan } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

export const customTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      light: cyan[400],
      main: cyan[500],
      dark: cyan[600],
      contrastText: "#000",
    },
  },
});
