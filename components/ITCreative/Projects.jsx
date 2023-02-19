import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Navigation, Mousewheel, Keyboard } from 'swiper';
import ProjectCard from './ProjectCard';
import projects from '@data/ITCreative/projects.json';

SwiperCore.use([Autoplay, Navigation, Mousewheel, Keyboard]);

import "swiper/css";
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/mousewheel';
import 'swiper/css/keyboard';

const Projects = () => {
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoad(true);
    });
  }, []);

  return (
    <section className="projects style-7 section-padding">
      <div className="content">
        <div className="row">
          <div className="col-lg-3 col-sm-6">
            <div className="section-head style-4 mb-50">
              <div className="top-title mb-10">
                <img src="/assets/img/line_l.png" alt="" />
                <h5> Case Study </h5>
              </div>
              <h2 className="">
                Creative <span> Works </span> <br /> We Done
              </h2>
            </div>
            <div className="projects-tabs">
              <ul className="nav nav-pills flex-column mb-3" id="pills-tab" role="tablist">
                {
                  projects.types.map((type, index) => (
                    <li className="nav-item" role="presentation" key={index}>
                      <button className={`nav-link ${index === 0 ? 'active' : ''}`} id={`pills-proj${type.id}-tab`} data-bs-toggle="pill" data-bs-target={`#pills-proj${type.tab}`} type="button" role="tab" aria-controls={`pills-proj${type.tab}`} aria-selected="true">
                        <i className="fal fa-long-arrow-right me-2 color-blue7"></i> {type.title}
                      </button>
                    </li>
                  ))
                }
              </ul>
              <div className="swiper-button-next">
                <i className="far fa-long-arrow-right"></i>
              </div>
              <div className="swiper-button-prev">
                <i className="far fa-long-arrow-left"></i>
              </div>
            </div>
          </div>
          <div className="col-lg-9">
            <div className="tab-content" id="pills-tabContent">
              {
                projects.tabs.map((tab, index) => (
                  <div className={`tab-pane fade ${index === 0 ? 'show active' : ''}`} id={`pills-proj${tab.id}`} role="tabpanel" aria-labelledby={`pills-proj${tab.id}-tab`} key={index}>
                    <div className="projects-slider7">
                      {
                        load && (
                          <Swiper
                            spaceBetween={40}
                            speed={1000}
                            pagination={false}
                            navigation={{
                              nextEl: '.projects.style-7 .swiper-button-next',
                              prevEl: '.projects.style-7 .swiper-button-prev',
                            }}
                            mousewheel={false}
                            keyboard={true}
                            autoplay={{
                              delay: 5000,
                            }}
                            observer={true}
                            observeParents={true}
                            loop={false}
                            breakpoints={{
                              0: {
                                slidesPerView: 1,
                              },
                              480: {
                                slidesPerView: 1,
                              },
                              787: {
                                slidesPerView: 1,
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
                              tab.projects.map((project, i) => (
                                <SwiperSlide key={i}>
                                  <ProjectCard project={project} />
                                </SwiperSlide>
                              ))
                            }
                          </Swiper>
                        )
                      }
                    </div>
                  </div>
                ))
              }
              <a href="#0" className="btn btn-icon-circle rounded-pill bg-white fw-bold mt-50">
                <small> More Projects <i className="fas fa-long-arrow-alt-right bg-light"></i> </small>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects