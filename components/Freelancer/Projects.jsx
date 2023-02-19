import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import projectsData from '@data/Freelancer/projects.json';

import "swiper/css";
import 'swiper/css/autoplay';

SwiperCore.use([Autoplay]);

const Projects = () => {
  const [loadSwiper, setLoadSwiper] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoadSwiper(true);
    }, 0);
  }, []);

  return (
    <section className="projects section-padding style-13 overflow-hidden">
      <div className="container">
        <div className="section-head text-center mb-40 style-13">
          <h6> portfolio </h6>
          <h2> Our Case & Projects </h2>
        </div>
        <div className="links-tabs">
          <ul className="nav nav-pills mb-40 justify-content-center" id="pills-tab" role="tablist">
            {
              projectsData.linkTabs.map((link, idx) => (
                <li className="nav-item" role="presentation" key={idx}>
                  <button className={`nav-link ${idx === 0 ? 'active' : ''}`} id={`pills-${link.id}-tab`} data-bs-toggle="pill" data-bs-target={`#pills-${link.tab}`} type="button" role="tab" aria-controls={link.control} aria-selected={idx === 0 ? 'true' : 'false'}>{link.name}</button>
                </li>
              ))
            }
          </ul>
        </div>
        <div className="tab-content" id="pills-tabContent">
          {
            projectsData.tabContent.map((tab, idx) => (
              <div className={`tab-pane fade ${idx === 0 ? 'show active' : ''}`} id={`pills-${tab.id}`} role="tabpanel" aria-labelledby={`pills-${tab.id}-tab`} key={idx}>
                <div className="projects-slider13">
                  {
                    loadSwiper && (
                      <Swiper
                        className="swiper-container overflow-visible"
                        spaceBetween={30}
                        observer={true}
                        observeParents={true}
                        speed={1000}
                        autoplay={{
                          delay: 5000
                        }}
                        loop={true}
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
                            slidesPerView: 2,
                          }
                        }}
                      >
                        {
                          tab.slides.map((slide, index) => (
                            <SwiperSlide key={index}>
                              <div className="project-card">
                                <a href="#" className="img img-cover">
                                  <img src={slide.image} alt="" />
                                  <div className="info">
                                    <div className="row align-items-center">
                                      <div className="col-8">
                                        <div className="inf">
                                          <p> {slide.subTitle} </p>
                                          <h6> {slide.title} </h6>
                                        </div>
                                      </div>
                                      <div className="col-4">
                                        <div className="logo">
                                          <img src="/assets/img/logos/39.png" alt="" />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </a>
                              </div>
                            </SwiperSlide>
                          ))
                        }
                      </Swiper>
                    )
                  }
                  <div className="text-center mt-50">
                    <a href="#0" className="btn rounded-pill text-dark bg-white border-1 brd-gray shadow-lg hover-orange3" target="_blank">
                      <small> More Works <i className="fal fa-plus ms-2"></i> </small>
                    </a>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
        <div className="links">
          <div className="links-content">
            <a href="#"> <img src="/assets/img/logos/40.png" alt="" /> </a>
            <a href="#"> <img src="/assets/img/logos/41.png" alt="" /> </a>
            <a href="#"> <img src="/assets/img/logos/42.png" alt="" /> </a>
            <a href="#"> <img src="/assets/img/logos/43.png" alt="" /> </a>
            <a href="#"> <img src="/assets/img/logos/44.png" alt="" /> </a>
          </div>
          <p className="text-center"> <strong> 10000+ </strong> Happy users from around the world </p>
        </div>
      </div>
    </section>
  )
}

export default Projects