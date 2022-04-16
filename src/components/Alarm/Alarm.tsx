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
    stop,
    active,
    restart,
    endDate,
    setText,
  } = useAlarm();

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
      restart={restart}
      endDate={endDate}
      setText={setText}
    />
  );
};
