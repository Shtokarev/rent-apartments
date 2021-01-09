import React from 'react';
import Link from 'next/link';
import { LinkProps } from './Link.types';

const CustomLink = ({ to, shallow, ...props }: LinkProps, ref: any): JSX.Element => {
  if (typeof to === 'string') {
    return (
      <Link href={to} shallow={shallow || false}>
        <a {...props} ref={ref} />
      </Link>
    );
  }

  return (
    <Link href={to.href} as={to.as} shallow={shallow || false}>
      <a {...props} ref={ref} />
    </Link>
  );
};

export default React.forwardRef(CustomLink);
