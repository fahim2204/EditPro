import { useEffect, useRef } from 'react';
import Head from 'next/head';
//= Layout
import MainLayout from '../layouts/Main';
//= Components
import Pricing from '../components/Saas/Pricing';

const Home = () => {

  return (
    <>
      <Head>
        <title>Edit Pro</title>
      </Head>

      <MainLayout>
        <div className='service-page style-5'>
          <Pricing />
        </div>
      </MainLayout>
    </>
  )
}

export default Home;