import { useEffect, useState } from 'react';
import Time from '../utils/Time';

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

  return {
    ...Time.getTimeFromSeconds(duration),
    isRunning,
    onStart,
    onStop,
    onReset,
  };
};
