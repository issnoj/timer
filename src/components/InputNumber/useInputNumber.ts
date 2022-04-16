import { useCallback, useRef, useState } from "react";

type Props = {
  defaultValue: number | string;
  onChange: (v: number) => void;
  max: number;
};

export const useInputNumber = ({ defaultValue, onChange, max }: Props) => {
  const [value, setValue] = useState(defaultValue);
  const ref = useRef<HTMLInputElement>(null);

  const onKeyPress = useCallback((e) => {
    if (!/[0-9]/.test(e.key) && e.key !== "Enter") {
      e.preventDefault();
    }
  }, []);

  const _onChange = useCallback(
    (e) => {
      let newValue = e.target.value;
      if (Number(newValue) < 0) {
        newValue = max;
      } else if (Number(newValue) === max + 1) {
        newValue = 0;
      } else {
        newValue = newValue.replace(/[^0-9]/g, "").slice(-2);
        if (Number(newValue) > max + 1) {
          newValue = e.target.value.slice(-1);
        }
      }
      setValue(newValue);
      onChange(Number(newValue));
    },
    [max, onChange]
  );

  const onMouseOver = () => {
    if (ref && ref.current) {
      ref.current.focus();
    }
  };

  return {
    value,
    onKeyPress,
    _onChange,
    ref,
    onMouseOver,
  };
};
