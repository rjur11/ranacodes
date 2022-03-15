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
        <p classname={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          tristique pellentesque ultrices. Pellentesque habitant morbi tristique
          senectus et netus et malesuada fames ac turpis egestas.
        </p>
        <p classname={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          tristique pellentesque ultrices. Pellentesque habitant morbi tristique
          senectus et netus et malesuada fames ac turpis egestas.
        </p>
        <Link href="/ninjas">
          <a classname={styles.btn}>See Projects</a>
        </Link>
      </div>
    </>
  );
}
