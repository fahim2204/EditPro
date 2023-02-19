import React from 'react';
import solutions from '@data/CyberSecurity/solutions.json';

const Solutions = () => {
  return (
    <section className="solutions style-10 section-padding bg-light">
      <div className="container">
        <div className="text-center mb-40">
          <p className="color-blue7 mb-10"> Our Level </p>
          <h2> Explore Solutions By Industry </h2>
        </div>
        <div className="content">
          <div className="row justify-content-center">
            {
              solutions.map((solution, idx) => (
                <div className="col-lg-3 col-sm-6" key={idx}>
                  <a href="#" className="solution-card">
                    <h6> {solution.title} </h6>
                    <span className="icon"> <img src={solution.image} alt="" /> </span>
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

export default Solutions