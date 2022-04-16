import { InputNumber } from "../InputNumber/InputNumber";

type Props = {
  value: number | string;
  placeholder: string;
  unit: string;
  onChange: (v: number) => void;
  max: number;
};

export const InputNumberBox = ({
  value,
  placeholder,
  unit,
  onChange,
  max,
}: Props) => {
  return (
    <div
      css={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "30%",
        height: 220,
        position: "relative",
      }}
    >
      <InputNumber
        value={value}
        min={0}
        max={max}
        maxLength={2}
        placeholder={placeholder}
        onChange={onChange}
      />
      <div
        css={{
          marginLeft: "1em",
          fontSize: "16px",
        }}
      >
        {unit}
      </div>
    </div>
  );
};
