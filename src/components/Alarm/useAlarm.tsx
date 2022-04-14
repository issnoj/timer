import { useCallback, useEffect, useReducer, useState } from "react";
import { useInterval } from "../../hooks/useInterval";
import * as dateFns from "date-fns";
import { useApp } from "../../contexts/appContext";

type State = {
  h: number;
  m: number;
  s: number;
};

type Action = {
  type: "h" | "m" | "s";
  value: number;
};

const reducer = (state: State, action: Action) => {
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

const calculate = (state: State) => {
  const endDate = new Date(
    new Date().getFullYear(),
    new Date().getMonth(),
    new Date().getDate(),
    state.h,
    state.m,
    state.s
  );
  const seconds = dateFns.differenceInSeconds(endDate, new Date());

  return { seconds, endDate };
};

export const useAlarm = () => {
  const values = {
    h: new Date().getHours() + 1,
    m: "00",
    s: "00",
  };
  const [state, dispatch] = useReducer(reducer, {
    h: Number(values.h),
    m: Number(values.m),
    s: Number(values.s),
  });
  const [counter, setCounter] = useState(0);
  const { start, stop, active } = useInterval({
    onUpdate: () => setCounter(counter - 1),
  });
  const [endDate, setEndDate] = useState<Date>();
  const { permission, requestPermission } = useApp();

  useEffect(() => {
    if (counter <= 0) {
      if (active) {
        new Notification("時間になりました！", {
          body: "",
          icon: "/favicon.svg",
        });
      }
      stop();
    }
  }, [active, counter, stop]);

  const onSubmit = useCallback(
    (e) => {
      if (permission !== "granted") {
        requestPermission();
        e.preventDefault();
        return;
      }

      const { seconds, endDate } = calculate(state);

      if (seconds <= 0) {
        e.preventDefault();
        return;
      }

      setEndDate(endDate);
      setCounter(seconds);
      start();
      e.preventDefault();
    },
    [permission, requestPermission, start, state]
  );

  const restart = useCallback(() => {
    if (permission !== "granted") {
      requestPermission();
      return;
    }

    const { seconds, endDate } = calculate(state);

    if (seconds <= 0) {
      setCounter(0);
      stop();
      return;
    }

    setEndDate(endDate);
    setCounter(seconds);
    start();
  }, [permission, state, start, requestPermission, stop]);

  return {
    values,
    dispatch,
    onSubmit,
    counter,
    stop,
    active,
    restart,
    endDate,
  };
};
