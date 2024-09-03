import "../styles/fonts.scss";
import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";
import Head from "next/head";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className="flex flex-col w-screen min-h-screen overflow-x-hidden">
      <Head>
        <title>LP</title>
        <link rel="icon" href="/images/logo.svg" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      {/* <Navbar /> */}
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
