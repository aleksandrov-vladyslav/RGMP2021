import { Provider } from 'react-redux'
import { useStore } from '../store'

import Footer from '../components/Footer/Footer'

import '../styles/index.scss';

export default function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState)

  return (
    <Provider store={store}>
      <Component {...pageProps} />
      <Footer />
    </Provider>
  )
}
