import { useTheme } from "@emotion/react";
import { Button } from "../Button/Button";
import { Counter } from "../Counter/Counter";
import { InputNumber } from "../InputNumber/InputNumber";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { InputText } from "../InputText/InputText";

export type Values = {
  h: number | string;
  m: number | string;
  s: number | string;
  text: string;
};

type InputNumberOption = {
  type: "h" | "m" | "s";
  unit: string;
  max: number;
  onChange: (v: number) => void;
};

type Props = {
  values: Values;
  setHour: (v: number) => void;
  setMinute: (v: number) => void;
  setSecond: (v: number) => void;
  onSubmit: (e: any) => void;
  counter: number;
  pause: () => void;
  stop?: () => void;
  state: string;
  reset?: () => void;
  restart: () => void;
  endDate?: Date;
  setText: (v: string) => void;
  errorMessage?: string;
};

export const CountDown = ({
  values,
  setHour,
  setMinute,
  setSecond,
  onSubmit,
  counter,
  pause,
  stop,
  state,
  reset,
  restart,
  endDate,
  setText,
  errorMessage,
}: Props) => {
  const theme = useTheme();
  const inputNumberOptions = [
    {
      type: "h",
      unit: "時",
      max: 99,
      onChange: (value: number) => setHour(value),
    },
    {
      type: "m",
      unit: "分",
      max: 59,
      onChange: (value: number) => setMinute(value),
    },
    {
      type: "s",
      unit: "秒",
      max: 59,
      onChange: (value: number) => setSecond(value),
    },
  ] as InputNumberOption[];
  return (
    <div>
      <div>
        <form onSubmit={onSubmit}>
          <input type="submit" css={{ display: "none" }} />

          <div
            css={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: 380,
            }}
          >
            <div
              css={{
                display: state === "stop" ? "flex" : "none",
                flexDirection: "column",
                width: "100%",
              }}
            >
              <div
                css={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                {inputNumberOptions.map((v, i) => {
                  return (
                    <div
                      key={i}
                      css={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "30%",
                        position: "relative",
                      }}
                    >
                      <InputNumber
                        value={values[v.type]}
                        max={v.max}
                        maxLength={2}
                        placeholder={v.type}
                        onChange={v.onChange}
                      />
                      <div
                        css={{
                          marginLeft: "1em",
                        }}
                      >
                        {v.unit}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div
                css={{
                  marginTop: 70,
                  width: "100%",
                }}
              >
                <InputText
                  value={values.text}
                  onChange={(value) => setText(value)}
                />
              </div>
            </div>
            <div
              css={{
                display: state !== "stop" ? "flex" : "none",
              }}
            >
              <Counter seconds={counter} state={state} endDate={endDate} />
            </div>
          </div>

          <div
            css={{
              display: "flex",
              justifyContent: "space-around",
              height: 160,
            }}
          >
            {state !== "stop" && reset && (
              <div
                css={{
                  width: "10em",
                }}
              >
                <Button type={"button"} onClick={reset}>
                  <FontAwesomeIcon
                    icon="arrow-rotate-left"
                    style={{ color: theme.palette.text.icon }}
                  />
                  <span css={{ marginLeft: ".6em" }}>リセット</span>
                </Button>
              </div>
            )}

            <div
              css={{
                width: "10em",
              }}
            >
              <Button
                type="button"
                onClick={state !== "play" ? restart : pause}
              >
                <div css={{ width: "100%" }}>
                  <FontAwesomeIcon
                    icon={state !== "play" ? "play" : "pause"}
                    style={{ color: theme.palette.text.icon }}
                  />
                  <span css={{ marginLeft: "0.6em" }}>
                    {{ play: "一時停止", stop: "開始", pause: "再開" }[state]}
                  </span>
                </div>
              </Button>
            </div>

            {state !== "stop" && stop && (
              <div
                css={{
                  width: "10em",
                }}
              >
                <Button type={"button"} onClick={stop}>
                  <FontAwesomeIcon
                    icon="stop"
                    style={{ color: theme.palette.text.icon }}
                  />
                  <span css={{ marginLeft: ".6em" }}>停止</span>
                </Button>
              </div>
            )}
          </div>
          {errorMessage && (
            <div
              css={(theme) => ({
                marginTop: 40,
                color: theme.palette.error.main,
                textAlign: "center",
              })}
            >
              {errorMessage}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};
