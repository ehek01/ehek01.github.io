import React from 'react';
import styles from "../../styles/Home.module.css";

const Footer = ({name, link}) => {
  return (
    <footer className={styles.footer}>
      <p>
        Made with ❤️ by
        <a href={link}>{name}</a>
      </p>
    </footer>
  );
};

export default Footer;
