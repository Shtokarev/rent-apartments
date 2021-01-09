import React from 'react';

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string | { href: string; as: string };
  shallow?: boolean;
}
