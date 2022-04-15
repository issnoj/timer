import { createContext, FC, useContext, useEffect } from "react";

const AppContext = createContext<{
  notice: (v: string) => void;
}>({
  notice: () => {},
});

export const AppProvider: FC = ({ children }) => {
  const notice = (text: string) => {
    const width = 800;
    const height = 610;
    const top = (window.screen.height - height) / 2;
    const left = (window.screen.width - width) / 2;
    const features = `width=${width},height=${height},top=${top},left=${left}`;

    if (text.match(/^(https?:\/\/|\/\/).+$/)) {
      window.open(text, "timer", features);
    } else if (Notification.permission === "granted") {
      new Notification(text || "時間です", {
        body: "",
        icon: "/logo192.png",
      });
    } else {
      const url = `https://placehold.jp/ffffff/000000/780x590.png?text=${
        text || "時間です"
      }`;
      window.open(url, "timer", features);
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
