import { useState, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import MainLayout from "../layouts/Main";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { PulseLoader } from "react-spinners";

const Login = () => {
  const [serverError, setServerError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const handleGoogleLogin = () => {
    signIn("google", { callbackUrl: "/" });
  };
  const handleFacebookLogin = () => {
    signIn("facebook", { callbackUrl: "/" });
  };

  async function handleLoginSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    setServerError(null);
    const status = await signIn("credentials", {
      redirect: false,
      username: e.target["username"].value,
      password: e.target["password"].value,
      callbackUrl: "/",
    });
    setIsLoading(false);
    setServerError(status.error);
    if (status.ok) router.push("/");
  }

  return (
    <>
      <Head>
        <title>Edit Pro - Login</title>
      </Head>

      <MainLayout>
        <main className="signin-page style-5">
          <section className="signin py-5">
            <div className="container">
              <div className="col-12 col-md-5 col-lg-4 mx-auto">
                <div className="form-content">
                  <div className="info">
                    <h3 className="mb-4">
                      <Link href="/" className="color-blue5">
                      <img className="zoom" src="./img/logo.webp" alt="logo" height={35} />
                      </Link>{" "}
                    </h3>
                    <form onSubmit={handleLoginSubmit}>
                      <div className="row">
                        <div className="mb-3">
                          <div className="form-group group-icon">
                            <input
                              type="text"
                              name="username"
                              className="form-control py-2"
                              placeholder="Email address"
                            />
                            <span className="icon">
                              {" "}
                              <i className="fas fa-envelope"></i>{" "}
                            </span>
                          </div>
                        </div>
                        <div className="">
                          <div className="form-group group-icon mt-3 mt-lg-0">
                            <input
                              type="password"
                              name="password"
                              className="form-control py-2"
                              placeholder="Password"
                            />
                            <span className="icon">
                              {" "}
                              <i className="fas fa-key"></i>{" "}
                            </span>
                          </div>
                        </div>
                        <div className="text-end text-muted fs-12px pt-1">
                          <Link href={"/forget"}>Forgot Password?</Link>
                        </div>
                      </div>
                      {serverError && (
                        <div className="text-danger">
                          <small>{serverError}</small>
                        </div>
                      )}
                      <button type="submit" disabled={isLoading} className="butn bg-main border-0 rounded-3 text-white w-100 mt-2 py-2">
                        <PulseLoader className="py-1" color="#ffffff" loading={isLoading} size={8} />
                        {!isLoading && <span>
                          {" "}
                          Login <i className="fal fa-long-arrow-right ms-2"></i>{" "}
                        </span>}
                      </button>
                    </form>
                    <div className="text-center pt-2">
                      Not Resgistered? <Link href={"/register"}> Register</Link>
                    </div>
                    <div className="or-line py-0 my-2">
                      <span> or </span>
                    </div>
                    <p className="color-666">Login using, </p>
                    <div className="mt-2 d-flex justify-content-center">
                      <button
                        onClick={handleGoogleLogin}
                        className="py-2 px-3 border-1 rounded-3 bg-white border me-2"
                      >
                        <i className="fab fa-google color-blue5"></i>
                      </button>
                      <button
                        onClick={handleFacebookLogin}
                        className="py-2 px-3 border-1 rounded-3 bg-white border"
                      >
                        <i className="fab fa-facebook color-blue5"></i>
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
  );
};

export default Login;
