import { CountDown } from "../CountDown/CountDown";
import { useAlarm } from "./useAlarm";

export const Alarm = () => {
  const {
    values,
    dispatch,
    onSubmit,
    counter,
    stop,
    active,
    restart,
    endDate,
  } = useAlarm();

  return (
    <CountDown
      values={values}
      dispatch={dispatch}
      onSubmit={onSubmit}
      counter={counter}
      stop={stop}
      active={active}
      restart={restart}
      endDate={endDate}
    />
  );
};
