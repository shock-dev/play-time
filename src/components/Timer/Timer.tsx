import styles from './timer.module.scss';
import { Button } from '../Button';
import { useTimer } from '../../hooks/useTimer';
import { TimePanel } from '../TimePanel';

export const Timer = () => {
  const { hrs, mins, secs, isRunning, onStart, onStop, onReset } = useTimer();

  return (
    <>
      <TimePanel hrs={hrs} mins={mins} secs={secs} />
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
