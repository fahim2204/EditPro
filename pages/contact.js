import { useEffect, useRef } from 'react';
import Head from 'next/head';
//= Scripts

//= Layout
import MainLayout from '../layouts/Main';
//= Components
import Contact from '../components/Saas/Contact';

const Home = () => {

  return (
    <>
      <Head>
        <title>Edit Pro</title>
      </Head>

      <MainLayout>
        <div className='about-page'>
          <Contact />
        </div>
      </MainLayout>
    </>
  )
}

export default Home;