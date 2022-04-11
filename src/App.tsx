import "./index.css";
import { NowTime } from "./components/NowTime/NowTime";
import { Timer } from "./components/Timer/Timer";

function App() {
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
        }}
      >
        <Timer />
      </div>
    </div>
  );
}

export default App;
