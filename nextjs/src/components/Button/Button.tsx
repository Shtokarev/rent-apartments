import React from 'react';
import cn from 'classnames';

import Spinner from '@app/components/Spinner';
import { ButtonProps } from './Button.types';

import styles from './Button.module.scss';

export const Button: React.FC<ButtonProps> = (props) => {
  const { children, isLoading = false, glow = false, ...restProps } = props;

  return (
    <button className={cn(styles.button, { [styles.glowButton]: glow })} {...restProps}>
      {isLoading ? <Spinner size={24} color="secondary" /> : children}
    </button>
  );
};

export default Button;
