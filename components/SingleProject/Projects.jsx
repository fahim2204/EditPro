import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Autoplay, Navigation } from 'swiper';
import projectsData from '@data/SingleProject/projects.json';
import projectsDataRTL from '@data/SingleProject/projects-rtl.json';

import "swiper/css";
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

SwiperCore.use([Pagination, Autoplay, Navigation]);

const Projects = ({ style = "4", rtl }) => {
  const projects = rtl ? projectsDataRTL : projectsData;

  return (
    <section className="projects style-6 p-0">
      <div className="content section-padding rounded-0">
        <div className="container">
          <div className={`section-head text-center mb-60 style-${style}`}>
            <h2 className="mb-20">{ rtl ? 'المشاريع' : 'Related' } <span>{ rtl ? 'ذات الصلة' : 'Projects' }</span> </h2>
            <p>{ rtl ? 'لدينا فريق من ذوي الخبرة من موظفي الإنتاج والتفتيش لضمان الجودة' : 'We have an experienced team of production and inspection personnel to ensure quality.' }</p>
          </div>
          <div className="slider-3items slider-style-6">
            <Swiper
              className="swiper-container pb-0"
              slidesPerView={3}
              spaceBetween={0}
              speed={1000}
              pagination={{
                el: ".slider-3items .swiper-pagination",
                clickable: true
              }}
              navigation={{
                nextEl: '.slider-3items .swiper-button-next',
                prevEl: '.slider-3items .swiper-button-prev'
              }}
              mousewheel={false}
              keyboard={true}
              autoplay={{
                delay: 4000
              }}
              loop={true}
              breakpoints={{
                0: {
                  slidesPerView: 1
                },
                480: {
                  slidesPerView: 1
                },
                787: {
                  slidesPerView: 2
                },
                991: {
                  slidesPerView: 2
                },
                1200: {
                  slidesPerView: 3
                }
              }}
            >
              {
                projects.map((project, index) => (
                  <SwiperSlide key={index}>
                    <div className="project-card style-6" style={{ direction: rtl ? 'rtl':'ltr' }}>
                      <div className="img">
                        <img src={project.image} alt="" />
                      </div>
                      <div className="info">
                        <h3 className="title">
                          <Link href={rtl ? "/rtl-page-single-project" : "/page-single-project-5" }><a>{ project.title }</a></Link>
                        </h3>
                        <small className="color-blue6">
                          {
                            project.type.map((type, i) => (
                              <span key={i}>
                                <a href="#">{ type }</a>
                                { i !== project.type.length - 1 && <> &&nbsp;</> }
                              </span>
                            ))
                          }
                        </small>
                        <div className="text">
                          { project.text }
                        </div>
                        <div className="tags">
                          {
                            project.tags.map((tag, i) => (
                              <span key={i} className="me-1">
                                <a href="#">{ tag }</a>
                              </span>
                            ))
                          }
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))
              }
            </Swiper>

            <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects