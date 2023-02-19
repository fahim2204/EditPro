import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import features from '@data/ITCreative/features.json';

SwiperCore.use([Autoplay]);

import "swiper/css";
import 'swiper/css/autoplay';

const Features = () => {
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoad(true);
    });
  }, []);

  return (
    <section className="features style-7 section-padding">
      <div className="container">
        <div className="section-head text-center style-4 mb-40">
          <div className="top-title mb-10">
            <img src="/assets/img/line_l.png" alt="" />
            <h5> Features </h5>
            <img src="/assets/img/line_r.png" alt="" />
          </div>
          <h2 className="">
            Built With Best <span> Features </span> <br /> & Good UX
          </h2>
        </div>
      </div>
      <div className="content">
        <div className="features-slider7">
          {
            load && (
              <Swiper
                spaceBetween={50}
                centeredSlides={true}
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
                    slidesPerView: 2,
                  },
                  1200: {
                    slidesPerView: 3,
                  }
                }}
              >
                {
                  features.map((feature, index) => (
                    <SwiperSlide key={index}>
                      <a href="#" className="features-card style-7">
                        <div className="icon">
                          <img src={feature.image} alt="" />
                        </div>
                        <div className="info">
                          <p className="color-999"> Features {feature.id} </p>
                          <h5> {feature.title.part1} <br /> {feature.title.part2} </h5>
                        </div>
                      </a>
                    </SwiperSlide>
                  ))
                }
              </Swiper>
            )
          }
        </div>
        <div className="btns text-center mt-10">
          <a href="#0" className="btn btn-icon-circle rounded-pill bg-blue7 fw-bold text-white me-4 mb-4 mb-lg-0">
            <small> Learn More <i className="fas fa-long-arrow-alt-right"></i> </small>
          </a>
          <a href="#0" className="btn btn-icon-circle rounded-pill bg-white fw-bold me-4">
            <small> Purchase Now <i className="fas fa-long-arrow-alt-right bg-light"></i> </small>
          </a>
        </div>
      </div>
      <img src="/assets/img/feat_circle.png" alt="" className="img-circle rotate-center" />
    </section>
  )
}

export default Features