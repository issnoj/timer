import * as dateFns from "date-fns";

type Props = {
  seconds: number;
  active: boolean;
};

const format = (seconds: number) => {
  const s = `0${seconds % 60}`.slice(-2);
  const m = `0${Math.floor((seconds % (60 * 60)) / 60)}`.slice(-2);
  const h = `0${Math.floor(seconds / (60 * 60))}`.slice(-2);
  return `${h}:${m}:${s}`;
};

export const Counter = ({ seconds, active }: Props) => {
  return (
    <div
      css={{
        display: "flex",
        flexDirection: "column",
        opacity: active ? 1 : 0.2,
      }}
    >
      <div
        css={{
          fontSize: "11rem",
        }}
      >
        {format(seconds)}
      </div>

      {active && (
        <div
          css={{
            color: "#707070",
            fontWeight: 300,
            fontSize: "2.8rem",
            letterSpacing: "0.1em",
            textAlign: "center",
          }}
        >
          {dateFns.format(
            dateFns.addSeconds(new Date(), seconds),
            "yyyy年M月d日 HH時mm分ss秒"
          )}
        </div>
      )}
    </div>
  );
};
