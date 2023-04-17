import Head from 'next/head';
import styles from '../../styles/Home.module.css';

const Community = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>My Community Page</title>
        <meta name="description" content="My community page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to My Community Page</h1>

        <p className={styles.description}>
          This is where I'll share information about my community, events, and other related content.
        </p>
      </main>

      <footer className={styles.footer}>
        <p>
          Made with ❤️ by {/* Replace with your name */}
          {' '}
          <a href="https://github.com/yourusername">John Doe</a>
        </p>
      </footer>
    </div>
  );
};

export default Community;
