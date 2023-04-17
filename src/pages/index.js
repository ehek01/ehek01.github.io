import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Footer from "../components/home/Footer";
import Profile from "../components/home/Profile";
import Module from "../components/home/Module";
import Layout from "../components/home/Layout";

const Home = () => {
  return (
    <Layout title={"My Personal Website"} description="My personal website and portfolio">
      <div className={styles.container}>
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
          <br/>
          I'm a web developer, and this is my personal website.
        </p>
        <div className={styles.grid}>
          <Module
            path={"/video"}
            title={"Video"}
            body={"비디오 모듈 입니다."}
            visible={true}
          />
          <Module
            path={"/chat"}
            title={"실시간 채팅"}
            body={"와서 신나게 떠들다 가세요."}
            visible={true}
          />
          <Module
            path={"/community"}
            title={"커뮤니티(준비중)"}
            body={"종현이 커뮤니티에요."}
            visible={false}
          />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
