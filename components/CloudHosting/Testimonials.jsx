import testimonialsData from '@data/CloudHosting/testimonials.json';

const Testimonials = () => {
  return (
    <section className="testimonials style-9 section-padding">
      <div className="container">
        <div className="testi-head mb-80 wow fadeInUp">
          <div className="row justify-content-between">
            <div className="col-lg-5">
              <h3> Trusted by 20+ Million Users Around The World. </h3>
            </div>
            <div className="col-lg-4 text-lg-end">
              <div className="reviews-numb">
                <div className="img">
                  <img src="/assets/img/testimonials/trust_logo.png" alt="" className="logo" />
                  <div className="stars">
                    <img src="/assets/img/testimonials/trust_star.png" alt="" className="star" />
                    <img src="/assets/img/testimonials/trust_star.png" alt="" className="star" />
                    <img src="/assets/img/testimonials/trust_star.png" alt="" className="star" />
                    <img src="/assets/img/testimonials/trust_star.png" alt="" className="star" />
                    <img src="/assets/img/testimonials/trust_star.png" alt="" className="star" />
                  </div>
                </div>
                <div className="info text-start">
                  <p className="color-666"> { testimonialsData.totalRating } out of 5 based on </p>
                  <h6 className="color-darkBlue2 fw-bold"> { testimonialsData.totalReviews } reviews </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="testi-body">
          <div className="row gx-5">
            {
              testimonialsData.testimonials.map((testimonial, index) => (
                <div className={`col-lg-4 ${index !== testimonialsData.testimonials.length - 1 ? 'border-1 border-end brd-gray wow fadeInUp':''}`} key={index}>
                  <div className={`testi-card p${index === 0 ? 'e' : index === 1 ? 'x' : 's'}-lg-4`}>
                    <div className="stars">
                      {
                        Array(testimonial.stars).fill().map((_,i) => <img key={i} src="/assets/img/testimonials/trust_star.png" alt="" className="star" />)
                      }
                    </div>
                    <div className="text">
                      “ { testimonial.content } ”
                    </div>
                    <div className="author">
                      <div className="img icon-60 rounded-circle overflow-hidden img-cover me-3 flex-shrink-0">
                        <img src={testimonial.author.image} alt="" />
                      </div>
                      <div className="inf">
                        <p> { testimonial.author.position } </p>
                        <h6> { testimonial.author.name } </h6>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials