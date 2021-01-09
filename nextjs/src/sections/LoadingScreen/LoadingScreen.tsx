import React from 'react';
import styles from './LoadingScreen.module.scss';
import Spinner from '@components/Spinner';

const LoadingScreen: React.FC = () => (
  <div className={styles.container}>
    <Spinner />
  </div>
);

export default LoadingScreen;
