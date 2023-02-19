import testimonials from '@data/DataAnalysis/testimonials.json';

const Testimonials = () => {
  return (
    <section className="testimonials style-8 section-padding bg-gray2">
      <div className="container">
        <div className="section-head text-center style-8 mb-80 wow fadeInUp">
          <h6> testimonials </h6>
          <h3> Happy User Reviews </h3>
        </div>
        <div className="content">
          <div className="row">
            {
              testimonials.map((testimonial, index) => (
                <div className="col-lg-4" key={index}>
                  <div className="testi-card wow fadeInUp">
                    <div className="info">
                      <div className="stars">
                        { Array(testimonial.stars).fill().map((_, i) => <i className="fas fa-star" key={i}></i>) }
                      </div>
                      <p> “ { testimonial.text } ” </p>
                      <img src="/assets/img/icons/qout8.png" alt="" className="icon" />
                    </div>
                    <div className="author mt-40">
                      <div className="img icon-60 rounded-circle overflow-hidden img-cover me-3 flex-shrink-0">
                        <img src={ testimonial.author.image } alt="" />
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