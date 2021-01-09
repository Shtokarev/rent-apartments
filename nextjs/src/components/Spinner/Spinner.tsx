import React from 'react';
import { SpinnerProps } from './Spinner.types';
import styles from './Spinner.module.scss';

const Spinner: React.FC<SpinnerProps> = ({ size = 65 }) => (
  <svg className={styles.spinner} width={`${size}px`} height={`${size}px`} viewBox="0 0 66 66">
    <circle
      className={styles.circle}
      fill="none"
      strokeWidth="5"
      strokeLinecap="round"
      cx="33"
      cy="33"
      r="30"
    />
  </svg>
);

export default Spinner;
