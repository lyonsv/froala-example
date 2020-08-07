import AppContainer from '../components/App'

const MyApp = props => {
  const { Component, pageProps } = props
  return (
    <AppContainer>
      <Component {...pageProps} />
    </AppContainer>
  )
}

export default MyApp
