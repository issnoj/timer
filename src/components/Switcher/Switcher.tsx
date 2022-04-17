import { ButtonTab } from "../ButtonTab/ButtonTab";

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
        height: 100,
      }}
    >
      <ButtonTab
        onClick={changeTimer}
        state={active === "timer" ? "active" : "default"}
      >
        タイマー
      </ButtonTab>
      <ButtonTab
        onClick={changeAlarm}
        state={active === "alarm" ? "active" : "default"}
      >
        アラーム
      </ButtonTab>
    </div>
  );
};
