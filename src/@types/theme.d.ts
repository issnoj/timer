import "@emotion/react";

declare module "@emotion/react" {
  interface Theme {
    typography: Typography;
    palette: Palette;
  }
}

interface Typography {
  fontSize: number | string;
  h1: {
    fontSize: number | string;
  };
  h2: {
    fontSize: number | string;
  };
  h3: {
    fontSize: number | string;
  };
  h4: {
    fontSize: number | string;
  };
  h5: {
    fontSize: number | string;
  };
  h6: {
    fontSize: number | string;
  };
  body1: {
    fontSize: number | string;
  };
  body2: {
    fontSize: number | string;
  };
  caption: {
    fontSize: number | string;
  };
}

interface Palette {
  text: {
    primary: string;
    secondary: string;
    disabled: string;
    icon: string;
  };
  divider: string;
  background: {
    paper: string;
    default: string;
  };
  action: {
    active: string;
    hover: string;
  };
  counter: {
    running: string;
  };
  button: {
    default: string;
    defaultBackground: string;
    hover: string;
    hoverBackground: string;
    active: string;
    activeBackground: string;
    disabled: string;
    disabledBackground: string;
    boxShadow: string;
    textShadow: string;
  };
}
