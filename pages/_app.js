import { SWRConfig } from "swr";
import axios from "axios";
import Head from "next/head";

import "../styles/globals.css";
import Footer from "../components/footer";

function MyApp({ Component, pageProps }) {
  return (
    <SWRConfig
      value={{
        fetcher: (resource, init) =>
          axios.get(resource, init).then((res) => res.data),
      }}
    >
      <Head>
        <title>Morgan Wrestling | Home</title>
        <meta
          name="Morgan Wrestling"
          content="Morgan High Wrestling schedule calendar"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-gradient-to-br from-zinc-50 to-zinc-200">
        <Component {...pageProps} />
        <Footer />
      </div>
    </SWRConfig>
  );
}

export default MyApp;
