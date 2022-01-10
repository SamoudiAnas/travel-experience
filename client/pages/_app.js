import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import Head from "next/head";

//themes
import { ThemeProvider } from "styled-components";
import { Default } from "../themes/Default";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <>
      <Head>
        <meta key="m-one" charset="UTF-8" />
        <meta
          key="m-two"
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />

        <link
          href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css"
          rel="stylesheet"
        />
        <title>Travel Experience</title>
      </Head>


      <SessionProvider session={session}>
        <ThemeProvider theme={Default}>
            <Component {...pageProps} />
        </ThemeProvider>
      </SessionProvider>
    </>
  );
}

export default MyApp;
