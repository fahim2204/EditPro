import { useState, useEffect } from 'react';
import Link from 'next/link'
import Head from 'next/head';
import MainLayout from '../layouts/Main';
import { signIn } from "next-auth/react";




const SignIn = () => {
  const [load, setLoad] = useState(false);


  const handleGoogleLogin = () => {
    signIn("google", { callbackUrl: "/" });
  };
  const handleFacebookLogin = () => {
    signIn("facebook", { callbackUrl: "/" });
  };

  useEffect(() => {
    setTimeout(() => setLoad(true));
  }, []);

  return (
    <>
      <Head>
        <title>Edit Pro - Login</title>
      </Head>

      <MainLayout>
        <main className="signin-page style-5">
          <section className="signin p-0">
            <div className="container">
              <div className="col-12 col-md-6 mx-auto">
                <div className="form-content">
                  <div className="info">
                    <h3 className="mb-5">Login To <Link href="/" className="color-blue5"> EditPro </Link> </h3>
                    <div className="row mt-4">
                      <div className="mb-3">
                        <div className="form-group group-icon">
                          <input type="text" className="form-control" placeholder="Email address" />
                          <span className="icon"> <i className="fas fa-envelope"></i> </span>
                        </div>
                      </div>
                      <div className="">
                        <div className="form-group group-icon mt-3 mt-lg-0">
                          <input type="password" className="form-control" placeholder="Password" />
                          <span className="icon"> <i className="fas fa-key"></i> </span>
                        </div>
                      </div>
                    </div>
                    <button className="butn bg-main border-0 rounded-3 w-100 text-white mt-20 py-3">
                      <span> Sign In Now <i className="fal fa-long-arrow-right ms-2"></i> </span>
                    </button>
                    <div className="or-line">
                      <span> or </span>
                    </div>
                    <p className="color-666"> Get started to login with other platform </p>
                    <div className="mt-4 d-flex justify-content-center">
                      <button onClick={handleGoogleLogin} className="butn py-3 px-4 border-1 rounded-3 brd-gray border me-2">
                        <i className="fab fa-google me-1 color-blue5"></i>
                      </button>
                      <button onClick={handleFacebookLogin} className="butn py-3 px-4 border-1 rounded-3 brd-gray border">
                        <i className="fab fa-facebook me-1 color-blue5"></i>
                      </button>
                    </div>


                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </MainLayout>
    </>


  )
}

export default SignIn