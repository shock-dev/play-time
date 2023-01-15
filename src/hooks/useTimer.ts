import { useEffect, useState } from 'react';

export const useTimer = (startDuration: number = 300) => {
  const [duration, setDuration] = useState(startDuration);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timerId: ReturnType<typeof setInterval>;

    if (isRunning && duration > 0) {
      timerId = setInterval(() => {
        setDuration(prev => {
          if (prev < 2) {
            setIsRunning(false);
            return 0;
          }

          return prev - 1;
        });
      }, 1000);
    }
    return () => {
      if (isRunning) {
        clearInterval(timerId);
      }
    };
  }, [isRunning]);

  const onStart = () => {
    if (duration > 0) setIsRunning(true);
  };

  const onStop = () => {
    setIsRunning(false);
  };

  const onReset = () => {
    setIsRunning(false);
    setDuration(startDuration);
  };

  const hrs = ~~(duration / 3600);
  const mins = ~~(duration / 60);
  const secs = duration - mins * 60;
  const extSecs = ('0' + secs).slice(-2);

  return {
    isRunning,
    onStart,
    onStop,
    onReset,
    hrs: String(hrs),
    mins: String(mins),
    secs: extSecs,
  };
};
