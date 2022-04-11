import { useCallback, useEffect, useReducer, useState } from "react";
import { useInterval } from "../../hooks/useInterval";

type TimerState = {
  h: number;
  m: number;
  s: number;
};

type TimerAction = {
  type: "h" | "m" | "s";
  value: number;
};

const timerReducer = (state: TimerState, action: TimerAction) => {
  switch (action.type) {
    case "h":
      return { ...state, h: action.value };
    case "m":
      return { ...state, m: action.value };
    case "s":
      return { ...state, s: action.value };
  }
  return state;
};

export const useTimer = () => {
  const values = {
    h: "",
    m: "3",
    s: "00",
  };
  const [timer, dispatchTimer] = useReducer(timerReducer, {
    h: Number(values.h),
    m: Number(values.m),
    s: Number(values.s),
  });
  const [counter, setCounter] = useState(0);
  const { start, stop, active } = useInterval({
    onUpdate: () => setCounter(counter - 1),
  });

  useEffect(() => {
    if (counter <= 0) {
      stop();
    }
  }, [counter, stop]);

  const onSubmit = useCallback(
    (e) => {
      const seconds = timer.h * 3600 + timer.m * 60 + timer.s;

      if (!seconds) {
        e.preventDefault();
        return;
      }

      setCounter(seconds);
      start();
      e.preventDefault();
    },
    [start, timer]
  );

  const restart = useCallback(() => {
    const seconds = timer.h * 3600 + timer.m * 60 + timer.s;

    if (!seconds) {
      return;
    }

    if (!counter) {
      setCounter(seconds);
    }

    start();
  }, [counter, start, timer]);

  const reset = useCallback(() => {
    const seconds = timer.h * 3600 + timer.m * 60 + timer.s;
    setCounter(seconds);
    stop();
  }, [stop, timer]);

  return {
    values,
    dispatchTimer,
    onSubmit,
    counter,
    stop,
    active,
    restart,
    reset,
  };
};
