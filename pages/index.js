import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
        <title>Пример установки изображения в качестве фона</title>
          <style> 
            body {
              background-image: url("bg_main.png"); /* указываем путь к файлу изображения, которое будет использоваться как задний фон */
              background-color: white; /* задаем задний фон для элемента */
                }
         </style>
      </Head>    

      <main>
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
