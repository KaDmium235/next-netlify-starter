import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    
    <body style="background-image: url(VjCtG8A21Y8.jpg)">
    </body>

      <main>
        <Header title="Welcomuski to my app!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>          
      </main>

      <Footer />
    </div>
  )
}
