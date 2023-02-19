import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import testimonials from '@data/PaymentSolutions/testimonials.json';

import "swiper/css";
import "swiper/css/autoplay";

SwiperCore.use([Autoplay]);

const Testimonials = () => {
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setLoad(true);
  }, []);

  return (
    <section className="testimonials section-padding style-14">
      <div className="container">
        <div className="section-head mb-100">
          <p className="color-red1 text-uppercase fw-bold mb-10"> testimonials </p>
          <h2 className="fs-1"> Users Feedback </h2>
        </div>
        <div className="content">
          <div className="testimonials-slider14">
            {
              load && (
                <Swiper
                  className="swiper-container overflow-visible"
                  spaceBetween={50}
                  speed={1000}
                  autoplay={{
                    delay: 5000
                  }}
                  loop={false}
                  pagination={false}
                  navigation={false}
                  breakpoints={{
                    0: {
                      slidesPerView: 1,
                    },
                    480: {
                      slidesPerView: 1,
                    },
                    787: {
                      slidesPerView: 2,
                    },
                    991: {
                      slidesPerView: 2,
                    },
                    1200: {
                      slidesPerView: 3,
                    }
                  }}
                >
                  {
                    testimonials.map((testimonial, index) => (
                      <SwiperSlide key={index}>
                        <div className="testi-card">
                          <div className="icon img-contain">
                            <img src={testimonial.image} alt="" />
                          </div>
                          <div className="user-img img-cover">
                            <img src={testimonial.pic} alt="" />
                          </div>
                          <div className="info">
                            <div className="stars">
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                            </div>
                            <div className="text">
                              “ {testimonial.text} ”
                            </div>
                            <h6> {testimonial.author} </h6>
                            <p className="color-red1 text-uppercase"> {testimonial.position} </p>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))
                  }
                </Swiper>
              )
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials