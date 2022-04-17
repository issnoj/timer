import { CountDown } from "../CountDown/CountDown";
import { useAlarm } from "./useAlarm";

export const Alarm = () => {
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
    restart,
    endDate,
    setText,
    errorMessage,
  } = useAlarm();

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
      restart={restart}
      endDate={endDate}
      setText={setText}
      errorMessage={errorMessage}
    />
  );
};
