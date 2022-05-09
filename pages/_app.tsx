// import { WorkProvider } from '../context/WorkContext';
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return (
    // <WorkProvider>
      <Component {...pageProps} />
    // </WorkProvider>
  )
}

export default MyApp
