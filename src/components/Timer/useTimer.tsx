import * as dateFns from "date-fns";
import { useCallback, useEffect, useReducer, useState } from "react";
import { useInterval } from "../../hooks/useInterval";
import { useApp } from "../../contexts/appContext";
import { DispatchArgument, Values } from "../CountDown/CountDown";

type State = {
  h: number;
  m: number;
  s: number;
  text: string;
};

const reducer = (state: State, action: DispatchArgument) => {
  switch (action.type) {
    case "h":
      return { ...state, h: action.value };
    case "m":
      return { ...state, m: action.value };
    case "s":
      return { ...state, s: action.value };
    case "text":
      localStorage.setItem("notice_text", action.value);
      return { ...state, text: action.value };
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
    text: localStorage.getItem("notice_text") || "",
  };
  const [state, dispatch] = useReducer(reducer, {
    h: Number(values.h),
    m: Number(values.m),
    s: Number(values.s),
    text: values.text,
  });
  const [counter, setCounter] = useState(0);
  const { start, stop, active } = useInterval({
    onUpdate: () => setCounter(counter - 1),
  });
  const [endDate, setEndDate] = useState<Date>();
  const { notice } = useApp();

  useEffect(() => {
    if (counter <= 0) {
      if (active) {
        notice(state.text);
      }
      stop();
    }
  }, [active, counter, notice, state.text, stop]);

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
  }, [state, stop]);

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
