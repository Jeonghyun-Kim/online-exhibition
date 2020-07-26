import React from 'react';
import App from 'next/app';

import '../styles/global.css';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      // eslint-disable-next-line react/jsx-props-no-spreading
      <Component {...pageProps} />
    );
  }
}

export default MyApp;
