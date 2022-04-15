import { useCallback, useEffect, useReducer, useState } from "react";
import { useInterval } from "../../hooks/useInterval";
import * as dateFns from "date-fns";
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
  const values: Values = {
    h: new Date().getHours() + 1,
    m: "00",
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
    [start, state]
  );

  const restart = useCallback(() => {
    const { seconds, endDate } = calculate(state);

    if (seconds <= 0) {
      setCounter(0);
      stop();
      return;
    }

    setEndDate(endDate);
    setCounter(seconds);
    start();
  }, [state, start, stop]);

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
