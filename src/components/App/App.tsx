import { useCallback, useState } from 'react';
import styles from './app.module.scss';
import { Timer } from '../Timer';
import { Tabs } from '../Tabs';
import { Stopwatch } from '../Stopwatch';

const tabs: string[] = ['timer', 'stopwatch'];

const tabsContent = [<Timer />, <Stopwatch />];

export const App = () => {
  const [activeTab, setActiveTab] = useState(0);

  const changeTabByIndex = useCallback((index: number) => {
    setActiveTab(index);
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.box}>
        <Tabs items={tabs} activeTab={activeTab} onToggle={changeTabByIndex} />
        {tabsContent[activeTab]}
      </div>
    </div>
  );
};
