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
        <h1 className="text-4xl text-center font-bold">
          Welcome to Next App!
        </h1>
      </main>

      <footer>
        <p className="text-xs text-center text-slate-500">

          Powered by{' '}
        </p>
      </footer>
    </div>
  );
};

export default Home;
