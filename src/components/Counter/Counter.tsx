import * as dateFns from "date-fns";
import { format } from "../../hooks/useHourMinuteSecondState";

type Props = {
  seconds: number;
  active: boolean;
  endDate?: Date;
};

export const Counter = ({ seconds, active, endDate }: Props) => {
  return (
    <div
      css={{
        pointerEvents: "none",
        userSelect: "none",
        display: "flex",
        flexDirection: "column",
        opacity: active ? 1 : 0.2,
      }}
    >
      <div
        css={(theme) => ({
          fontSize: "11.5rem",
          color: active
            ? theme.palette.counter.running
            : theme.palette.text.secondary,
        })}
      >
        {format(seconds)}
      </div>

      {active && endDate && (
        <div
          css={(theme) => () => ({
            color: theme.palette.text.secondary,
            fontWeight: 300,
            fontSize: theme.typography.h3.fontSize,
            letterSpacing: "0.1em",
            textAlign: "center",
          })}
        >
          {dateFns.format(endDate, "yyyy年M月d日 HH時mm分ss秒")}
        </div>
      )}
    </div>
  );
};
