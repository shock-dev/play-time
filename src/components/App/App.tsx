import { useCallback, useState } from 'react';
import styles from './app.module.scss';
import { Timer } from '../Timer';
import { Tabs } from '../Tabs';
import { Stopwatch } from '../Stopwatch';

const tabs: string[] = ['timer', 'stopwatch'];

const tabsContent = [<Timer />, <Stopwatch />];

const saveIndexToStorage = (id: number) => {
  localStorage.setItem('activeTab', String(id));
};

export const App = () => {
  const [activeTab, setActiveTab] = useState(
    localStorage.getItem('activeTab') || 0,
  );

  const changeTabByIndex = useCallback(
    (index: number) => {
      saveIndexToStorage(index);
      setActiveTab(index);
    },
    [activeTab],
  );

  return (
    <div className={styles.wrapper}>
      <div className={styles.box}>
        <Tabs items={tabs} activeTab={+activeTab} onToggle={changeTabByIndex} />
        {tabsContent[+activeTab]}
      </div>
    </div>
  );
};
