import { Button } from "../Button/Button";

type Props = {
  active: string;
  changeTimer: () => void;
  changeAlarm: () => void;
};

export const Switcher = ({ active, changeTimer, changeAlarm }: Props) => {
  return (
    <div
      css={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <div
        css={{
          width: "10em",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Button
          type="button"
          onClick={changeTimer}
          state={active === "timer" ? "active" : "default"}
        >
          タイマー
        </Button>
      </div>
      <div
        css={{
          width: "10em",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Button
          type="button"
          onClick={changeAlarm}
          state={active === "alarm" ? "active" : "default"}
        >
          アラーム
        </Button>
      </div>
    </div>
  );
};
