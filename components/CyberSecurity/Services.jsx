import React from 'react';
import services from '@data/CyberSecurity/services.json';

const Services = () => {
  return (
    <section className="services style-10 overflow-hidden">
      <div className="container">
        <div className="content">
          <div className="row gx-5">
            {
              services.map((service, idx) => (
                <div className="col-lg-3 col-sm-6" key={idx}>
                  <div className="services-card">
                    <h6> Service #{service.number} </h6>
                    <h3> {service.title} </h3>
                    <p> {service.details} </p>
                    <div className="icon">
                      <img src={service.image} alt="" />
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
          <div className="section-title"> services </div>
        </div>
      </div>
    </section>
  )
}

export default Services