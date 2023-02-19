import React from 'react'

const About = () => {
  return (
    <section className="about style-8 section-padding bg-gray2">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-6">
            <div className="img mb-4 mb-lg-0 wow fadeIn">
              <img src="/assets/img/about/3d_vector2.svg" alt="" />
            </div>
          </div>
          <div className="col-lg-5">
            <div className="info">
              <div className="section-head style-8 mb-40">
                <h6 className="wow fadeInUp"> about our service </h6>
                <h3 className="wow fadeInUp"> We offer Real-time <br /> Data Solutions. </h3>
              </div>
              <p className="color-666 wow fadeInUp"> Stay focused and productive with a clean and clutter-free note space the flexible ways to organize </p>
              <ul className="mt-30">
                <li className="wow fadeInUp">
                  <img src="/assets/img/about/icon3.svg" alt="" className="icon" />
                  <p> Various AI Data Analysis Options </p>
                </li>
                <li className="wow fadeInUp">
                  <img src="/assets/img/about/icon3.svg" alt="" className="icon" />
                  <p> Auto Generate AI Content </p>
                </li>
              </ul>
              <div className="d-flex align-items-center mt-40 wow fadeInUp">
                <div className="author">
                  <div className="img icon-60 rounded-circle overflow-hidden img-cover me-3 flex-shrink-0">
                    <img src="/assets/img/testimonials/user7.png" alt="" />
                  </div>
                  <div className="inf">
                    <p> Certified By </p>
                    <h6> Alonso D.Dowson </h6>
                  </div>
                </div>
                <img src="/assets/img/about/signature.svg" alt="" className="signature ms-5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About