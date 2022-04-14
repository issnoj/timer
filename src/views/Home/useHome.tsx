import { useState } from "react";

type TimerType = "timer" | "alarm";

export const useHome = () => {
  const [state, setState] = useState<TimerType>("timer");

  return {
    state,
    setState,
  };
};
