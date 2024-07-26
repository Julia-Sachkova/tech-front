import { teal } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

export const customTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      light: teal[200],
      main: teal[300],
      dark: teal[400],
      contrastText: "#fff",
    },
  },
});
