import { useEffect } from 'react'
import Head from 'next/head'
import GlobalStyles from '../../styles/global'

const AppWithHooks = props => {
  return <>{props.children}</>
}

const AppWithProviders = props => {
  return (
    <>
      <Head>
        <title>Example App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <GlobalStyles />
      <AppWithHooks>{props.children}</AppWithHooks>
    </>
  )
}

export default AppWithProviders
