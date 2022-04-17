import { useCallback, useEffect, useState } from "react";
import {
  format,
  useHourMinuteSecondState,
} from "../../hooks/useHourMinuteSecondState";
import { useInterval } from "../../hooks/useInterval";
import { useApp } from "../../contexts/appContext";
import { Values } from "../CountDown/CountDown";

export const useAlarm = () => {
  const { notice, title, setTitle } = useApp();
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
  const { start, pause, stop, state } = useInterval({
    onUpdate: () => {
      const newCounter = counter - 1;
      setCounter(newCounter);
      setTitle("▶ " + format(newCounter));
    },
  });
  const [text, setText] = useState(values.text);
  const [endDate, setEndDate] = useState<Date>();
  const [errorMessage, setErrorMessage] = useState("");

  const _setText = useCallback((value: string) => {
    localStorage.setItem("notice_text", value);
    setText(value);
  }, []);

  useEffect(() => {
    if (counter <= 0) {
      if (state === "play") {
        notice(text);
      }
      stop();
      setTitle();
    }
  }, [state, counter, notice, text, stop, setTitle]);

  const onSubmit = useCallback(
    (e) => {
      const { seconds, endDate } = calcAsTime();

      if (seconds <= 0) {
        setErrorMessage("指定された時間は過ぎています。");
        e.preventDefault();
        return;
      }

      setErrorMessage("");
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
      setErrorMessage("指定された時間は過ぎています。");
      setCounter(0);
      stop();
      return;
    }

    setErrorMessage("");
    setEndDate(endDate);
    setCounter(seconds);
    start();
  }, [calcAsTime, start, stop]);

  const _pause = useCallback(() => {
    setTitle("⏸ " + title.replace(/[▶⏸\s]/, ""));
    pause();
  }, [pause, setTitle, title]);

  return {
    values,
    setHour,
    setMinute,
    setSecond,
    setText: _setText,
    onSubmit,
    counter,
    pause: _pause,
    stop,
    state,
    restart,
    endDate,
    errorMessage,
  };
};
