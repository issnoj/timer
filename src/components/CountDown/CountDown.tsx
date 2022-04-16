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
  stop: () => void;
  active: boolean;
  reset?: () => void;
  restart: () => void;
  endDate?: Date;
  setText: (v: string) => void;
};

export const CountDown = ({
  values,
  setHour,
  setMinute,
  setSecond,
  onSubmit,
  counter,
  stop,
  active,
  reset,
  restart,
  endDate,
  setText,
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
            }}
          >
            {inputNumberOptions.map((v) => {
              return (
                <div
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
                    min={0}
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
              marginTop: 32,
            }}
          >
            <InputText
              value={values.text}
              onChange={(value) => setText(value)}
            />
          </div>

          <div
            css={{
              marginTop: 16,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
              height: 100,
            }}
          >
            <div
              css={{
                width: "10em",
              }}
            >
              {!active ? (
                <Button type="button" onClick={restart}>
                  <div css={{ width: "100%" }}>
                    <FontAwesomeIcon
                      icon="play"
                      style={{ color: theme.palette.text.icon }}
                    />
                    <span css={{ marginLeft: "0.6em" }}>開始</span>
                  </div>
                </Button>
              ) : (
                <Button type="button" onClick={stop}>
                  <div css={{ width: "100%" }}>
                    <FontAwesomeIcon
                      icon="pause"
                      style={{ color: theme.palette.text.icon }}
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
          </div>
        </form>
      </div>

      <div
        css={{
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
