import { themeBase } from "./base";

export const themeDark = {
  ...themeBase,
  palette: {
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
      running: "rgba(30,240,45,0.8)",
    },
    button: {
      default: "currentColor",
      defaultBackground: "#202020",
      hover: "currentColor",
      hoverBackground: "#282828",
      active: "currentColor",
      activeBackground: "#202020",
      disabled: "rgba(140,255,150,1)",
      disabledBackground: "#202020",
      boxShadow: "rgba(255,255,255,0.5)",
      textShadow: "rgba(0,255,0,1)",
    },
  },
};
