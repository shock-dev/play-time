import { useEffect, useState } from 'react';

export const useTimer = (startDuration: number = 300) => {
  const [duration, setDuration] = useState(startDuration);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timerId: ReturnType<typeof setInterval>;

    if (isRunning) {
      timerId = setInterval(() => {
        setDuration(prev => prev - 1);
      }, 1000);
    }

    return () => {
      if (isRunning) {
        clearInterval(timerId);
      }
    };
  }, [isRunning]);

  const onStart = () => {
    setIsRunning(true);
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

  return { mins, secs: extSecs, hrs, isRunning, onStart, onStop, onReset };
};
