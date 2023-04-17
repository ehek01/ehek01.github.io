// components/Header.js
import React from 'react';
import Head from 'next/head';

const Header = ({ title, description, children }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" href="/public/dog.png" />
      {children}
    </Head>
  );
};

export default Header;
