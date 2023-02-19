import { useEffect, useRef } from 'react';
import Head from 'next/head';
//= Scripts
import navbarScrollEffect from "../common/navbarScrollEffect";
//= Layout
import MainLayout from '../layouts/Main';
//= Components
import TopNav from '../components/Navbars/TopNav';
import Navbar from '../components/Navbars/SaasNav';
import Projects from '../components/Portfolio/Projects';
import Download from '../components/Portfolio/Download';
import Footer from '../components/Saas/Footer';
import Pricing from '../components/Saas/Pricing';
import AboutHeader from '../components/Saas/AboutHeader';

const Home = () => {
  const navbarRef = useRef(null);

  useEffect(() => {
    navbarScrollEffect(navbarRef.current);
  }, [navbarRef]);

  return (
    <>
      <Head>
        <title>Edit Pro</title>
      </Head>

      <MainLayout>
        {/* <TopNav style="5" /> */}
        <Navbar navbarRef={navbarRef} />
        <div className='service-page style-5'>
        <Pricing />
        </div>
        <Footer noWave />
      </MainLayout>
    </>
  )
}

export default Home;