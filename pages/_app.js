import 'froala-editor/css/froala_style.min.css'
import 'froala-editor/css/froala_editor.pkgd.min.css'
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
