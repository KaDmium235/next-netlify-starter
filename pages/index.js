import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
   /* <div class="background">
    <img src="bg_main.JPG" />
      </div>   */   
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />          
      </Head>

      <main>
         /* background-image: url("bg_main.png"); /* указываем путь к файлу изображения, которое будет использоваться как задний фон */
        <Header title="One line" />
        <Header title="Second line!!" />
        <Header title="Third one" />
        <Header title="Welcomushki to KaDmium235!!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>          
      </main>

      <Footer />
    </div>
  )
}
