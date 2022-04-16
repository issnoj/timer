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
        css={(theme) => ({
          display: "flex",
          flexDirection: "column",
          maxWidth: 900,
          minHeight: "100vh",
          margin: "0 auto",
          borderLeft: `1px solid ${theme.palette.divider}`,
          borderRight: `1px solid ${theme.palette.divider}`,
        })}
      >
        <div
          css={(theme) => ({
            borderBottom: `1px solid ${theme.palette.divider}`,
          })}
        >
          <NowTime />
        </div>
        <div
          css={{
            marginTop: 16,
          }}
        >
          <Switcher
            active={state}
            changeTimer={() => setState("timer")}
            changeAlarm={() => setState("alarm")}
          />
        </div>
        <div
          css={{
            marginTop: 32,
          }}
        >
          {state === "timer" && <Timer />}
          {state === "alarm" && <Alarm />}
        </div>
      </div>
    </AppProvider>
  );
};

export default Home;
