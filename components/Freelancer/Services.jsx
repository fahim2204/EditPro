import React from 'react';
import services from '@data/Freelancer/services.json';

const Services = () => {
  return (
    <section className="services style-13 section-padding">
      <div className="container">
        <div className="section-head text-center mb-40 style-13">
          <h6> services </h6>
          <h2> Essential Services </h2>
        </div>
        <div className="content">
          <div className="row">
            {
              services.map((service, idx) => (
                <div className="col-lg-4" key={idx}>
                  <div className="item">
                    <div className="cont">
                      <div className="title">
                        <img src={service.image} alt="" className="icon" />
                        <span> {service.title} </span>
                      </div>
                      <p> {service.details} </p>
                      <a href="#"> Service Details </a>
                    </div>
                    <span className="circle"></span>
                    <img alt="" src="/assets/img/services/pattern1.png" className="pattern" />
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

export default Services