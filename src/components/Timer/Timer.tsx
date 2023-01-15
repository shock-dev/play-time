import styles from './timer.module.scss';
import { Button } from '../Button';
import { useTimer } from '../../hooks/useTimer';

export const Timer = () => {
  const { hrs, mins, secs, isRunning, onStart, onStop, onReset } = useTimer();

  return (
    <>
      <p className={styles.timer}>
        {hrs}
        <span>h</span>
        {mins}
        <span>m</span>
        {secs}
        <span>s</span>
      </p>
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
