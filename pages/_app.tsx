import 'bootstrap/dist/css/bootstrap.css'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import { Fragment } from 'react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

export default function App({ Component, pageProps:{session, ...pageProps} }: AppProps) {
  return (
    <SessionProvider session={session}>
      <Fragment>
        <Navbar/>
        <Component {...pageProps} />
        <Footer/>
      </Fragment>
    </SessionProvider>
  )
}
