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
  const { orderId } = router.query;
  const [orderInfo, setOrderInfo] = useState(null);

  useEffect(() => {
    console.log("helooo..");
    if (orderId) {
      axios
        .post(`../api/cashfree/check`, { orderId })
        .then((x) => {
          setOrderInfo(x.data);
        })
        .catch((err) => {
          console.log("Something went wrong!!", err);
        });
    }
    // setTimeout(()=>{router.push("/")},5000)
  }, [orderId]);

  return (
    <>
      <Head>
        <title>Edit Pro</title>
      </Head>

      <MainLayout>
        <div className="py-5 px-4">
          <div className="col-lg-8 mx-auto">
            {orderInfo ? (
              <>
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
                    <i className={`${orderInfo.txStatus==="SUCCESS"?"text-success":"text-danger"} fw-bolder display-1`}>{orderInfo.txStatus==="SUCCESS"?"✓":"✘"}</i>
                  </div>
                  <h1 className={`mt-2 ${orderInfo.txStatus==="SUCCESS"?"text-success":"text-danger"}`}>{orderInfo.txStatus}</h1>
                  <p>{orderInfo.txMsg}</p>
                </div>
              </>
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
