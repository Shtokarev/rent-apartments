import React, { useRef, useState, useEffect, useMemo, useCallback } from 'react';
import { useRouter } from 'next/router';

import { NavMenuItem } from './Navigation.types';
import NavigationItem from './NavigationItem';
import styles from './Navigation.module.scss';

interface NavigationProps {
  menuItems: NavMenuItem[];
}

const Navigation: React.FC<NavigationProps> = ({ menuItems }) => {
  const navigationEl = useRef(null);

  const { asPath } = useRouter();

  const [activeUrl, setActiveUrl] = useState(asPath);
  const [activeMetrics, setActiveMetrics] = useState<HTMLLinkElement>({} as HTMLLinkElement);

  useEffect(() => {
    if (activeUrl !== asPath) {
      setActiveUrl(asPath);
    }
  }, [activeUrl, asPath]);

  const menuItemsWithSelected = useMemo(
    () =>
      menuItems?.map((menuItem) => {
        const isActive =
          typeof menuItem.link.to === 'string'
            ? activeUrl === menuItem.link.to
            : activeUrl === menuItem.link.to.as;

        return {
          ...menuItem,
          isActive,
        };
      }),
    [activeUrl, menuItems],
  );

  const handleItemChange = () => {
    /*-- no empty --*/
  };

  const handleSetElMetrics = useCallback(
    (menuElement: HTMLLinkElement | null, isActive: boolean) => {
      let element: HTMLLinkElement;

      if (isActive) {
        setActiveMetrics(menuElement);
      }

      if (menuElement) {
        element = menuElement;
      } else {
        element = activeMetrics;
      }

      const { offsetLeft, clientWidth } = element;

      navigationEl.current.style.setProperty('--underline-left', `${offsetLeft + 8}px`);
      navigationEl.current.style.setProperty('--underline-width', `${clientWidth - 16}px`);
    },
    [activeMetrics],
  );

  return (
    <nav className={styles.navigation} ref={navigationEl}>
      {menuItemsWithSelected.map((menuItem, index) => (
        <NavigationItem
          key={index}
          onItemChange={handleItemChange}
          setElMetrics={handleSetElMetrics}
          {...menuItem}
        />
      ))}
      <div className={styles.navigationUnderline} />
    </nav>
  );
};

export default Navigation;
