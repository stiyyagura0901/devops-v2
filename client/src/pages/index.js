import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '../styles/Home.module.css'
import { getMessage } from './api/server'
import React, { useEffect, useState } from "react";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [message, setMessage] = useState('')

  useEffect(() => {
    const fetchFromTheServer = async () => {
      const data = await getMessage();
      setMessage(data?.message);
    }

    fetchFromTheServer();
  }, []);

  return (
    <>
      <Head>
        <title>This is a new next.js App</title>
        <meta name="description" content="This is a new next.js App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.center}>
          <div className={styles.description}>
            {`This is the message from the server: ${message}`}
          </div>
        </div>
      </main>
    </>
  )
}

