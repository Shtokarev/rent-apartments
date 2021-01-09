import React from 'react';
import Head from 'next/head';

import LoadingScreen from '@app/sections/LoadingScreen';
import Header from '@app/sections/Header';

import { UserAgentProvider } from '@app/contexts';
import { useRouteLoading } from '@hooks';

const BaseLayout: React.FC = ({ children }) => {
  const { isLoading: isRouteLoading } = useRouteLoading();

  return (
    <>
      <Head>
        <title>Rent Apartments in Taganrog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <UserAgentProvider>
        <Header />
        {isRouteLoading ? <LoadingScreen /> : children}
      </UserAgentProvider>
    </>
  );
};

export const getBaseLayout = (page: JSX.Element): JSX.Element => <BaseLayout>{page}</BaseLayout>;

export default BaseLayout;
