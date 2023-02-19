import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import services from '@data/Startup/services.json';
import servicesRTL from '@data/Startup/services-rtl.json';

import "swiper/css";

const Services = ({ rtl }) => {
  const servicesData = rtl ? servicesRTL : services;

  return (
    <section className="services section-padding style-6" data-scroll-index="2">
      <div className="container">
        <div className="section-head mb-40 text-center style-6">
          {
            rtl ? 
            (
              <>
                <h2 className="mb-20">
                  استكشف ماذا نقدم من <span> <small>خدمات</small> </span>
                </h2>
                <p>تتضمن استراتيجيتنا التطور المستمر ، لضمان إنتاج مُحسنات محركات بحث استثنائية لـلمشاريع.</p>
              </>
            )
            :
            (
              <>
                <h2 className="mb-20">
                  Discover our top <span><small>services</small></span>
                </h2>
                <p>Our strategy includes consistently evolving, to ensure we’re producing exceptional SEO for business.</p>
              </>
            )
          }
        </div>
      </div>
      <div className="content">
        <div className="services-slider position-relative style-6">
          <Swiper
            className="swiper-container"
            slidesPerView={6}
            centeredSlides={true}
            spaceBetween={0}
            speed={1000}
            pagination={false}
            navigation={false}
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
                slidesPerView: 4
              },
              1200: {
                slidesPerView: 6
              }
            }}
          >
            {
              servicesData.map((service, index) => (
                <SwiperSlide key={index}>
                  <Link href={`/${rtl ? 'rtl-page-services':'page-services-5'}`}>
                    <a className="service-card style-6">
                      <div className="icon">
                        <img src={service.img} alt="" />
                      </div>
                      <div className="info">
                        <h5>{ service.info }</h5>
                        <div className="text">
                          { service.text }
                        </div>
                      </div>
                    </a>
                  </Link>
                </SwiperSlide>
              ))
            }
          </Swiper>
        </div>
        <div className="text-center">
          <Link href={`/${rtl ? 'rtl-page-services':'page-services-5'}`}>
            <a className="btn rounded-pill butn-blue6 hover-blue2 sm-butn fw-bold me-3">
              <span>{ rtl ? "مشاهدة جميع خدماتنا" : "See All Our Services" } <i className="bi bi-arrow-right ms-1"></i></span>
            </a>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Services