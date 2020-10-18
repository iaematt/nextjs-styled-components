import React from 'react'
import Head from 'next/head'

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main>
        <h1>Olá mundo!</h1>

        <p>
          Essa aplicação está configurada para ser usada. <br />
          <a href="https://blog.devbsb.com.br/5-criando-projeto-nextjs-com-typescript-e-styled-components">
            Acesse aqui
          </a>{' '}
          para mais informações.
        </p>
      </main>
    </>
  )
}

export default Home
