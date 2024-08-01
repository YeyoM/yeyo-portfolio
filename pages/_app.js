import { Raleway } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const raleway = Raleway({
  subsets: ["latin"],
  fontDisplay: "swap",
  fontWeights: [400, 700],
});

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Diego Moreno</title>
        <meta name="description" content="Personal website of Diego Moreno" />
      </Head>
      <div className={`${raleway.className} max-w-[100vw] overflow-x-hidden`}>
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
