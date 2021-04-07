import React from 'react';
import Head from 'next/head';

import Layout from '../components/layout';
import Container from '../components/container';

import styles from './index.module.css';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
      </Container>
    </Layout>
  );
}
