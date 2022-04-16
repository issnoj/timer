import { createContext, FC, useContext, useEffect } from "react";
import { useWindowOpen } from "../hooks/useWindowOpen";

const AppContext = createContext<{
  notice: (v: string) => void;
}>({
  notice: () => {},
});

export const AppProvider: FC = ({ children }) => {
  const { open } = useWindowOpen({
    target: "timer",
    features: { height: 610 },
  });

  const notice = (text: string) => {
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
  };

  useEffect(() => {
    Notification.requestPermission().then();
  }, []);

  return (
    <AppContext.Provider value={{ notice }}>{children}</AppContext.Provider>
  );
};

export const useApp = () => {
  return useContext(AppContext);
};
