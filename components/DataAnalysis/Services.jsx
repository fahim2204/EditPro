import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import services from '@data/DataAnalysis/services.json';

SwiperCore.use([Autoplay]);

import "swiper/css";
import 'swiper/css/autoplay';

const Services = () => {
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoad(true);
    });
  }, []);

  return (
    <section className="services style-8 section-padding">
      <div className="container">
        <div className="section-head style-8 text-center mb-80 wow fadeInUp">
          <h6> our services </h6>
          <h3> Our Experties Field </h3>
        </div>
      </div>
      <div className="content wow fadeInUp">
        <div className="services-slider8 pb-60">
          {
            load && (
              <Swiper
                spaceBetween={50}
                speed={10000}
                autoplay={{
                  delay: 1
                }}
                loop={true}
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
                    slidesPerView: 3,
                  },
                  1200: {
                    slidesPerView: 4,
                  }
                }}
              >
                {
                  services.map((service, index) => (
                    <SwiperSlide key={index}>
                      <div className="service-card style-8">
                        <div className="icon">
                          <img src={service.image} alt="" />
                        </div>
                        <div className="info">
                          <h5>{service.title}</h5>
                          <p>{service.text}</p>
                          <a href="#"> Read More </a>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))
                }
              </Swiper>
            )
          }
        </div>
        <div className="container">
          <div className="btm-info pt-20 border-1 border-top brd-gray wow fadeInDown">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <h5> See Plan Details And Pricing For More Informations </h5>
              </div>
              <div className="col-lg-6 text-lg-end">
                <a href="#" className="pe-4 me-4 border-1 border-end brd-gray"> <i className="fas fa-server color-main me-1"></i> Daily Backups </a>
                <a href="#"> <i className="fas fa-shield color-main me-1"></i> Free Migrations </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services