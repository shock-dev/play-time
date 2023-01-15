import { FC } from 'react';
import styles from './timepanel.module.scss';

interface TimePanelProps {
  hrs?: string;
  mins?: string;
  secs: string;
}

export const TimePanel: FC<TimePanelProps> = ({ hrs, mins, secs }) => {
  return (
    <p className={styles.timer}>
      {hrs && (
        <>
          {hrs}
          <span>h</span>
        </>
      )}
      {mins && (
        <>
          {mins}
          <span>m</span>
        </>
      )}
      {secs && (
        <>
          {secs}
          <span>s</span>
        </>
      )}
    </p>
  );
};
