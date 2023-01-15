import { useRef, useState } from 'react';

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

  const mins = ~~(duration / 60);
  const secs = duration - mins * 60;
  const extSecs = ('0' + secs).slice(-2);

  return {
    onStart,
    onStop,
    isRunning,
    mins: String(mins),
    secs: extSecs,
  };
};
