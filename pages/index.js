import { useEffect, useRef } from "react";
import Head from "next/head";
//= Scripts
//= Layout
import MainLayout from "../layouts/Main";
//= Components
import Projects from "../components/12abc/projects";
import Download from "../components/12abc/download";
import AboutHeader from "../components/Saas/AboutHeader";
import { getSession, useSession } from "next-auth/react";

const Home = () => {
  const { data: session } = useSession();
  return (
    <>
      <Head>
        <title>Edit Pro</title>
      </Head>

      <MainLayout>
        <div className="about-page">
          <AboutHeader />
        </div>
        <main className="portfolio-page style-1">
          <Projects />
          <Download />
        </main>
      </MainLayout>
      
    </>
  );
};

export default Home;
