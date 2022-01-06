import '../styles/globals.css'
import { SessionProvider } from 'next-auth/react'
import Head from 'next/head'

function MyApp({ Component, pageProps: {session, ...pageProps} }) {
  return (
  <>
    <Head>
      <meta key='m-one' charset="UTF-8" />
      <meta key='m-two' name="viewport" content="width=device-width, initial-scale=1.0" />

      <link href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css" rel="stylesheet" />
      <title>Travel Experience</title>
    </Head>
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
    
  </>
  )
}

export default MyApp
