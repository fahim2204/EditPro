import { useState, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import axios from "axios";
import MainLayout from "../layouts/Main";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { PulseLoader } from "react-spinners";

const Register = () => {
  const [formData, setFormData] = useState({});
  const [serverError, setServerError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const handleGoogleLogin = () => {
    signIn("google", { callbackUrl: "/" });
  };
  const handleFacebookLogin = () => {
    signIn("facebook", { callbackUrl: "/" });
  };

  const handleChange = (event) => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;
    setFormData({ ...formData, [fieldName]: fieldValue });
  };

  async function handleRegisterSubmit(e) {
    e.preventDefault();
    console.log(formData);
    setServerError(null);
    setIsLoading(true);
    axios
      .post(`api/register`, formData)
      .then((x) => {
        setIsLoading(false);
        console.log("Registration Success!!");
        router.push("login");
      })
      .catch((err) => {
        setIsLoading(false);
        if (err.response?.status === 422) {
          setServerError(err.response.data.errors);
          console.log(err.response.data);
        } else {
          console.log("Something went wrong!!");
        }
      });
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
                      <img className="zoom" src="./img/logo.webp" alt="logo" height={30} />
                      </Link>
                    </h3>
                    <form onSubmit={handleRegisterSubmit}>
                      <div className="row">
                        <div className="mb-3">
                          <div className="form-group group-icon">
                            <input
                              type="text"
                              name="fullName"
                              className="form-control py-2"
                              placeholder="Full Name"
                              onChange={handleChange}
                              required
                            />
                            <span className="icon">
                              <i className="fas fa-user"></i>
                            </span>
                          </div>
                        </div>
                        <div className="mb-3">
                          <div className="form-group group-icon">
                            <input
                              type="email"
                              name="username"
                              className="form-control py-2"
                              required
                              onChange={handleChange}
                              placeholder="Email address"
                            />
                            <span className="icon">
                              
                              <i className="fas fa-envelope"></i>
                            </span>
                          </div>
                        </div>
                        <div className="mb-3">
                          <div className="form-group group-icon">
                            <input
                              type="password"
                              name="password"
                              className="form-control py-2"
                              required
                              onChange={handleChange}
                              placeholder="Password"
                            />
                            <span className="icon">
                              {" "}
                              <i className="fas fa-key"></i>{" "}
                            </span>
                          </div>
                        </div>
                        <div className="">
                          <div className="form-group group-icon">
                            <input
                              type="password"
                              name="confirmPassword"
                              className="form-control py-2"
                              required
                              onChange={handleChange}
                              placeholder="Confirm Password"
                            />
                            <span className="icon">
                              {" "}
                              <i className="fas fa-key"></i>{" "}
                            </span>
                          </div>
                        </div>
                      </div>
                      <ul className="list-unstyled m-0 mt-2">
                        {serverError && (
                          <>
                            {Object.entries(serverError).map(([key, value]) => (
                              <li className="fs-10px text-start text-danger" key={key}>
                                {key.charAt(0).toUpperCase()+key.slice(1)}: {value}
                              </li>
                            ))}
                          </>
                        )}
                      </ul>
                      <button
                        type="submit"
                        disabled={isLoading}
                        className="butn bg-main border-0 rounded-3 text-white w-100 mt-3 py-2"
                      >
                        <PulseLoader
                          className="py-1"
                          color="#ffffff"
                          loading={isLoading}
                          size={8}
                        />
                        {!isLoading && (
                          <span>
                            {" "}
                            Register{" "}
                            <i className="fal fa-long-arrow-right ms-2"></i>{" "}
                          </span>
                        )}
                      </button>
                    </form>
                    <div className="text-center pt-2">
                      Already Resgistered? <Link href={"/login"}> Login</Link>
                    </div>
                    <div className="or-line py-0 my-2">
                      <span> or </span>
                    </div>
                    <p className="color-666">Continue using, </p>
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

export default Register;
