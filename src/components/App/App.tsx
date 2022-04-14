import "../../index.css";
import { Alarm } from "../Alarm/Alarm";
import { NowTime } from "../NowTime/NowTime";
import { Switcher } from "../Switcher/Switcher";
import { Timer } from "../Timer/Timer";
import { useApp } from "./useApp";

function App() {
  const { timerType, setTimerType } = useApp();

  return (
    <div
      css={{
        display: "flex",
        flexDirection: "column",
        maxWidth: 900,
        minHeight: "100vh",
        margin: "0 auto",
        borderLeft: "1px solid #707070",
        borderRight: "1px solid #707070",
      }}
    >
      <NowTime />
      <div
        css={{
          borderTop: "1px solid #707070",
          fontSize: "1.5rem",
          paddingTop: "2rem",
        }}
      >
        <Switcher
          active={timerType}
          changeTimer={() => setTimerType("timer")}
          changeAlarm={() => setTimerType("alarm")}
        />
      </div>
      <div>
        {timerType === "timer" && <Timer />}
        {timerType === "alarm" && <Alarm />}
      </div>
    </div>
  );
}

export default App;
