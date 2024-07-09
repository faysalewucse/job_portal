import React from "react";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import { deepOrange, grey } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: "#4B0082",
      contrastText: "#ffffff",
    },
    secondary: {
      main: deepOrange[500],
    },
    background: {
      default: "#1E1E1E",
    },
  },
  typography: {
    fontFamily: "Poppins",
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          "&:hover": {
            backgroundColor: "#7e21d4",
            color: "white",
          },
        },
      },
    },
    MuiSlider: {
      styleOverrides: {
        thumb: {
          width: 15,
          height: 15,
        },
        rail: {
          height: 10,
        },
      },
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          width: 25,
          height: 25,
        },
      },
    },
    MuiCircularProgress: {
      styleOverrides: {
        colorPrimary: {
          color: "#1c1c1c",
        },
      },
    },
  },
  shape: {
    borderRadius: 0,
  },
});

const CustomThemeProvider = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default CustomThemeProvider;
