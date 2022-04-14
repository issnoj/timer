import * as dateFns from "date-fns";
import { useCallback, useEffect, useReducer, useState } from "react";
import { useInterval } from "../../hooks/useInterval";
import { Values } from "../CountDown/CountDown";

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

const calculateSeconds = (state: State) => {
  return state.h * 3600 + state.m * 60 + state.s;
};

const calculateEndDate = (counter: number) => {
  return dateFns.addSeconds(new Date(), counter);
};

export const useTimer = () => {
  const values: Values = {
    h: "",
    m: "3",
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

  useEffect(() => {
    if (counter <= 0) {
      stop();
    }
  }, [counter, stop]);

  const onSubmit = useCallback(
    (e) => {
      const seconds = calculateSeconds(state);
      const endDate = calculateEndDate(seconds);

      if (!seconds) {
        e.preventDefault();
        return;
      }

      setEndDate(endDate);
      setCounter(seconds);
      start();
      e.preventDefault();
    },
    [start, state]
  );

  const restart = useCallback(() => {
    const seconds = calculateSeconds(state);
    let endDate;

    if (!seconds) {
      return;
    }

    if (!counter) {
      setCounter(seconds);
      endDate = calculateEndDate(seconds);
    } else {
      endDate = calculateEndDate(counter);
    }

    setEndDate(endDate);
    start();
  }, [counter, start, state]);

  const reset = useCallback(() => {
    const seconds = calculateSeconds(state);
    const endDate = calculateEndDate(seconds);

    setEndDate(endDate);
    setCounter(seconds);
    stop();
  }, [stop, state]);

  return {
    values,
    dispatch,
    onSubmit,
    counter,
    stop,
    active,
    restart,
    reset,
    endDate,
  };
};
