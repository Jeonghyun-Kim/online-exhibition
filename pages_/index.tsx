import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { GetStaticProps } from 'next';
import useTranslation from 'next-translate/useTranslation';
import Router from 'next-translate/Router';

import Layout, { siteTitle } from '../components/layout';
import { getSortedPostsData } from '../lib/posts';
import Date from '../components/date';

export default function Home({ allPostsData }: {
  allPostsData: {
    date: string
    title: string
    id: string
  }[],
}) {
  const { t } = useTranslation();
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className="headingMd">
        <p>[Your Self Introduction Test]</p>
        <p>
          (This is a sample website - you’ll be building a site like this in{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className="headingMd padding1px">
        <h2 className="headingLg">Blog</h2>
        <ul className="list">
          {allPostsData.map(({ id, date, title }) => (
            <li className="listItem" key={id}>
              <Link href="/posts/[id]" as={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className="lightText">
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
      <div>
        <h1>Index</h1>
        <p>{t('common:hello')}</p>
        <button
          type="button"
          onClick={() => Router.pushI18n('/', undefined, { lang: 'en' })}
        >
          en
        </button>
        <button
          type="button"
          onClick={() => Router.pushI18n('/', undefined, { lang: 'ko' })}
        >
          ko
        </button>
      </div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};
