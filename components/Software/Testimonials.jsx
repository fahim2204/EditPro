import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Navigation, Autoplay } from 'swiper';
import testimonials from '@data/Software/testimonials.json';

import "swiper/css";
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

SwiperCore.use([Pagination, Navigation, Autoplay]);

const Testimonials = () => {
  return (
    <section className="testimonials style-3" data-scroll-index="1">
      <div className="container">
        <div className="content section-padding">
          <div className="section-head style-3">
            <h3>Loved By Thousand <span>Clients</span></h3>
          </div>
          <div className="testimonial-slider style-3">
            <Swiper
              className="swiper-container"
              slidesPerView={3}
              spaceBetween={100}
              speed={1000}
              pagination={{
                el: ".testimonial-slider.style-3 .swiper-pagination",
                clickable: true
              }}
              navigation={{
                nextEl: '.testimonial-slider.style-3 .swiper-button-next',
                prevEl: '.testimonial-slider.style-3 .swiper-button-prev'
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
                testimonials.map((testimonial, index) => (
                  <SwiperSlide className="swiper-slide" key={index}>
                    <div className="testimonial-card style-3">
                      <div className="text">
                        { testimonial.text }
                      </div>
                      <div className="user-img mt-30 d-flex align-items-center">
                        <div className="img icon-40 img-cover rounded-circle overflow-hidden me-3">
                          <img src={testimonial.image} alt="" />
                        </div>
                        <div className="inf">
                          <p className="fw-bold">{ testimonial.author }</p>
                          <small className="text-muted">{ testimonial.position }</small>
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
        <img src="/assets/img/testimonials/testi3_lines.png" alt="" className="testi_lines w-100" />
      </div>
    </section>
  )
}

export default Testimonials