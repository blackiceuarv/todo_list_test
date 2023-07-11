import { FC, ReactElement, ReactNode } from 'react';
import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { BaseLayout } from '@/common/layouts';
import { ToastContainer } from 'react-toastify';

import 'normalize.css/normalize.css';
import '@/common/styles/main.scss';

import { RootProvider } from '@/common/context';

export type INextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type IAppWithLayoutProps = AppProps & {
  Component: INextPageWithLayout;
};

const App: FC<AppProps> = ({ Component, pageProps }: IAppWithLayoutProps) => {
  const renderLayout =
    Component.getLayout ||
    function (page) {
      return <BaseLayout>{page}</BaseLayout>;
    };

  return (
    <>
      <RootProvider {...{ pageProps }}>
        <ToastContainer />
        {renderLayout(<Component {...pageProps} />)}
      </RootProvider>
    </>
  );
};

export default App;
