import { useCallback, useEffect, useRef, useState } from "react";

type State = "play" | "stop" | "pause";

type Props = {
  onUpdate: () => void;
};

let stopSuperInterval: () => void;

const superInterval = (cb: Function, interval: number, ...args: any[]) => {
  try {
    const code = "onmessage=(e)=>{setInterval(()=>postMessage(null),e.data)}";
    const w = new Worker(`data:text/javascript;base64,${window.btoa(code)}`);
    w.onmessage = () => cb(...args);
    w.postMessage(interval);
    return { stop: () => w.terminate() };
  } catch (_) {
    const id = setInterval(cb, interval, ...args);
    return { stop: () => clearInterval(id) };
  }
};

export const useInterval = ({ onUpdate }: Props) => {
  const [state, setState] = useState<State>("stop");
  const onUpdateRef = useRef<() => void>(() => {});

  useEffect(() => {
    onUpdateRef.current = onUpdate;
  }, [onUpdate]);

  useEffect(() => {
    stopSuperInterval && stopSuperInterval();
    if (state === "play") {
      stopSuperInterval = superInterval(() => {
        onUpdateRef.current();
      }, 1000).stop;
    }
    return () => stopSuperInterval && stopSuperInterval();
  }, [state]);

  const start = useCallback(() => {
    setState("play");
  }, []);

  const pause = useCallback(() => {
    setState("pause");
  }, []);

  const stop = useCallback(() => {
    setState("stop");
  }, []);

  return {
    start,
    pause,
    stop,
    state,
  };
};
