import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Footer from "../components/home/Footer";
import Profile from "../components/home/Profile";

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>My Personal Website</title>
        <meta name="description" content="My personal website and portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to My Personal Website
        </h1>

        <Profile
          src={"/사원증사진.jpeg"}
          alt={"Profile Picture"}
          width={150}
          height={150}
        />

        <p className={styles.description}>
          Hi, I'm JongHyun Im! {/* Replace with your name */}
          <br />
          I'm a web developer, and this is my personal website.
        </p>

        <div className={styles.grid}>
          <a href="/video" className={styles.card}>
            <h2>Video Module &rarr;</h2>
            <p>Find me on Video</p>
          </a>

          <a href="https://github.com/yourusername" className={styles.card}>
            <h2>GitHub &rarr;</h2>
            <p>Find me on GitHub</p>
          </a>

          <a href="https://twitter.com/yourusername" className={styles.card}>
            <h2>Twitter &rarr;</h2>
            <p>Follow me on Twitter</p>
          </a>

          <a href="https://linkedin.com/in/yourusername" className={styles.card}>
            <h2>LinkedIn &rarr;</h2>
            <p>Connect with me on LinkedIn</p>
          </a>

          <a href="/src/pages/community" className={styles.card}>
            <h2>Community &rarr;</h2>
            <p>Check out my community page</p>
          </a>
        </div>
      </main>

      <Footer
        name={'JH'}
        link={'https://github.com/ehek01'}
      />
    </div>
  );
};

export default Home;
