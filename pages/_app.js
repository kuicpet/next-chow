import { useEffect } from 'react'
import { Toaster } from 'react-hot-toast'
import '../styles/globals.css'
import { StoreProvider } from '../utils/Store'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])
  return (
    <Toaster position='top-right'>
      <StoreProvider>
        <Component {...pageProps} />
      </StoreProvider>
    </Toaster>
  )
}

export default MyApp
