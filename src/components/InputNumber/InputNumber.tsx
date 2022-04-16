import { useInputNumber } from "./useInputNumber";

type Props = {
  value: number | string;
  min: number;
  max: number;
  maxLength: number;
  placeholder: string;
  onChange: (value: number) => void;
};

export const InputNumber = ({
  value: defaultValue,
  min,
  max,
  maxLength,
  placeholder,
  onChange,
}: Props) => {
  const { value, onKeyPress, _onChange, ref, onMouseOver } = useInputNumber({
    defaultValue,
    onChange,
    max,
  });

  return (
    <input
      ref={ref}
      type="number"
      autoComplete="off"
      spellCheck={false}
      size={2}
      maxLength={maxLength}
      placeholder={placeholder}
      value={value}
      onKeyPress={onKeyPress}
      onChange={_onChange}
      onMouseOver={onMouseOver}
      css={{
        fontFamily: "Nunito, sans-serif",
        fontSize: "2.5em",
        width: "2em",
        userSelect: "text",
        cursor: "text",
        outline: 0,
        padding: 0,
        border: 0,
        textAlign: "center",
        backgroundColor: "#ffffff",
        transition: "all 150ms",
        "&:hover, &:focus": {
          backgroundColor: "#ffffff",
        },
        "&::-webkit-outer-spin-button, &::-webkit-inner-spin-button": {
          "-webkit-appearance": "none",
          "-moz-appearance": "textfield",
          margin: 0,
        },
      }}
    />
  );
};
