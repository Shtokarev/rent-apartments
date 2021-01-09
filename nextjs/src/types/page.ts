import { NextComponentType, NextPage } from 'next';

// eslint-disable-next-line @typescript-eslint/ban-types
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout: (jsx: JSX.Element) => JSX.Element;
};

export type LayoutComponent = NextComponentType & {
  getLayout?: (jsx: JSX.Element) => JSX.Element;
};
