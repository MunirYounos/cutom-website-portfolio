import React , {useEffect } from 'react';
import { ModalProvider } from '@faceless-ui/modal';
import { GridProvider } from '@faceless-ui/css-grid';
import type { AppProps } from 'next/app';
import useStyles from '../css/app';
import zIndex from '../css/zIndex';
import { WindowInfoProvider } from '@faceless-ui/window-info';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import breakpoints from '../css/breakpoints';
import { base } from '../css/base';
const MyApp = ({ Component, pageProps }: AppProps): React.ReactElement => {
  const classes = useStyles();
  useEffect(() => {
    const style = document.getElementById('server-side-styles');

    if (style) {
      style.parentNode.removeChild(style);
    }
  }, []);

return (
  <WindowInfoProvider breakpoints={breakpoints}>
    <ModalProvider zIndex={zIndex.modal}>
          <GridProvider
          rowGap={{
            s: base(2),
            m: base(2),
            l: base(2),
            xl: base(2),
          }}
          colGap={{
            s: base(2),
            m: base(2),
            l: base(2),
            xl: base(2),
          }}
          cols={{
            s: 8,
            m: 8,
            l: 12,
            xl: 12,
          }}
          >
        <div className={classes.app}>
          <Header/>
             <Component {...pageProps} />
        </div>
      </GridProvider>
    </ModalProvider>
  </WindowInfoProvider>
);
}
export default MyApp;
