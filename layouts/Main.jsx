//= React
import { useEffect, useRef } from 'react';
import Head from "next/head";
import Script from 'next/script';
import navbarScrollEffect from "../common/navbarScrollEffect";
//= Components
import Navbar from '../components/12abc/navBar';
import Footer from '../components/Saas/Footer';

import PreLoader from "../components/PreLoader";
import ScrollToTop from "../components/ScrollToTop";
//= Scripts
import fixStylesheetsOrder from "../common/fixStylesheetsOrder";

const MainLayout = ({ children, scrollTopText, isRTL }) => {
  const navbarRef = useRef(null);

  useEffect(() => {
    fixStylesheetsOrder(isRTL);
  }, [isRTL]);

  useEffect(() => {
    navbarScrollEffect(navbarRef.current);
  }, [navbarRef]);

  return (
    <>
      <Head>
        <link rel="stylesheet" href="/assets/css/lib/bootstrap-icons.css" />
        <link rel="stylesheet" href="/assets/css/lib/all.min.css" />
        <link rel="stylesheet" href="/assets/css/lib/animate.css" />
        {
          isRTL ?
            <link rel="stylesheet" href="/assets/css/lib/bootstrap.rtl.min.css" />
            :
            <link rel="stylesheet" href="/assets/css/lib/bootstrap.min.css" />
        }
        <link rel="stylesheet" href="/assets/css/style.css" />
        {
          isRTL ? <link rel="stylesheet" href="/assets/css/rtl_style.css" /> : null
        }
      </Head>
      <Navbar navbarRef={navbarRef} />

      {/* <PreLoader /> */}
      {children}
      <ScrollToTop topText={scrollTopText} />
      <Footer noWave />

    </>
  );
};

export default MainLayout;
