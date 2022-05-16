import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Next App</title>
        <meta name="description" content="Next App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>
          Welcome to Next App!
        </h1>
      </main>

      <footer>
        Powered by{' '}
      </footer>
    </div>
  );
};

export default Home;
