import "react-toastify/dist/ReactToastify.css";
import "../styles/preloader.css";
import "../styles/globals.css";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import { AuthContext, isTokenValid } from "../components/request";
import { getCookie, setCookie, getCookies } from "cookies-next";
import { SessionProvider } from "next-auth/react";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  const [token, setToken] = useState(getCookie("token"));

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme="light"
      />
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </AuthContext.Provider>
  );
}
