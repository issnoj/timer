import { CountDown } from "../CountDown/CountDown";
import { useTimer } from "./useTimer";

export const Timer = () => {
  const {
    values,
    setHour,
    setMinute,
    setSecond,
    onSubmit,
    counter,
    start,
    pause,
    stop,
    state,
    reset,
    restart,
    endDate,
    setText,
  } = useTimer();

  return (
    <CountDown
      values={values}
      setHour={setHour}
      setMinute={setMinute}
      setSecond={setSecond}
      onSubmit={onSubmit}
      counter={counter}
      start={start}
      pause={pause}
      stop={stop}
      state={state}
      reset={reset}
      restart={restart}
      endDate={endDate}
      setText={setText}
    />
  );
};
