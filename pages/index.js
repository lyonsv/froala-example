import Head from 'next/head'
import Editor from '../components/Editor'
import { Container } from '../styles/layout'

export default function Home() {
  return (
    <Container fillHeight>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Editor />
    </Container>
  )
}
