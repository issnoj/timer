import * as dateFns from "date-fns";
import { useCallback, useReducer } from "react";

type State = {
  h: number;
  m: number;
  s: number;
};

export type DispatchArgument = {
  type: "h" | "m" | "s";
  value: number;
};

const reducer = (state: State, action: DispatchArgument) => {
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

type Props = {
  h?: number;
  m?: number;
  s?: number;
};

export const useHourMinuteSecondState = ({ h = 0, m = 0, s = 0 }: Props) => {
  const [state, dispatch] = useReducer(reducer, {
    h,
    m,
    s,
  });

  const setHour = useCallback(
    (value: number) => {
      dispatch({ type: "h", value });
    },
    [dispatch]
  );

  const setMinute = useCallback(
    (value: number) => {
      dispatch({ type: "m", value });
    },
    [dispatch]
  );

  const setSecond = useCallback(
    (value: number) => {
      dispatch({ type: "s", value });
    },
    [dispatch]
  );

  const calcAsTime = useCallback(() => {
    const endDate = new Date(
      new Date().getFullYear(),
      new Date().getMonth(),
      new Date().getDate(),
      Number(state.h),
      Number(state.m),
      Number(state.s)
    );
    const seconds = dateFns.differenceInSeconds(endDate, new Date());

    return { seconds, endDate };
  }, [state]);

  const calcAsTimer = useCallback(() => {
    const seconds =
      Number(state.h) * 3600 + Number(state.m) * 60 + Number(state.s);
    const endDate = dateFns.addSeconds(new Date(), seconds);

    return { seconds, endDate };
  }, [state]);

  return { state, setHour, setMinute, setSecond, calcAsTime, calcAsTimer };
};
