import React from 'react';
import { AppProps } from 'next/app';

import '../styles/global.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Component {...pageProps} />
  );
}
