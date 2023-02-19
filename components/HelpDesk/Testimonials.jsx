import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Keyboard, Pagination } from 'swiper';
import ModalVideo from "react-modal-video";
import testimonials from '@data/HelpDesk/testimonials.json';

SwiperCore.use([Autoplay, Keyboard, Pagination]);

import "react-modal-video/css/modal-video.css";
import "swiper/css";
import 'swiper/css/autoplay';
import 'swiper/css/keyboard';
import 'swiper/css/pagination';

const Testimonials = () => {
  const [load, setLoad] = useState(false);
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoad(true);
    });
  }, []);

  const openVideo = (e) => {
    e.preventDefault();
    setOpen(true);
  }

  return (
    <section className="testimonials pt-100 style-11">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section-head mb-70 text-center wow fadeInUp">
              <h6 className="color-green text-uppercase"> //    User Feedbacks    // </h6>
              <h2 className="fs-1"> Worldwide use Iteck to support customers </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="testimonials-slider11 wow fadeInUp" data-wow-delay="0.1s">
          <div className="container">
            {
              load && (
                <Swiper
                  className="swiper-container"
                  slidesPerView={1}
                  spaceBetween={0}
                  speed={1000}
                  pagination={{
                    el: ".testimonials-slider11 .swiper-pagination",
                    clickable: true,
                  }}
                  navigation={false}
                  mousewheel={false}
                  keyboard={true}
                  autoplay={{
                    delay: 6000
                  }}
                  loop={true}
                >
                  {
                    testimonials.map((testimonial, idx) => (
                      <SwiperSlide className="swiper-slide" key={idx}>
                        <div className="testimonial-card">
                          <div className="row gx-0">
                            <div className="col-lg-6">
                              <div className="img img-cover">
                                <img src="/assets/img/testimonials/1.jpg" alt="" />
                                <a href="https://www.youtube.com/watch?v=pGbIOC83-So&t=21s" data-lity className="play_icon" onClick={openVideo}>
                                  <i className="fas fa-play"></i>
                                </a>
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="info">
                                <div className="icon">
                                  <img src="/assets/img/testimonials/logo1.png" alt="" />
                                </div>
                                <h4> “ Iteck embraces everything we needed when it comes, to asynchronous customer communication. ” </h4>
                                <div className="author">
                                  <div className="img icon-50 rounded-circle overflow-hidden img-cover me-3 flex-shrink-0">
                                    <img src="/assets/img/testimonials/user7.png" alt="" />
                                  </div>
                                  <div className="inf">
                                    <p> Head Of Idea </p>
                                    <h6> Alonso D.Dowson </h6>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))
                  }
                </Swiper>
              )
            }
            <div className="swiper-pagination"></div>
          </div>
        </div>
        <div className="logos-content section-padding wow fadeInUp" data-wow-delay="0.2s">
          <div className="container">
            <div className="logos">
              <div className="row">
                <div className="col-lg-3 col-sm-6 col-6">
                  <a href="#" className="logo">
                    <img src="/assets/img/logos/35.png" alt="" />
                  </a>
                </div>
                <div className="col-lg-3 col-sm-6 col-6">
                  <a href="#" className="logo">
                    <img src="/assets/img/logos/36.png" alt="" />
                  </a>
                </div>
                <div className="col-lg-3 col-sm-6 col-6">
                  <a href="#" className="logo">
                    <img src="/assets/img/logos/37.png" alt="" />
                  </a>
                </div>
                <div className="col-lg-3 col-sm-6 col-6">
                  <a href="#" className="logo">
                    <img src="/assets/img/logos/38.png" alt="" />
                  </a>
                </div>
              </div>
            </div>
            <p> <strong> 1000+ </strong> Happy Sponsors Around The World </p>
          </div>
        </div>
      </div>
      {
        typeof window !== "undefined" &&
        (
          <ModalVideo
            channel="youtube"
            autoplay
            isOpen={isOpen}
            videoId="pGbIOC83-So"
            onClose={() => setOpen(false)}
          />
        )
      }
    </section>
  )
}

export default Testimonials