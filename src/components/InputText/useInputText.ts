import { useCallback, useState } from "react";

type Props = {
  defaultValue: string;
  onChange: (v: string) => void;
};

export const useInputText = ({ defaultValue, onChange }: Props) => {
  const [value, setValue] = useState(defaultValue);

  const _onChange = useCallback(
    (e) => {
      const newValue = e.target.value;
      setValue(newValue);
      onChange(newValue);
    },
    [onChange]
  );

  return {
    value,
    _onChange,
  };
};
