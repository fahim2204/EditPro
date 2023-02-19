import React from 'react';
import testimonials from '@data/Preview/testimonials.json';

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

const Testimonials = () => {
  return (
    <section className="testim-curv section-padding">
      <div className="container-xxl">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-10">
            <div className="sec-head text-center mb-80">
              <h2 className="color-000 text-capitalize">Real people, real stories. Hear from <br /> our community.</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="testim-grida">
              <div className="swiper-container">
                <Swiper
                  className="swiper-wrapper" 
                  slidesPerView={3} 
                  spaceBetween={50} 
                  centeredSlides={true} 
                  loop={true}
                  autoplay={true}
                  breakpoints={{
                    1920: {
                      slidesPerView: 3,
                    },
                    1028: {
                      slidesPerView: 3,
                    },
                    480: {
                      slidesPerView: 1,
                    }
                  }}
                >
                  {
                    testimonials.map((testimonial, i) => (
                      <SwiperSlide key={i}>
                        <div className="item">
                          <div className="icon-img icon-40">
                            <img src="/landing-preview/img/quotes.png" alt="" />
                          </div>
                          <div className="text mb-30">
                            <span className="rate-star fz-10 mb-10">
                              {Array(testimonial.stars).fill().map((_, s) => <i className="fas fa-star me-1" key={s}></i>)}
                            </span>
                            <p>
                              {
                                testimonial.comment.includes('<br>') ?
                                  (
                                    <>
                                      { testimonial.comment.split('<br>')[0] } <br /> { testimonial.comment.split('<br>')[1] }
                                    </>
                                  )
                                  :
                                  (
                                    testimonial.comment
                                  )
                              }
                            </p>
                          </div>
                          <div className="cont d-flex">
                            <div className="img-flex valign">
                              <div className="img">
                                <img src="/landing-preview/img/envato.png" alt=""
                                  className="circle-img" />
                              </div>
                            </div>
                            <div className="info valign ms-4">
                              <div>
                                <h6>{ testimonial.author }</h6>
                                <span className="text-u ls1 fz-12">For <span className="fw-700 gr-sunset-text">{ testimonial.reason }</span></span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))
                  }
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials