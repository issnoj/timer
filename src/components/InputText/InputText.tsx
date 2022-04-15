import { useInputText } from "./useInputText";

type Props = {
  value: string;
  onChange: (value: string) => void;
};

export const InputText = ({ value: defaultValue, onChange }: Props) => {
  const { value, _onChange } = useInputText({
    defaultValue,
    onChange,
  });

  return (
    <input
      type="text"
      autoComplete="off"
      spellCheck={false}
      placeholder={"通知メッセージ or URL"}
      value={value}
      onChange={_onChange}
      css={{
        fontFamily: "Nunito, sans-serif",
        fontSize: "18px",
        width: "100%",
        userSelect: "text",
        cursor: "text",
        outline: 0,
        padding: 8,
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
