import 'react-toastify/dist/ReactToastify.css'
import "../styles/preloader.css";
import "../styles/globals.css";
import { useEffect, useState } from 'react'
import { AuthContext,isTokenValid } from '../components/request'
import { getCookie, setCookie, getCookies } from 'cookies-next';



export default function App({ Component, pageProps }) {
  const [token, setToken] = useState(getCookie('token'));

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      <Component {...pageProps} />
    </AuthContext.Provider>
  )
}
