import { useEffect, useRef } from "react";
import Head from "next/head";
//= Layout
import MainLayout from "../layouts/Main";
//= Components
import FaqList from "../data/12abc/faq.json";

const Home = () => {
  return (
    <>
      <Head>
        <title>Edit Pro</title>
      </Head>

      <MainLayout>
        <div className="py-5 px-4">
          <div className="col-lg-8 mx-auto">
            <h1 className="text-center mb-4">FAQs</h1>
              <div className="accordion pt-lg-0" id="accordion1">
                {FaqList.faqs.map((item, index) => {
                  return (
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="hd1">
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#bd${index}`}
                          aria-expanded="false"
                        >
                          {item.question}
                        </button>
                      </h2>
                      <div
                        id={`bd${index}`}
                        className={`accordion-collapse collapse ${
                          index === 0 ? "show" : ""
                        }`}
                        data-bs-parent="#accordion1"
                      >
                        <div className="accordion-body">
                          <div className="text">{item.answer}</div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default Home;
