import {
  createContext,
  FC,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

const AppContext = createContext<{
  permission: string | null;
  requestPermission: () => void;
}>({
  permission: null,
  requestPermission: () => {},
});

export const AppProvider: FC = ({ children }) => {
  const [permission, setPermission] = useState(Notification.permission);

  const requestPermission = useCallback(() => {
    alert("通知を許可してください");
  }, []);

  useEffect(() => {
    Notification.requestPermission().then(function (permission) {
      setPermission(permission);
    });
  }, []);

  return (
    <AppContext.Provider value={{ permission, requestPermission }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  return useContext(AppContext);
};
