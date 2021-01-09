import React, { useEffect, useRef } from 'react';

import { NavMenuItem } from './Navigation.types';
import Link, { LinkProps } from '@components/Link';
import styles from './Navigation.module.scss';

interface NavigationItemProps extends NavMenuItem {
  readonly isActive: boolean;
  readonly onItemChange: (link: LinkProps) => void;
  readonly setElMetrics: (menuElement: HTMLLinkElement | null, isActive: boolean) => void;
}

const NavigationItem: React.FC<NavigationItemProps> = (props) => {
  const { isActive, link, name, title, onItemChange, setElMetrics } = props;

  const linkEl = useRef(null);

  useEffect(() => {
    if (isActive) {
      setElMetrics(linkEl.current, true);
    }
  }, [isActive, setElMetrics]);

  const handleClick = (event: React.SyntheticEvent): void => {
    onItemChange(link);

    // handleLinkClick(event);
  };

  const handleMouseEnter = () => !isActive && setElMetrics(linkEl.current, false);
  const handleMouseLeave = () => !isActive && setElMetrics(null, false);

  return (
    <Link
      ref={linkEl}
      title={title}
      className={styles.navigationItem}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...link}>
      {name}
    </Link>
  );
};

export default NavigationItem;
