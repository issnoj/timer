import { useState } from "react";

type TimerType = "timer" | "alarm";

export const useApp = () => {
  const [timerType, setTimerType] = useState<TimerType>("timer");

  return { timerType, setTimerType };
};
