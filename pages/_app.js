import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Styles from '../styles/global.css'
import Tailwind from '../styles/tailwind.css'
import Javascript from '../styles/global.js'

function MyApp({ Component, pageProps }) {

  return <>
  <Navbar/>
  <Component {...pageProps} />
  <Footer/>
  </>
}

export default MyApp
