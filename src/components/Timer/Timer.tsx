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
    stop,
    active,
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
      stop={stop}
      active={active}
      reset={reset}
      restart={restart}
      endDate={endDate}
      setText={setText}
    />
  );
};
