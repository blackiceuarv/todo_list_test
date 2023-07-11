import { ModalProvider } from '@/common/hooks';
import { FC, ReactNode } from 'react';

import { QueryClient, QueryClientProvider } from 'react-query';

export const queryClient = new QueryClient();

export const RootProvider: FC<{
  children: ReactNode;
  pageProps: Record<string, any>;
}> = ({ children, pageProps }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ModalProvider>{children}</ModalProvider>
    </QueryClientProvider>
  );
};
