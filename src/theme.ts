import { indigo } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

export const customTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      light: indigo[200],
      main: indigo[300],
      dark: indigo[400],
      contrastText: "#fff",
    },
  },
});
