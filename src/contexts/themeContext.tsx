import {
  Global,
  Theme,
  ThemeProvider as EmotionThemeProvider,
} from "@emotion/react";
import { createContext, FC, useContext, useState } from "react";
import { useMedia } from "../hooks/useMedia";
import { themeLight } from "../themes/light";
import { themeDark } from "../themes/dark";

const themes: { [s: string]: Theme } = {
  light: themeLight,
  dark: themeDark,
};

const defaultState = {
  name: "light",
  theme: themeLight,
  setTheme: () => {},
};

export const CustomThemeContext = createContext<{
  name: string;
  theme: Theme;
  setTheme: (v: "light" | "dark") => void;
}>(defaultState);

export const ThemeProvider: FC = ({ children }) => {
  const { mode } = useMedia();
  const [name, setName] = useState(localStorage.getItem("theme") || mode);
  const [theme, setTheme] = useState<Theme>(
    themes[localStorage.getItem("theme") || name]
  );

  const _setTheme = (value: "light" | "dark") => {
    localStorage.setItem("theme", value);
    setName(value);
    setTheme(themes[value]);
  };

  return (
    <EmotionThemeProvider theme={theme}>
      <CustomThemeContext.Provider value={{ name, theme, setTheme: _setTheme }}>
        <Global
          styles={{
            html: {
              fontFamily: "'Nunito', sans-serif",
              fontSize: theme.typography.fontSize,
              background: theme.palette.background.default,
              color: theme.palette.text.primary,
            },
          }}
        />
        {children}
      </CustomThemeContext.Provider>
    </EmotionThemeProvider>
  );
};

export const useTheme = () => {
  return useContext(CustomThemeContext);
};
