import React from "react";
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  pageTitle: string;
}

const Layout: React.FC<LayoutProps> = ({ pageTitle, children }) => {
  return (
    <>
      <Head>
        <title>Project HeartCode | {pageTitle}</title>
        <link rel="icon" href="/static/favicon.ico" />
      </Head>
        <div>
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
    </>
  );
};

export default Layout;
