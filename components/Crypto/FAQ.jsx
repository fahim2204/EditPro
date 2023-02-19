import React from 'react';
import FAQs from '@data/Crypto/faq.json'

const FAQ = () => {
  return (
    <section className="faq pt-100 style-15">
      <div className="container">
        <div className="section-head text-center mb-50 wow fadeInUp">
          <h6 className="text-uppercase fw-bold lh-8"> <img src="/assets/img/icons/home_15_icon.png" alt="" className="icon-30 me-2" />  <span> some faq </span>  <img src="/assets/img/icons/home_15_icon.png" alt="" className="icon-30 ms-2" /> </h6>
          <h2 className="fs-1"> Freequently Asked Anything </h2>
        </div>
        <div className="content">
          <div className="row">
            {
              FAQs.map((question, idx) => (
                <div className="col-lg-6" key={idx}>
                  <div className="faq-card wow fadeInUp">
                    <span className="numb">
                      {question.numb}
                    </span>
                    <div className="info">
                      <h6> {question.question} </h6>
                      <p> {question.answer} </p>
                    </div>
                    <img src="/assets/img/icons/faq_15_icon.png" alt="" className="icon" />
                  </div>
                </div>
              ))
            }
          </div>
        </div>
        <div className="text-center mt-50 wow fadeInUp">
          <a href="#" className="butn border-1 brd-light border rounded-pill text-white hover-red2">
            <span> Ask More Question <i className="fal fa-long-arrow-right ms-2"></i> </span>
          </a>
        </div>
        <div className="subscribe-content mt-100 wow fadeInUp">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="subscribe-card">
                <div className="row justify-content-center">
                  <div className="col-lg-9">
                    <div className="icon">
                      <img src="/assets/img/icons/ch10.png" alt="" />
                    </div>
                  </div>
                  <h2 className="fs-1s"> Daily Update & Newsletter </h2>
                  <div className="form-group">
                    <span className="ico"> <i className="fas fa-envelope-open"></i> </span>
                    <input type="text" placeholder="Business Email" />
                    <button> Subscribe Now </button>
                    <img src="/assets/img/subs_arrow.png" alt="" className="subs_arrow" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ