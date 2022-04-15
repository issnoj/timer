import { useCallback, useEffect, useRef, useState } from "react";

type Props = {
  onUpdate: () => void;
};

let stopSuperInterval: () => void;

const superInterval = (cb: Function, interval: number, ...args: any[]) => {
  try {
    const code = "onmessage=(e)=>{setInterval(()=>postMessage(null),e.data)}";
    const w = new Worker(`data:text/javascript;base64,${Buffer.from(code)}`);
    w.onmessage = () => cb(...args);
    w.postMessage(interval);
    return { stop: () => w.terminate() };
  } catch (_) {
    const id = setInterval(cb, interval, ...args);
    return { stop: () => clearInterval(id) };
  }
};

export const useInterval = ({ onUpdate }: Props) => {
  const [active, setActive] = useState(false);
  const onUpdateRef = useRef<() => void>(() => {});

  useEffect(() => {
    onUpdateRef.current = onUpdate;
  }, [onUpdate]);

  useEffect(() => {
    stopSuperInterval && stopSuperInterval();
    if (active) {
      stopSuperInterval = superInterval(() => {
        onUpdateRef.current();
      }, 1000).stop;
    }
    return () => stopSuperInterval && stopSuperInterval();
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
