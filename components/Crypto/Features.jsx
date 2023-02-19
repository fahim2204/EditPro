import React from 'react';
import features from '@data/Crypto/features.json';

const Features = () => {
  return (
    <section className="features style-15">
      <div className="container">
        <div className="section-head text-center mb-50 wow fadeInUp">
          <h6 className="text-uppercase fw-bold lh-8"> <img src="/assets/img/icons/home_15_icon.png" alt="" className="icon-30 me-2" />  <span> core features </span>  <img src="/assets/img/icons/home_15_icon.png" alt="" className="icon-30 ms-2" /> </h6>
          <h2 className="fs-1"> Features & Reveals </h2>
        </div>
        <div className="content">
          <div className="row">
            {
              features.map((feature, index) => (
                <div className="col-lg-4" key={index}>
                  <a href="#" className="features-card wow fadeInUp">
                    <div className="icon">
                      <img src={feature.icon} alt="" />
                    </div>
                    <h6> {feature.title} </h6>
                    <p> {feature.details} </p>
                  </a>
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