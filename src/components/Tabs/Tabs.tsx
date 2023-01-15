import cc from 'classcat';
import styles from './tabs.module.scss';
import { FC } from 'react';

interface TabsProps {
  items: string[];
  activeTab: number;
  onToggle: (index: number) => void;
}

export const Tabs: FC<TabsProps> = ({ items, activeTab, onToggle }) => {
  return (
    <div className={styles.wrapper}>
      {items.map((tab, idx) => (
        <button
          key={tab}
          className={cc([styles.item, { [styles.active]: idx === activeTab }])}
          onClick={() => onToggle(idx)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};
