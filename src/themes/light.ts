import { Theme } from "@emotion/react";
import { themeBase } from "./base";

export const themeLight: Theme = {
  ...themeBase,
  palette: {
    error: {
      main: "#d32f2f",
    },
    text: {
      primary: "rgba(0,0,0,0.8)",
      secondary: "rgba(0,0,0,0.5)",
      disabled: "rgba(0,0,0,0.3)",
      icon: "rgba(0,0,0,0.5)",
    },
    divider: "rgba(0,0,0,0.1)",
    background: {
      default: "#f0f0f0",
      paper: "#ffffff",
    },
    action: {
      active: "#ffffff",
      hover: "#ffffff",
    },
    counter: {
      running: "rgba(0,0,0,1)",
    },
    buttonTab: {
      default: "currentColor",
      defaultBorder: "transparent",
      defaultBackground: "transparent",
      hover: "currentColor",
      hoverBorder: "rgba(0,0,0,0.4)",
      hoverBackground: "transparent",
      active: "#51BE1E",
      activeBorder: "#51BE1E",
      activeBackground: "transparent",
    },
    button: {
      default: "currentColor",
      defaultBackground: "#f0f0f0",
      hover: "currentColor",
      hoverBackground: "#ffffff",
      active: "currentColor",
      activeBackground: "#ffffff",
      boxShadow: "rgba(0,0,0,0.16)",
    },
  },
};
