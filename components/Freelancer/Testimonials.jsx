import React from 'react';
import testimonials from '@data/Freelancer/testimonials.json';

const Testimonial = () => {
  return (
    <section className="testimonials section-padding style-13">
      <div className="container">
        <div className="section-head text-center mb-30 style-13">
          <h6> testimonials </h6>
          <h2> Users Feedback </h2>
        </div>
        <div className="content">
          <div className="row">
            {
              testimonials.map((testimonial, idx) => (
                <div className="col-lg-4" key={idx}>
                  <div className="testi-card">
                    <div className="info">
                      <span className="card-tag"> {testimonial.category} </span>
                      <p> “ {testimonial.content} ” </p>
                      <div className="stars">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                      </div>
                      <img src="/assets/img/testimonials/testi_13_icon.png" alt="" className="icon" />
                    </div>
                    <div className="img">
                      <img src={testimonial.image} alt="" className="user_img" />
                      <h6> {testimonial.author.name} </h6>
                      <p> {testimonial.author.position} </p>
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

export default Testimonial