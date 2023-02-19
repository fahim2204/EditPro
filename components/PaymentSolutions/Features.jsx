import React from 'react';
import features from '@data/PaymentSolutions/features.json';

const Features = () => {
  return (
    <section className="features style-14">
      <div className="container">
        <div className="content">
          <div className="section-head text-center mb-70">
            <p className="color-red1 text-uppercase fw-bold mb-10"> features </p>
            <h2 className="fs-1"> Payment Methods </h2>
          </div>
          <ul className="nav nav-pills mb-60 justify-content-center" id="pills-tab" role="tablist">
            {
              features.items.map((item, index) => (
                <li className="nav-item" role="presentation" key={index}>
                  <button className={`nav-link ${index === 0 ? 'active' : ''}`} id={`pills-${item.id}-tab`} data-bs-toggle="pill"
                    data-bs-target={`#pills-${item.target}`} type="button" role="tab" aria-controls="pills"
                    aria-selected={index === 0 ? 'true' : 'false'}>
                    {item.text}
                  </button>
                </li>
              ))
            }
          </ul>
          <div className="tab-content" id="pills-tabContent">
            {
              features.tabs.map((tab, index) => (
                <div className={`tab-pane fade ${index === 1 ? 'show active' : ''}`} id={`pills-${tab.id}`} role="tabpanel" aria-labelledby={`pills-${tab.id}-tab`} key={index}>
                  <div className="tab-pay-content">
                    <div className="row align-items-start">
                      <div className="col-lg-5">
                        <div className="info">
                          <div className="icon">
                            <img src="/assets/img/icons/pay1.svg" alt="" />
                          </div>
                          <h3> Use Our <span className="color-red1"> {tab.text} </span> <br /> For Get Paid </h3>
                          <ul>
                            {
                              tab.items.map((item, idx) => (
                                <li key={idx}> <i className="fal fa-check me-2 color-red1"></i> <span> {item} </span> </li>
                              ))
                            }
                          </ul>
                        </div>
                      </div>
                      <div className="col-lg-7">
                        <div className="img">
                          <img src={tab.image} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features