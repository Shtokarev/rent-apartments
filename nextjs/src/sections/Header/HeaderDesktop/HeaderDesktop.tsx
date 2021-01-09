import React from 'react';
import cn from 'classnames';

import Logo from '@components/Logo';
import Navigation from './Havigation';

import { menuItemsContent } from '../Header.constants';
import styles from './HeaderDesktop.module.scss';

const HeaderDesktop: React.FC = () => (
  <div className={styles.headerWrapper}>
    <div className={cn(styles.headerWrapper, styles.header)}>
      <div className={styles.logo}>
        <Logo />
      </div>
      MENU HEADER DESKTOP
      <Navigation menuItems={menuItemsContent} />
    </div>
  </div>
);

export default HeaderDesktop;
