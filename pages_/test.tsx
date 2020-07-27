import React from 'react';
import Head from 'next/head';
// import Link from 'next/link';
import cn from 'classnames';

import styles from '../styles/test.module.scss';

const BACKGROUND_IMAGE_URL = '/images/background';

export default function Test() {
  return (
    <>
      <Head>
        <title>This is test page.</title>
      </Head>
      <div className={cn(styles.container)}>
        <picture>
          <img
            alt="background"
            src={`${BACKGROUND_IMAGE_URL}/smp_12.png`}
          />
        </picture>
      </div>
    </>
  );
}
