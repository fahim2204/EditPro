import { useState, useEffect, useRef } from "react";
import Head from "next/head";
import axios from "axios";
import { useRouter } from "next/router";

//= Layout
import MainLayout from "../../layouts/Main";
//= Components

const Home = () => {
  const router = useRouter();
  const { orderId } = router.query;
  const [orderInfo, setOrderInfo] = useState(null)

  useEffect(() => {
    if (orderId) {
      axios
        .post(`../api/cashfree/check`, { orderId })
        .then((x) => {setOrderInfo(x.data)})
        .catch((err) => {
          console.log("Something went wrong!!", err);
        });
    }
    // setTimeout(()=>{router.push("/")},5000)
  },[]);

  return (
    <>
      <Head>
        <title>Edit Pro</title>
      </Head>

      <MainLayout>
        <div className="py-5 px-4">
          <div className="col-lg-8 mx-auto">
            <h1 className="text-center mb-4">Payment</h1>
            {
              orderInfo && <>{orderInfo.orderStatus}</>
            }
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default Home;
