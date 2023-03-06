import { useState, useEffect, useMemo } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

import { BsImages } from "react-icons/bs";
import { BiCodeCurly } from "react-icons/bi";
import { IoMdAppstore } from "react-icons/io";
import Plans from "../../data/12abc/pricing.json";

const Pricing = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [monthlyPlan, setMonthlyPlan] = useState({ credit: 40, price: 599 });
  const [paygPlan, setPaygPlan] = useState({ credit: 1, price: 129 });

  const router = useRouter();
  const { data: session } = useSession();

  useEffect(() => {
    console.log("monthlyPlan>> ", monthlyPlan);
    console.log("paygPlan>> ", paygPlan);
  }, [paygPlan, monthlyPlan]);

  const handleBuy = (obj) => {
    // Chack if user is logged in
    if (!session) {
      // Require login
      router.push("login");
      return false;
    }
    // User have authenticated
    const formData = {
      amount: obj.price,
      cusName: session.user.name,
      cusEmail: session.user.email,
    };
    setIsLoading(true);
    axios
      .post(`api/cashfree/create`, formData)
      .then((x) => {
        setIsLoading(false);
        window.location.href = x.data.paymentLink;
      })
      .catch((err) => {
        setIsLoading(false);
        console.log("Something went wrong!!", err);
      });
  };

  return (
    <section className="pricing section-padding style-5" data-scroll-index="4">
      <div className="container">
        <div className="section-head text-center mb-60 style-5">
          <h2 className="mb-20">
            Choose Plan and <span>Kick-start</span>
          </h2>
          <p>
            Whether you’re just getting started with rapid testing or scaling
            across the organization, we’ve got you covered.
          </p>
        </div>
        <div className="container">
          <div className="row g-3 d-flex justify-content-center">
            <div className="col-12 col-md-6 col-lg-4 p-3">
              {/* <div className="price-headTitle text-center">
                <img src="/assets/img/icons/price_s5.png" alt="" height={100}/>
              </div> */}
              <h4 className="text-center fw-normal mt-2 mb-1">Free Account</h4>

              <div className="text-center">
                <BsImages className="fs-4 mt-2 mb-1" />
              </div>
              <div className="text-center fw-bold mb-2">2 Free Credit</div>
              <div className="text-center">
                <BiCodeCurly className="fs-4 mt-2 mb-1" />
              </div>
              <div className="text-center fw-bold mb-2">50 Free Previews</div>
              <div className="text-center">
                <IoMdAppstore className="fs-4 mt-2 mb-1" />
              </div>
              <div className="text-center fw-bold mb-3">
                Apps for Windows/Mac/Linux
                <br />
                and Adobe Photoshop
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="bg-gray5 rounded border shadow-sm p-3 best-con">
                <div className="label">best choice</div>
                <h4 className="fw-normal mt-2 mb-1">Subscription Plan</h4>
                <h2 className="color-blue5 mb-3">
                  ₹ 500 <span className="fs-6 fw-light">/ image</span>
                </h2>
                <div className="mt-4 flex flex-column">
                  {Plans.monthly.map((item, index) => {
                    return (
                      <div key={index} class="form-check mb-3">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="monthlyPlan"
                          id={`mp${index}`}
                          checked={monthlyPlan?.credit === item.creditAmmount}
                          onChange={() => {
                            setMonthlyPlan({
                              credit: item.creditAmmount,
                              price: item.creditPrice,
                            });
                          }}
                        />
                        <label
                          class="form-check-label user-select-none row"
                          for={`mp${index}`}
                        >
                          <div className="col-6 p-0">
                            {item.creditAmmount} Credit /
                            <small className="text-muted">month</small>
                          </div>
                          <div className="col-2 p-0">₹ {item.creditPrice}</div>
                          <div className="col-4 p-0 fw-bold">
                            ₹{" "}
                            {(item.creditPrice / item.creditAmmount).toFixed(2)}{" "}
                            /
                            <small className="text-muted fw-light">image</small>
                          </div>
                        </label>
                      </div>
                    );
                  })}
                </div>
                <button
                  onClick={() => handleBuy(monthlyPlan)}
                  className="butn bg-main border-0 rounded-3 text-white my-3 py-2"
                >
                  Buy Now
                </button>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="border rounded-3 shadow-sm p-3 best-con">
                <h4 className="fw-normal mt-2 mb-1">Pay As You Go</h4>
                <h2 className="color-blue5 mb-3">
                  ₹ 500 <span className="fs-6 fw-light">/ image</span>
                </h2>
                <div className="mt-4 flex flex-column">
                  {Plans.payAsGo.map((item, index) => {
                    return (
                      <div key={index} class="form-check mb-3">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="paygPlan"
                          id={`pgp${index}`}
                          checked={paygPlan?.credit === item.creditAmmount}
                          onChange={() => {
                            setPaygPlan({
                              credit: item.creditAmmount,
                              price: item.creditPrice,
                            });
                          }}
                        />
                        <label
                          class="form-check-label user-select-none row"
                          for={`pgp${index}`}
                        >
                          <div className="col-5 p-0">
                            {item.creditAmmount} Credit
                          </div>
                          <div className="col-3 p-0">₹ {item.creditPrice}</div>
                          <div className="col-4 p-0 fw-bold">
                            ₹{" "}
                            {(item.creditPrice / item.creditAmmount).toFixed(2)}{" "}
                            /
                            <small className="text-muted fw-light">image</small>
                          </div>
                        </label>
                      </div>
                    );
                  })}
                </div>
                <button
                  onClick={() => handleBuy(paygPlan)}
                  className="butn bg-main border-0 rounded-3 text-white my-3 py-2"
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
