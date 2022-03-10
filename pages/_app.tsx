import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <>
      <Head>
        <meta charSet='utf-8'/>
        <meta name="viewport" content="width-device-width, initial-scale=1.0, maximum-sale=1.0, user-scalable=no" />
      </Head>
      <Component {...pageProps} />
    </>
  )
  return <Component {...pageProps} />
}

export default MyApp
