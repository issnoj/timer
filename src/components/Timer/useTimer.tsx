import * as dateFns from "date-fns";
import { useCallback, useEffect, useState } from "react";
import {
  format,
  useHourMinuteSecondState,
} from "../../hooks/useHourMinuteSecondState";
import { useInterval } from "../../hooks/useInterval";
import { useApp } from "../../contexts/appContext";
import { Values } from "../CountDown/CountDown";

const calculateEndDate = (counter: number) => {
  return dateFns.addSeconds(new Date(), counter);
};

export const useTimer = () => {
  const { notice, title, setTitle } = useApp();
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
  const { start, pause, stop, state } = useInterval({
    onUpdate: () => {
      const newCounter = Math.max(counter - 1, 0);
      setCounter(newCounter);
      setTitle("▶ " + format(newCounter));
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
      if (state === "play") {
        notice(text);
      }
      stop();
      setTitle();
    }
  }, [state, counter, notice, text, stop, setTitle]);

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

  const _start = useCallback(() => {
    const { seconds } = calcAsTimer();
    const endDate = calculateEndDate(seconds);

    if (!seconds) {
      return;
    }

    setEndDate(endDate);
    setCounter(seconds);
    start();
  }, [calcAsTimer, start]);

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

  const _stop = useCallback(() => {
    const { seconds } = calcAsTimer();
    const endDate = calculateEndDate(seconds);

    setEndDate(endDate);
    setCounter(seconds);
    stop();
    setTitle();
  }, [calcAsTimer, setTitle, stop]);

  const reset = useCallback(() => {
    const { seconds } = calcAsTimer();
    const endDate = calculateEndDate(seconds);

    setEndDate(endDate);
    setCounter(seconds);
    pause();
    setTitle();
  }, [calcAsTimer, pause, setTitle]);

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
    start: _start,
    pause: _pause,
    stop: _stop,
    state,
    restart,
    reset,
    endDate,
  };
};
