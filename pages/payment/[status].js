import { useState, useEffect, useRef } from "react";
import Head from "next/head";
import axios from "axios";
import { useRouter } from "next/router";
import { PulseLoader } from "react-spinners";

//= Layout
import MainLayout from "../../layouts/Main";
//= Components

const Home = () => {
  const router = useRouter();
  const { status } = router.query;

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 5000);
  }, []);

  return (
    <>
      <Head>
        <title>Edit Pro</title>
      </Head>

      <MainLayout>
        <div className="py-5 px-4">
          <div className="col-lg-8 mx-auto">
            {status ? (
              <div
                style={{ maxWidth: "500px" }}
                className="card mx-auto p-4 d-flex justify-content-center align-items-center"
              >
                <div
                  className="p-2 rounded-circle d-flex justify-content-center align-items-center shadow-sm"
                  style={{
                    height: "150px",
                    width: "150px",
                    background: "#F8FAF5",
                    margin: "0 auto",
                  }}
                >
                  <i
                    className={`${
                      status === "success" ? "text-success" : "text-danger"
                    } fw-bolder display-1`}
                  >
                    {status === "success" ? "✓" : "✘"}
                  </i>
                </div>
                <h1
                  className={`mt-2 ${
                    status === "success" ? "text-success" : "text-danger"
                  }`}
                >
                  {status === "success" ? "SUCCESS" : "FAILED"}
                </h1>
                <p>
                  {status === "success"
                    ? "Transaction Successful"
                    : "Your transaction has failed."}
                </p>
              </div>
            ) : (
              <PulseLoader
                className="text-center my-5"
                color="green"
                size={20}
              />
            )}
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default Home;
