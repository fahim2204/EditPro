import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Autoplay } from 'swiper';

import "swiper/css";
import 'swiper/css/autoplay';
import 'swiper/css/navigation';

SwiperCore.use([Navigation, Autoplay]);

const Testimonials = ({ rtl }) => {
  return (
    <div className="testimonials style-6" data-scroll-index="5">
      <div className="container">
        <div className="row gx-0 align-items-center justify-content-between">
          <div className="col-lg-4">
            <div className="testi-slider style-6 slider-style-6">
              <div className="icon mb-50">
                <i className="fas fa-quote-right"></i>
              </div>
              <Swiper
                className="swiper-container"
                slidesPerView={1}
                spaceBetween={0}
                speed={1000}
                pagination={false}
                navigation={{
                  nextEl: '.testi-slider.style-6 .swiper-button-next',
                  prevEl: '.testi-slider.style-6 .swiper-button-prev',
                }}
                mousewheel={false}
                keyboard={true}
                autoplay={{
                  delay: 4000
                }}
                loop={true}
              >
                <SwiperSlide>
                  <div className="testi-card">
                    <div className="text">
                      {
                        rtl ? 
                        (
                          "لا أعرف ماذا أقول غير ذلك ، هذا شيء لم تره من قبل. تصميم فريد وخفيف الوزن ودعم متميز. من دواعي سروري دائما Itekseo العمل!"
                        )
                        :
                        (
                          "I don’t know what else to say, this is something that you haven’t seen before. Unique design, lightweight, and outstanding support. Itekseo always a pleasure to work!"
                        )
                      }
                    </div>
                    <div className="author mt-30">
                      {
                        rtl ?
                        <>
                          <span className="color-000 fw-bold text-capitalize">كونور مارتينيلى</span>
                          <p className="fs-10px">مدير في  <a href="#" className="text-decoration-underline color-blue6">فندق ومنتجع ايكولاند </a> </p>
                        </>
                        :
                        <>
                          <span className="color-000 fw-bold text-capitalize">Conor Martinelli</span>
                          <p className="fs-10px">Director at  <a href="#" className="text-decoration-underline color-blue6"> Ecoland Resort & Hotel</a> </p>
                        </>
                      }
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
              <div className="swiper-button-next"></div>
              <div className="swiper-button-prev"></div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="img">
              <img src="/assets/img/testimonials/users_6.png" alt="" className="" />
              <img src="/assets/img/testimonials/bubbls.png" alt="" className="bubbls rotate-center" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials