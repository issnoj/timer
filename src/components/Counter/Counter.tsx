import * as dateFns from "date-fns";
import { format } from "../../hooks/useHourMinuteSecondState";

type Props = {
  seconds: number;
  state: string;
  endDate?: Date;
};

export const Counter = ({ seconds, state, endDate }: Props) => {
  return (
    <div
      css={{
        pointerEvents: "none",
        userSelect: "none",
        display: "flex",
        flexDirection: "column",
        opacity: state === "play" ? 1 : 0.5,
      }}
    >
      <div
        css={(theme) => ({
          textAlign: "center",
          fontSize: "9rem",
          color:
            state === "play"
              ? theme.palette.counter.running
              : theme.palette.text.secondary,
        })}
      >
        {format(seconds)}
      </div>

      {endDate && (
        <div
          css={(theme) => () => ({
            color: theme.palette.text.secondary,
            fontWeight: 300,
            fontSize: theme.typography.h4.fontSize,
            letterSpacing: "0.1em",
            textAlign: "center",
          })}
        >
          {dateFns.format(endDate, "yyyy/M/d HH:mm:ss")}
        </div>
      )}
    </div>
  );
};
