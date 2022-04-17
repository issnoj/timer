import { useInputNumber } from "./useInputNumber";

type Props = {
  value: number | string;
  max: number;
  maxLength: number;
  placeholder: string;
  onChange: (value: number) => void;
};

export const InputNumber = ({
  value: defaultValue,
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
      css={(theme) => ({
        fontSize: theme.typography.h1.fontSize,
        width: "2em",
        height: "1.5em",
        userSelect: "text",
        cursor: "text",
        outline: 0,
        padding: 0,
        textAlign: "center",
        color: "currentColor",
        background: "none",
        transition: "all 150ms",
        border: `1px solid ${theme.palette.divider}`,
        "&:hover, &:focus": {
          border: `1px solid ${theme.palette.text.secondary}`,
        },
        "&::-webkit-outer-spin-button, &::-webkit-inner-spin-button": {
          WebkitAppearance: "none",
          margin: 0,
        },
      })}
    />
  );
};
