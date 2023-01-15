import { TimePanel } from '../TimePanel';
import styles from '../Timer/timer.module.scss';
import { Button } from '../Button';
import { useStopwatch } from '../../hooks/useStopwatch';

export const Stopwatch = () => {
  const { mins, secs, isRunning, onStart, onStop } = useStopwatch();
  return (
    <>
      <TimePanel mins={mins} secs={secs} />
      <div className={styles.actions}>
        {isRunning ? (
          <Button onClick={onStop}>Stop</Button>
        ) : (
          <Button onClick={onStart}>Start</Button>
        )}
      </div>
    </>
  );
};
