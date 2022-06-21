import { ReactNode } from 'react';
import Head from "next/head";
import {Navbar} from "../Navbar";

import styles from "./MainLayout.module.css";

type Props = {
  children: ReactNode
}


export const MainLayout = ({ children }:Props) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home Page</title>
        <meta name="description" content="Home page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar/>

      <main className={styles.main}>{children}</main>
    </div>
  );
};
