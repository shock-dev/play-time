import { TimePanel } from '../TimePanel';
import styles from '../Timer/timer.module.scss';
import { Button } from '../Button';
import { useStopwatch } from '../../hooks/useStopwatch';

export const Stopwatch = () => {
  const { mins, secs, isRunning, onStart, onStop, onReset } = useStopwatch();

  const onToggle = () => {
    if (isRunning) onStop();
    else onStart();
  };

  return (
    <>
      <TimePanel mins={mins} secs={secs} onClick={onToggle} />
      <div className={styles.actions}>
        {isRunning ? (
          <Button onClick={onStop}>Stop</Button>
        ) : (
          <Button onClick={onStart}>Start</Button>
        )}
        <Button onClick={onReset}>Reset</Button>
      </div>
    </>
  );
};
