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
      css={(theme) => ({
        fontSize: theme.typography.body1.fontSize,
        width: "100%",
        height: 50,
        userSelect: "text",
        cursor: "text",
        outline: 0,
        textAlign: "center",
        color: "currentColor",
        background: "none",
        transition: "all 150ms",
        border: `1px solid ${theme.palette.divider}`,
        borderRight: 0,
        borderLeft: 0,
        "&:hover, &:focus": {
          border: `1px solid ${theme.palette.text.secondary}`,
        },
      })}
    />
  );
};
