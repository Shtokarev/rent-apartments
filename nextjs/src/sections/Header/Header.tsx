import React from 'react';
import HeaderDesktop from './HeaderDesktop';
import { useUserAgentContext } from '@contexts';

import styles from './Header.module.scss';

const Header: React.FC = () => {
  const {
    device: { isDesktop },
  } = useUserAgentContext();

  return isDesktop ? (
    <HeaderDesktop />
  ) : (
    <div className={styles.headerWrapper}>TEST MENU mobile</div>
  );
};

export default Header;
