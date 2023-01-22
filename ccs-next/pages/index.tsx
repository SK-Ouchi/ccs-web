import React from "react";
// import { Inter } from "@next/font/google";
import Head from "next/head";
import Image from "next/image";

// import styles from "../styles/Home.module.css";

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="p-2">
        <h1 className="text-4xl">Childhood Cancer Society</h1>
        <h2 className="text-2xl">CCS</h2>
        <div>
          <p>Lorem ipsum dolor sit amet</p>
        </div>
      </main>
    </>
  );
}
