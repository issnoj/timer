import { useCallback, useState } from "react";

type TimerType = "timer" | "alarm";

export const useHome = () => {
  const [state, setState] = useState<TimerType>(
    (localStorage.getItem("timer_type") as TimerType) || "timer"
  );

  const _setState = useCallback((value: TimerType) => {
    localStorage.setItem("timer_type", value);
    setState(value);
  }, []);

  return {
    state,
    setState: _setState,
  };
};
