import { FC } from 'react';
import styles from './timepanel.module.scss';

interface TimePanelProps {
  hrs?: string;
  mins?: string;
  secs: string;
  onClick?: () => void;
}

export const TimePanel: FC<TimePanelProps> = ({
  hrs,
  mins,
  secs,
  onClick = () => {},
}) => {
  return (
    <p className={styles.timer} onClick={onClick}>
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
