import { useEffect, useRef } from 'react';
import Head from 'next/head';
//= Scripts
import navbarScrollEffect from "../common/navbarScrollEffect";
//= Layout
import MainLayout from '../layouts/Main';

import Link from "next/link"

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
        <div className='erorr-404-page my-5'>
          <section className="erorr-page style-5">
            <div className="container">
              <div className="content">
                <div className="row align-items-center">
                  <div className="col-lg-4">
                    <div className="info">
                      <div className="icon">
                        <img src="/assets/img/icons/rocket.png" alt="" />
                      </div>
                      <h2 className="mb-30"> Opps! Looks Like Here is Nothing. </h2>
                      <p className="color-777"> The page you’re looking for isn’t found. We suggest you back to home. It’s easy... </p>
                      <Link href="/" className="btn rounded-pill blue5-3Dbutn hover-blue2 sm-butn fw-bold mt-40">
                        <span> <i className="fas fa-long-arrow-left me-2"></i> Back To Home </span>
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-8 text-lg-end">
                    <div className="img">
                      <img src="/assets/img/404_1.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </MainLayout>
    </>
  )
}

export default Home;