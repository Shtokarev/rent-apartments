import React from 'react';
import { NextWebVitalsMetric } from 'next/app';
import Head from 'next/head';

import { LayoutComponent } from '@app/types';
import { getBaseLayout } from '@app/layouts';
import '../styles/minireset.scss';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function MyApp({ Component, pageProps }) {
  const getLayout = (Component as LayoutComponent).getLayout || getBaseLayout;

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
        />
      </Head>
      {getLayout(<Component {...pageProps} />)}
    </>
  );
}

export const reportWebVitals = (metric: NextWebVitalsMetric): void => {
  const { id, name, value, label, startTime } = metric;
};

export default MyApp;
