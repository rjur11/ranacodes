import styles from "../styles/Home.module.css";
import Link from "next/link";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Rana Codes | Home</title>
        <meta name="keywords" content="rana" />
      </Head>
      <div>
        <h1 classname={styles.title}> Homepage </h1>
        <p classname={styles.text}>Welcome to my site!</p>

        <Link href="/projects">
          <a classname={styles.btn}>See Projects</a>
        </Link>
      </div>
    </>
  );
}
