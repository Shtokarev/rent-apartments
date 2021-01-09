import React, { createContext, useContext, useState, useEffect } from 'react';
import { UserAgent } from '@app/types';
import { getUserAgent } from '@utils';

type Device = Readonly<{
  isDesktop: boolean;
  isTablet: boolean;
  isMobile: boolean;
}>;

type OS = Readonly<{
  isIOS: boolean;
  isAndroid: boolean;
}>;

interface UserAgentContextState {
  readonly device: Device;
  readonly os: OS;
  readonly userAgent: UserAgent;
}

export const UserAgentContext = createContext<UserAgentContextState>({} as UserAgentContextState);

export const UserAgentProvider: React.FC = ({ children }) => {
  const [userAgent, setUserAgent] = useState<UserAgent>();

  useEffect(() => {
    const userAgentString = window.navigator.userAgent;

    getUserAgent(userAgentString)
      .then((ua) => setUserAgent(ua))
      .catch();
  }, []);

  const isMobile = userAgent?.device?.type === 'mobile';
  const isTablet = userAgent?.device?.type === 'tablet';
  const isDesktop = !isMobile && !isTablet;

  const isIOS = userAgent?.os?.name === 'iOS';
  const isAndroid = userAgent?.os?.name === 'Android';

  const context = {
    device: {
      isMobile,
      isTablet,
      isDesktop,
    },
    os: {
      isIOS,
      isAndroid,
    },
    userAgent,
  };

  return <UserAgentContext.Provider value={context}>{children}</UserAgentContext.Provider>;
};

export const useUserAgentContext = (): UserAgentContextState => useContext(UserAgentContext);
