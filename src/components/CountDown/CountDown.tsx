import { Button } from "../Button/Button";
import { Counter } from "../Counter/Counter";
import { InputNumberBox } from "../InputNumberBox/InputNumberBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { InputText } from "../InputText/InputText";

export type Values = {
  h: number | string;
  m: number | string;
  s: number | string;
  text: string;
};

export type DispatchArgument =
  | {
      type: "h" | "m" | "s";
      value: number;
    }
  | {
      type: "text";
      value: string;
    };

type Props = {
  values: Values;
  dispatch: (o: DispatchArgument) => void;
  onSubmit: (e: any) => void;
  counter: number;
  stop: () => void;
  active: boolean;
  reset?: () => void;
  restart: () => void;
  endDate?: Date;
};

export const CountDown = ({
  values,
  dispatch,
  onSubmit,
  counter,
  stop,
  active,
  reset,
  restart,
  endDate,
}: Props) => {
  return (
    <div
      css={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        css={{
          fontSize: "2.5rem",
        }}
      >
        <form onSubmit={onSubmit}>
          <input type="submit" css={{ display: "none" }} />
          <div
            css={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <InputNumberBox
              value={values.h}
              placeholder="h"
              unit="時"
              onChange={(value) => dispatch({ type: "h", value })}
            />
            <InputNumberBox
              value={values.m}
              placeholder="m"
              unit="分"
              onChange={(value) => dispatch({ type: "m", value })}
            />
            <InputNumberBox
              value={values.s}
              placeholder="s"
              unit="秒"
              onChange={(value) => dispatch({ type: "s", value })}
            />
          </div>

          <InputText
            value={values.text}
            onChange={(value) => dispatch({ type: "text", value })}
          />

          <div
            css={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
              height: 160,
              fontSize: "1.5rem",
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
              {!active ? (
                <Button type="button" onClick={restart}>
                  <div css={{ width: "100%" }}>
                    <FontAwesomeIcon icon="play" style={{ color: "#707070" }} />
                    <span css={{ marginLeft: "0.6em" }}>開始</span>
                  </div>
                </Button>
              ) : (
                <Button type="button" onClick={stop}>
                  <div css={{ width: "100%" }}>
                    <FontAwesomeIcon
                      icon="pause"
                      style={{ color: "#707070" }}
                    />
                    <span css={{ marginLeft: ".6em" }}>一時停止</span>
                  </div>
                </Button>
              )}
            </div>

            {reset && (
              <div
                css={{
                  width: "10em",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Button type={"button"} onClick={reset}>
                  <FontAwesomeIcon
                    icon="arrow-rotate-left"
                    style={{ color: "#707070" }}
                  />
                  <span css={{ marginLeft: ".6em" }}>リセット</span>
                </Button>
              </div>
            )}
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
        <Counter seconds={counter} active={active} endDate={endDate} />
      </div>
    </div>
  );
};
