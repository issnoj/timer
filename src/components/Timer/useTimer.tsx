import * as dateFns from "date-fns";
import { useCallback, useEffect, useState } from "react";
import { useHourMinuteSecondState } from "../../hooks/useHourMinuteSecondState";
import { useInterval } from "../../hooks/useInterval";
import { useApp } from "../../contexts/appContext";
import { Values } from "../CountDown/CountDown";

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
  const { setHour, setMinute, setSecond, calcAsTimer } =
    useHourMinuteSecondState({
      h: Number(values.h),
      m: Number(values.m),
      s: Number(values.s),
    });
  const [counter, setCounter] = useState(0);
  const { start, stop, active } = useInterval({
    onUpdate: () => setCounter(counter - 1),
  });
  const [text, setText] = useState(values.text);
  const [endDate, setEndDate] = useState<Date>();
  const { notice } = useApp();

  const _setText = useCallback((value: string) => {
    localStorage.setItem("notice_text", value);
    setText(value);
  }, []);

  useEffect(() => {
    if (counter <= 0) {
      if (active) {
        notice(text);
      }
      stop();
    }
  }, [active, counter, notice, text, stop]);

  const onSubmit = useCallback(
    (e) => {
      const { seconds } = calcAsTimer();
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
    [calcAsTimer, start]
  );

  const restart = useCallback(() => {
    const { seconds } = calcAsTimer();
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
  }, [calcAsTimer, counter, start]);

  const reset = useCallback(() => {
    const { seconds } = calcAsTimer();
    const endDate = calculateEndDate(seconds);

    setEndDate(endDate);
    setCounter(seconds);
    stop();
  }, [calcAsTimer, stop]);

  return {
    values,
    setHour,
    setMinute,
    setSecond,
    setText: _setText,
    onSubmit,
    counter,
    stop,
    active,
    restart,
    reset,
    endDate,
  };
};
