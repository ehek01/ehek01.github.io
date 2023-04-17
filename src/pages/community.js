import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Layout from "../components/home/Layout";

const Community = () => {
  return (
    <Layout title={"JH's Community Page"}>
      <div className={styles.container}>
          <h1 className={styles.title}>Welcome to My Community Page</h1>
          <p className={styles.description}>
            This is where I'll share information about my community, events, and other related content.
          </p>
      </div>
    </Layout>
  );
};

export default Community;
