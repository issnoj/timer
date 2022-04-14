import "../../index.css";
import { Alarm } from "../../components/Alarm/Alarm";
import { NowTime } from "../../components/NowTime/NowTime";
import { Switcher } from "../../components/Switcher/Switcher";
import { Timer } from "../../components/Timer/Timer";
import { AppProvider } from "../../contexts/appContext";
import { useHome } from "./useHome";

export const Home = () => {
  const { state, setState } = useHome();

  return (
    <AppProvider>
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
            active={state}
            changeTimer={() => setState("timer")}
            changeAlarm={() => setState("alarm")}
          />
        </div>
        <div>
          {state === "timer" && <Timer />}
          {state === "alarm" && <Alarm />}
        </div>
      </div>
    </AppProvider>
  );
};

export default Home;
