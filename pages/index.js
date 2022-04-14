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
    
    <body style="background-color: #55D52B">
    <p>Фон сайта #55D52B</p> 
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
