import { createContext, FC, useCallback, useContext, useEffect } from "react";
import { useWindowOpen } from "../hooks/useWindowOpen";
import { ThemeProvider } from "./themeContext";

const AppContext = createContext<{
  notice: (v: string) => void;
  setTitle: (v?: string) => void;
}>({
  notice: () => {},
  setTitle: () => {},
});

export const AppProvider: FC = ({ children }) => {
  const { open } = useWindowOpen({
    target: "timer",
    features: { height: 610 },
  });

  const notice = useCallback(
    (text: string) => {
      if (text.match(/^(https?:\/\/|\/\/).+$/)) {
        open(text);
      } else if (Notification.permission === "granted") {
        new Notification(text || "時間です", {
          body: "",
          icon: "/logo192.png",
        });
      } else {
        window.open(
          `https://placehold.jp/ffffff/000000/780x590.png?text=${
            text || "時間です"
          }`
        );
      }
    },
    [open]
  );

  const setTitle = useCallback((title?: string) => {
    document.title = title || "Timer";
  }, []);

  useEffect(() => {
    Notification.requestPermission().then();
  }, []);

  return (
    <AppContext.Provider value={{ notice, setTitle }}>
      <ThemeProvider>{children}</ThemeProvider>
    </AppContext.Provider>
  );
};

export const useApp = () => {
  return useContext(AppContext);
};
