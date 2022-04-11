import { useCallback, useEffect, useRef, useState } from "react";

type Props = {
  onUpdate: () => void;
};

let timerId: NodeJS.Timer;

export const useInterval = ({ onUpdate }: Props) => {
  const [active, setActive] = useState(false);
  const onUpdateRef = useRef<() => void>(() => {});

  useEffect(() => {
    onUpdateRef.current = onUpdate;
  }, [onUpdate]);

  useEffect(() => {
    timerId && clearInterval(timerId);
    if (active) {
      timerId = setInterval(() => {
        onUpdateRef.current();
      }, 1000);
    }
    return () => clearInterval(timerId);
  }, [active]);

  const start = useCallback(() => {
    setActive(true);
  }, []);

  const stop = useCallback(() => {
    setActive(false);
  }, []);

  return {
    start,
    stop,
    active,
  };
};
