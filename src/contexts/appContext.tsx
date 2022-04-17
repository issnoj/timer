import {
  createContext,
  FC,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { useWindowOpen } from "../hooks/useWindowOpen";
import { ThemeProvider } from "./themeContext";

const AppContext = createContext<{
  notice: (v: string) => void;
  title: string;
  setTitle: (v?: string) => void;
}>({
  notice: () => {},
  title: "",
  setTitle: () => {},
});

export const AppProvider: FC = ({ children }) => {
  const [title, setTitle] = useState("");
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
        open(
          `https://placehold.jp/ffffff/000000/780x590.png?text=${
            text || "時間です"
          }`
        );
      }
    },
    [open]
  );

  const _setTitle = useCallback((title?: string) => {
    document.title = title || "Timer";
    setTitle(document.title);
  }, []);

  useEffect(() => {
    Notification.requestPermission().then();
  }, []);

  return (
    <AppContext.Provider value={{ notice, title, setTitle: _setTitle }}>
      <ThemeProvider>{children}</ThemeProvider>
    </AppContext.Provider>
  );
};

export const useApp = () => {
  return useContext(AppContext);
};
