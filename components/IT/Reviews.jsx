import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Navigation, Autoplay, EffectFade } from 'swiper';
import reviews from '@data/IT/reviews.json';

import "swiper/css";
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

SwiperCore.use([Pagination, Navigation, Autoplay, EffectFade]);

const Reviews = () => {
  return (
    <section className="reviews style-2 border-top brd-light section-padding bg-darkBlue" data-scroll-index="5">
      <div className="container">
        <div className="section-head mb-30 text-center">
          <h2 className="text-white ltspc-20 text-uppercase fs-1 lh-1 mb-70">reviews</h2>
        </div>
        <div className="reviews_slider">
          <Swiper
            className="swiper-container"
            effect="fade"
            slidesPerView={1}
            spaceBetween={0}
            speed={1000}
            pagination={{
              el: ".reviews_slider .swiper-pagination",
              clickable: true,
            }}
            navigation={{
              nextEl: '.reviews_slider .swiper-button-next',
              prevEl: '.reviews_slider .swiper-button-prev',
            }}
            mousewheel={false}
            keyboard={true}
            autoplay={{
              delay: 4000,
            }}
            loop={true}
          >
            {
              reviews.map((review, index) => (
                <SwiperSlide key={index}>
                  <div className="row justify-content-center">
                    <div className="col-lg-7">
                      <div className="reviews_card text-center style-2">
                        <h5 className="text-white lh-4">
                          “{ review.review }”
                        </h5>
                        <div className="rev_user">
                          <img src={review.userImage} alt="" />
                        </div>
                        <div className="rev_stars">
                          { Array(review.stars).fill().map((_, i) => (<i className="bi bi-star-fill" key={i}></i>)) }
                        </div>
                        <small className="text-white mt-2 d-block">
                          <span className="text-uppercase color-lightBlue">{ review.username }</span> <span className="op-7">/ { review.userPosition }</span>
                        </small>
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
      <img src="/assets/img/review/rev_l.png" alt="" className="rev_l" />
      <img src="/assets/img/review/rev_r.png" alt="" className="rev_r" />
    </section>
  )
}

export default Reviews