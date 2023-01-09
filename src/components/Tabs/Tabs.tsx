import cc from 'classcat';
import styles from './tabs.module.scss';

export const Tabs = () => (
  <div className={styles.wrapper}>
    <button className={cc([styles.item, styles.active])}>Timer</button>
    <button className={styles.item}>Stopwatch</button>
  </div>
);
