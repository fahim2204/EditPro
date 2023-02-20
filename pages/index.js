import { useEffect, useRef } from 'react';
import Head from 'next/head';
//= Scripts
//= Layout
import MainLayout from '../layouts/Main';
//= Components
import Projects from '../components/12abc/projects';
import Download from '../components/12abc/download';
import AboutHeader from '../components/Saas/AboutHeader';

const Home = () => {
  return (
    <>
      <Head>
        <title>Edit Pro</title>
      </Head>

      <MainLayout>
        {/* <TopNav style="5" /> */}
        <div className='about-page'><AboutHeader /></div>
        <main className="portfolio-page style-1">
          <Projects />
          <Download />
        </main>
      </MainLayout>
    </>
  )
}

export default Home;