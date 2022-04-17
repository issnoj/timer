import { useEffect, useState } from "react";
import * as dateFns from "date-fns";
import { Sekki, sekkis } from "../../sekkis";

let timerId: NodeJS.Timer;

const format = "yyyy/M/d HH:mm:ss";

export const useNowTime = () => {
  const [nowTime, setNowTime] = useState(dateFns.format(new Date(), format));
  const [sekki, setSekki] = useState<Sekki>();

  useEffect(() => {
    timerId = setInterval(() => {
      setNowTime(dateFns.format(new Date(), format));
      const sekki = sekkis.find((sekki) => {
        const start_m = Number(sekki.month);
        const start_d = Number(sekki.day);
        const now_m = new Date().getMonth() + 1;
        const now_d = new Date().getDate();

        if (start_m <= now_m && start_d <= now_d) {
          return true;
        }
      });
      if (sekki) {
        setSekki(sekki);
      }
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  return { nowTime, sekki };
};
