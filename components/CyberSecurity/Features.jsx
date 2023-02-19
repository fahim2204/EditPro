import React from 'react';
import features from '@data/CyberSecurity/features.json';

const Features = () => {
  return (
    <section className="features style-10">
      <div className="content">
        <div className="row gx-0">
          {
            features.map((feature, idx) => (
              <div className="col-lg-3 col-sm-6" key={idx}>
                <div className="feat-card">
                  <div className="icon">
                    <img src={feature.image} alt="" />
                  </div>
                  <div className="info">
                    <a href="#"> {feature.sub_title} </a>
                    <h4> {feature.title} </h4>
                    <p> {feature.details} </p>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Features