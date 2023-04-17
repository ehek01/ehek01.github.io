import React from 'react';
import styles from "../../styles/Home.module.css";
import Image from "next/image";

const Profile = ({src, alt, width, height}) => {
  return (
    <div className={styles.profile}>
      <Image
        src={src}
        alt={alt && "defaultAlt"}
        width={width}
        height={height}
      />
    </div>
  );
};

export default Profile;
