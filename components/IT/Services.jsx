import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Navigation, Autoplay } from 'swiper';
import services from '@data/IT/services.json';

import "swiper/css";
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

SwiperCore.use([Pagination, Navigation, Autoplay]);

const Services = () => {
  return (
    <section className="services_projects section-padding">
      <div className="container">
        <div data-scroll-index="2" data-scroll-internal-section>
          <div className="section-head mb-30 text-center">
            <h2 className="text-white ltspc-20 text-uppercase fs-1 lh-1 mb-70">services</h2>
          </div>
          <div className="services_slider position-relative">
            <Swiper
              className="swiper-container"
              slidesPerView={3}
              spaceBetween={30}
              speed={1000}
              pagination={{
                  el: ".services_slider .swiper-pagination",
                  clickable: true,
              }}
              navigation={{
                  nextEl: '.services_slider .swiper-button-next',
                  prevEl: '.services_slider .swiper-button-prev',
              }}
              mousewheel={false}
              keyboard={true}
              autoplay={{
                  delay: 4000
              }}
              loop={true}
              breakpoints={{
                0:{
                    slidesPerView: 1
                },
                480:{
                    slidesPerView: 2
                },
                787:{
                    slidesPerView: 2
                },
                991:{
                    slidesPerView: 3
                },
                1200:{
                    slidesPerView: 3
                }
              }}
            >
              {
                services.services.map((service, index) => (
                  <SwiperSlide key={index}>
                    <div className="service-box text-white text-center px-4 py-2 brd-light border-end style-2">
                      <div className="icon mb-30">
                        <img src={service.image} alt="" />
                      </div>
                      <div className="info">
                        <h4>{ service.title }</h4>
                        <p className="op-7 mt-20 mb-30 px-3">{ service.desc }</p>
                        <div className="tags d-flex flex-wrap justify-content-center mt-30 style-2">
                          {
                            service.tags.map((tag, i) => (<a href="#" key={i}>{ tag }</a>))
                          }
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))
              }
            </Swiper>
            <div className="pagination_circle position-relative pagi_white mt-70">
              <div className="swiper-pagination"></div>
            </div>
          </div>
        </div>
        <div data-scroll-index="3" data-scroll-internal-section>
          <div className="section-head mb-30 text-center">
            <h2 className="text-white ltspc-20 text-uppercase fs-1 lh-1 mb-70 pt-100">works</h2>
          </div>
          <div className="works_slider position-relative">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="swiper-container">
                  <Swiper
                    className="swiper-wrapper"
                    slidesPerView={3}
                    spaceBetween={30}
                    speed={1000}
                    pagination={{
                      el: ".works_slider .swiper-pagination",
                      clickable: true,
                    }}
                    navigation={{
                      nextEl: '.works_slider .swiper-button-next',
                      prevEl: '.works_slider .swiper-button-prev',
                    }}
                    mousewheel={false}
                    keyboard={true}
                    autoplay={{
                      delay: 4000
                    }}
                    loop={true}
                    breakpoints={{
                      0:{
                        slidesPerView: 1
                      },
                      480:{
                        slidesPerView: 1
                      },
                      787:{
                        slidesPerView: 2
                      },
                      991:{
                        slidesPerView: 2
                      },
                      1200:{
                        slidesPerView: 2
                      }
                    }}
                  >
                    {
                      services.works.map((work, index) => (
                        <SwiperSlide key={index}>
                          <div className="work_card text-center d-block">
                            <div className="img img-cover radius-6 overflow-hidden imgrotate-scale-hover">
                              <img src={work.image} alt="" />
                            </div>
                            <div className="info">
                              <h4 className="text-white mt-4">
                                <Link href="/page-single-project-5"><a>{ work.title }</a></Link>
                              </h4>
                              <small className="color-lightBlue text-uppercase">
                                {
                                  work.tags.map((tag, i) => (
                                    <a href="#" className="me-1" key={i}>{ tag }</a>
                                  ))
                                }
                              </small>
                            </div>
                          </div>
                        </SwiperSlide>
                      ))
                    }
                  </Swiper>
                </div>
              </div>
            </div>
            <div className="swiper-button-next radius-50 bg-transparent border brd-light"></div>
            <div className="swiper-button-prev radius-50 bg-transparent border brd-light"></div>
          </div>
          <div className="text-center">
            <Link href="/page-portfolio-5">
              <a className="btn sm-butn border text-white radius-9 mt-60 hover-darkBlue">
                <span>See All Projects</span>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services