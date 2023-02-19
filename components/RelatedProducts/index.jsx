import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Autoplay } from 'swiper';
import relatedProducts from '@data/App/related-products.json';
import relatedProductsRTL from '@data/App/related-products-rtl.json';

import "swiper/css";
import 'swiper/css/autoplay';
import 'swiper/css/navigation';

SwiperCore.use([Navigation, Autoplay]);

const RelatedProducts = ({ style = "4", rtl }) => {
  const data = rtl ? relatedProductsRTL : relatedProducts;

  return (
    <section className="related-products section-padding">
      <div className="container">
        <div className="text-center title">
          <h3>{ rtl ? 'منتجات مشابهة' : 'Related Products' }</h3>
        </div>
        <div className="related-products-slider position-relative">
          <Swiper
            className="swiper-container"
            slidesPerView={5}
            spaceBetween={24}
            speed={1000}
            pagination={false}
            navigation={{
              nextEl: '.related-products-slider .swiper-button-next',
              prevEl: '.related-products-slider .swiper-button-prev',
            }}
            mousewheel={false}
            keyboard={true}
            autoplay={{
              delay: 4000,
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
                slidesPerView: 3
              },
              1200: {
                slidesPerView: 5
              }
            }}
          >
            {
              data.map((product, index) => (
                <SwiperSlide key={index}>
                  <div className="product-card">
                    <div className="img">
                      <img src={product.image} alt="" />
                      {
                        product.label && (<span className={`label ${product.label==='new'?'new':'sale-off'}`}>{ product.label }</span>)
                      }
                      <span className={`fav-btn ${product.liked?'active':''}`}> <i className="fas fa-heart"></i> </span>
                    </div>
                    <div className="info">
                      <h6 className="category">{ product.category }</h6>
                      <h5 className="title">{ product.title }</h5>
                      <div className="rate">
                        <div className="stars">
                        {
                          Array(5).fill(0).map((_, index) => (<i key={index} className={`fas fa-star ${index + 1 <= product.rating ? 'active':''}`}></i>))
                        }
                        </div>
                        <span className="rev ms-1">{ product.reviews } { rtl ? 'المراجعات' : 'Reviews' }</span>
                      </div>
                    </div>
                    <div className="price">
                      {
                        typeof product.price === 'string' ? "$" + (product.price) : (
                          <>
                            <span className="price-sale">${ product.price.new }</span> <span className="old-price">${ product.price.old }</span>
                          </>
                        )
                      }
                    </div>
                    <a href="#" className={`btn rounded-pill bg-blue${style} fw-bold text-white mt-20`} target="_blank">
                      <span> { rtl ? 'اضف إلى السلة' : 'Add To Cart' } </span>
                    </a>
                  </div>
                </SwiperSlide>
              ))
            }
          </Swiper>
          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
        </div>
      </div>
    </section>
  )
}

export default RelatedProducts