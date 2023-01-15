import { useRef, useState } from 'react';
import Time from '../utils/Time';

export const useStopwatch = () => {
  const [duration, setDuration] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const stopwatchRef = useRef<NodeJS.Timeout | undefined>();

  const onStart = () => {
    setIsRunning(true);
    stopwatchRef.current = setInterval(() => {
      setDuration(prev => prev + 1);
    }, 1000);
  };

  const onStop = () => {
    clearInterval(stopwatchRef.current);
    setIsRunning(false);
  };

  const onReset = () => {
    onStop();
    setDuration(0);
  };

  return {
    ...Time.getTimeFromSeconds(duration),
    isRunning,
    onStart,
    onStop,
    onReset,
  };
};
