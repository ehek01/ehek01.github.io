import React from 'react';
import styles from "../../styles/Home.module.css";
import Link from 'next/link';

const Module = ({body, path, title, visible = true}) => {
  const cardStyle = visible ? `${styles.card} ${styles.cardEnabled}` : `${styles.card} ${styles.cardDisabled}`;

  const content = (
    <div className={styles.cardContent}>
      <h2>{title} &rarr;</h2>
      <p>{body}</p>
    </div>
  );

  return (
    <div className={cardStyle}>
      {visible ? (
        <Link href={path}>
          <div className={styles.linkWrapper}>
            {content}
          </div>
        </Link>
      ) : content}
    </div>
  );
};

export default Module;
