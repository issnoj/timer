import { useCallback, useEffect, useState } from "react";
import {
  format,
  useHourMinuteSecondState,
} from "../../hooks/useHourMinuteSecondState";
import { useInterval } from "../../hooks/useInterval";
import { useApp } from "../../contexts/appContext";
import { Values } from "../CountDown/CountDown";

export const useAlarm = () => {
  const { notice, setTitle } = useApp();
  const values: Values = {
    h: new Date().getHours() + 1,
    m: "00",
    s: "00",
    text: localStorage.getItem("notice_text") || "",
  };
  const { setHour, setMinute, setSecond, calcAsTime } =
    useHourMinuteSecondState({
      h: Number(values.h),
      m: Number(values.m),
      s: Number(values.s),
    });
  const [counter, setCounter] = useState(0);
  const { start, stop, active } = useInterval({
    onUpdate: () => {
      const newCounter = counter - 1;
      setCounter(newCounter);
      setTitle(format(newCounter));
    },
  });
  const [text, setText] = useState(values.text);
  const [endDate, setEndDate] = useState<Date>();

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
      setTitle();
    }
  }, [active, counter, notice, text, stop, setTitle]);

  const onSubmit = useCallback(
    (e) => {
      const { seconds, endDate } = calcAsTime();

      if (seconds <= 0) {
        e.preventDefault();
        return;
      }

      setEndDate(endDate);
      setCounter(seconds);
      start();
      e.preventDefault();
    },
    [calcAsTime, start]
  );

  const restart = useCallback(() => {
    const { seconds, endDate } = calcAsTime();

    if (seconds <= 0) {
      setCounter(0);
      stop();
      return;
    }

    setEndDate(endDate);
    setCounter(seconds);
    start();
  }, [calcAsTime, start, stop]);

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
    endDate,
  };
};
