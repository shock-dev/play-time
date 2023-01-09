import styles from './button.module.scss';
import { ComponentPropsWithRef } from 'react';

interface ButtonProps extends ComponentPropsWithRef<'button'> {}

export const Button = ({ children, onClick }: ButtonProps) => (
  <button className={styles.btn} onClick={onClick}>
    {children}
  </button>
);
