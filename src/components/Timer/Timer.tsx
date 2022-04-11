import { Button } from "../Button/Button";
import { Counter } from "../Counter/Counter";
import { InputNumberBox } from "./InputNumberBox";
import { useTimer } from "./useTimer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Timer = () => {
  const {
    values,
    dispatchTimer,
    onSubmit,
    counter,
    stop,
    active,
    reset,
    restart,
  } = useTimer();

  return (
    <div
      css={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        css={{
          fontSize: "3rem",
        }}
      >
        <form onSubmit={onSubmit}>
          <input type="submit" css={{ display: "none" }} />
          <div
            css={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "1rem",
            }}
          >
            <InputNumberBox
              value={values.h}
              placeholder="h"
              unit="時"
              onChange={(value) => dispatchTimer({ type: "h", value })}
            />
            <InputNumberBox
              value={values.m}
              placeholder="m"
              unit="分"
              onChange={(value) => dispatchTimer({ type: "m", value })}
            />
            <InputNumberBox
              value={values.s}
              placeholder="s"
              unit="秒"
              onChange={(value) => dispatchTimer({ type: "s", value })}
            />
          </div>

          <div
            css={{
              borderTop: "1px solid #707070",
              display: "flex",
              alignItems: "center",
              height: 220,
              fontSize: "2rem",
            }}
          >
            <div
              css={{
                width: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div css={{ display: active ? "none" : "inline-block" }}>
                <Button type="button" onClick={restart}>
                  <FontAwesomeIcon icon="play" style={{ color: "#707070" }} />
                  <span css={{ marginLeft: "0.6em" }}>開始</span>
                </Button>
              </div>
              <div css={{ display: !active ? "none" : "inline-block" }}>
                <Button type="button" onClick={stop}>
                  <FontAwesomeIcon icon="pause" style={{ color: "#707070" }} />
                  <span css={{ marginLeft: ".6em" }}>一時停止</span>
                </Button>
              </div>
            </div>

            <div
              css={{
                width: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div>
                <Button type={"button"} onClick={reset}>
                  <FontAwesomeIcon
                    icon="arrow-rotate-left"
                    style={{ color: "#707070" }}
                  />
                  <span css={{ marginLeft: ".6em" }}>リセット</span>
                </Button>
              </div>
            </div>
          </div>
        </form>
      </div>

      <div
        css={{
          borderTop: "1px solid #707070",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Counter seconds={counter} active={active} />
      </div>
    </div>
  );
};
