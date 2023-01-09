import styles from './app.module.scss';
import { Timer } from '../Timer';
import { Tabs } from '../Tabs';

export const App = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.box}>
        <Tabs />
        <Timer />
      </div>
    </div>
  );
};
