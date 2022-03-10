import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Styles from '../styles/global.css'
import Style from '../styles/tailwind.css'

function MyApp({ Component, pageProps }) {

  return <>
  <Navbar/>
  <Component {...pageProps} />
  <Footer/>
  </>
}

export default MyApp
