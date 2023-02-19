import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import portfolios from '@data/Digital/portfolio.json';

import "swiper/css";
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

SwiperCore.use([Navigation, Pagination, Autoplay]);

const Portfolio = () => {
  return (
    <section className="portfolio section-padding bg-gray style-1" data-scroll-index="4">
      <div className="container">
        <div className="row">
          <div className="col offset-lg-1">
            <div className="section-head mb-60">
              <h6 className="color-main text-uppercase wow fadeInUp">Portfolio</h6>
              <h2 className="wow fadeInUp">
                Latest Projects <span className="fw-normal">From Our Team</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="content wow fadeIn slow">
          <div className="portfolio-slider">
            <Swiper
              className="swiper-container"
              slidesPerView={3}
              spaceBetween={30}
              speed={1000}
              pagination={{
                el: ".portfolio-slider .swiper-pagination"
              }}
              navigation={{
                nextEl: '.portfolio-slider .swiper-button-next',
                prevEl: '.portfolio-slider .swiper-button-prev'
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
                  slidesPerView: 2
                },
                787: {
                  slidesPerView: 2
                },
                991: {
                  slidesPerView: 3
                },
                1200: {
                  slidesPerView: 3
                }
              }}
            >
              {
                portfolios.map((portfolio, index) => (
                  <SwiperSlide key={index}>
                    <div className="portfolio-card">
                      <div className="img">
                        <img src={portfolio.image} alt="" />
                      </div>
                      <div className="info">
                        <h5>
                          <Link href="/page-single-project-5">
                            <a>{ portfolio.title }</a>
                          </Link>
                        </h5>
                        <small className="d-block color-main text-uppercase">
                          {
                            portfolio.types.map((type, i) => (<a href="#" className="me-1" key={i}>{ type }</a>))
                          }
                        </small>
                        <div className="text">
                          { portfolio.text }
                        </div>
                        <div className="tags">
                          {
                            portfolio.tags.map((tag, i) => (<a href="#" className="me-1" key={i}>{ tag }</a>))
                          }
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))
              }
            </Swiper>

            <div className="swiper-pagination"></div>

            <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div>
          </div>
        </div>
      </div>
      <img src="/assets/img/projects/prog/shap_r.png" alt="" className="shap_r" />
      <img src="/assets/img/projects/prog/shap_l.png" alt="" className="shap_l" />
    </section>
  )
}

export default Portfolio