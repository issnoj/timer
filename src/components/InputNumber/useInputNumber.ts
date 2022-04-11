import { useCallback, useState } from "react";

type Props = {
  defaultValue: number | string;
  onChange: (v: number) => void;
};

export const useInputNumber = ({ defaultValue, onChange }: Props) => {
  const [value, setValue] = useState(defaultValue);

  const onKeyPress = useCallback((e) => {
    if (!/[0-9]/.test(e.key) && e.key !== "Enter") {
      e.preventDefault();
    }
  }, []);

  const _onChange = useCallback(
    (e) => {
      const newValue = e.target.value.replace(/[^0-9]/g, "").slice(-2);
      setValue(newValue);
      onChange(Number(newValue));
    },
    [onChange]
  );

  return {
    value,
    onKeyPress,
    _onChange,
  };
};
