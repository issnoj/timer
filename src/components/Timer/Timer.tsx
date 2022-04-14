import { CountDown } from "../CountDown/CountDown";
import { useTimer } from "./useTimer";

export const Timer = () => {
  const {
    values,
    dispatch,
    onSubmit,
    counter,
    stop,
    active,
    reset,
    restart,
    endDate,
  } = useTimer();

  return (
    <CountDown
      values={values}
      dispatch={dispatch}
      onSubmit={onSubmit}
      counter={counter}
      stop={stop}
      active={active}
      reset={reset}
      restart={restart}
      endDate={endDate}
    />
  );
};
