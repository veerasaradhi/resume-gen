// theme.js
import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#0091FF",
    },
    secondary: {
      main: "#f50057",
    },
  },
  typography: {
    h5: {
      fontSize: "1.2rem",
      fontWeight: "bold",
    },
    body2: {
      fontSize: "0.8rem",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "9999px",
          fontSize: "0.8rem",
          padding: "4px 10px",
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        margin: "dense",
        size: "small",
      },
    },
    MuiGrid: {
      styleOverrides: {
        item: {
          width: "100%",
          borderRadius: 10,
          padding: 2,
        },
      },
    },
  },
});
