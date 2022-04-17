import { Theme } from "@emotion/react";
import { themeBase } from "./base";

export const themeDark: Theme = {
  ...themeBase,
  palette: {
    error: {
      main: "#f44336",
    },
    text: {
      primary: "rgba(255,255,255,0.8)",
      secondary: "rgba(255,255,255,0.5)",
      disabled: "rgba(255,255,255,0.1)",
      icon: "rgba(255,255,255,0.5)",
    },
    divider: "rgba(255,255,255,0.1)",
    background: {
      default: "#121212",
      paper: "#121212",
    },
    action: {
      active: "#ffffff",
      hover: "rgba(255,255,255,0.08)",
    },
    counter: {
      running: "#51BE1E",
    },
    buttonTab: {
      default: "currentColor",
      defaultBorder: "transparent",
      defaultBackground: "transparent",
      hover: "currentColor",
      hoverBorder: "#51BE1E",
      hoverBackground: "#282828",
      active: "#51BE1E",
      activeBorder: "#51BE1E",
      activeBackground: "#202020",
    },
    button: {
      default: "currentColor",
      defaultBackground: "#202020",
      hover: "currentColor",
      hoverBackground: "#282828",
      active: "currentColor",
      activeBackground: "#202020",
      boxShadow: "rgba(255,255,255,0.5)",
    },
  },
};
