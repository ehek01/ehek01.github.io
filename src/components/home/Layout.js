import React from 'react';
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children, title, description }) => {
  return (
    <>
      <Header title={title} description={description} />
      <main>{children}</main>
      <Footer
        name={'JH'}
        link={'https://github.com/ehek01'}
      />
    </>
  );
};

export default Layout;
