import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export const useRouteLoading = (): Readonly<{ isLoading: boolean }> => {
  const router = useRouter();
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = (url: string): void => {
      const isSamePage = router.asPath.replace(/\?.+$/, '') === url;

      return !isSamePage && setLoading(true);
    };

    const handleComplete = (): void => setLoading(false);

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return (): void => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  });

  return {
    isLoading,
  };
};
