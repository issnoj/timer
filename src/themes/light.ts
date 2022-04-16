import { themeBase } from "./base";

export const themeLight = {
  ...themeBase,
  palette: {
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
    button: {
      default: "currentColor",
      defaultBackground: "#f0f0f0",
      hover: "currentColor",
      hoverBackground: "#ffffff",
      active: "currentColor",
      activeBackground: "#ffffff",
      disabled: "#808080",
      disabledBackground: "#ffffff",
      boxShadow: "rgba(0,0,0,0.16)",
      textShadow: "rgba(255,255,255,0.5)",
    },
  },
};
