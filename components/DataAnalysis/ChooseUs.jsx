import React from 'react'

const ChooseUs = () => {
  return (
    <section className="choose-us style-8 section-padding">
      <div className="container">
        <div className="row gx-0 justify-content-between">
          <div className="col-lg-5">
            <div className="info">
              <div className="section-head style-8 wow fadeInUp">
                <h6> why choose us </h6>
                <h3> Track And Analyze Your Business Statistics </h3>
              </div>
              <div className="row">
                <div className="col-6">
                  <div className="choose-card  wow fadeInUp">
                    <div className="icon">
                      <img src="/assets/img/icons/ch7.svg" alt="" />
                    </div>
                    <h6> Target Audience </h6>
                    <span className="arrow"> <i className="fal fa-long-arrow-right"></i> </span>
                  </div>
                </div>
                <div className="col-6">
                  <div className="choose-card wow fadeInUp" data-wow-delay="0.2s">
                    <div className="icon">
                      <img src="/assets/img/icons/ch8.svg" alt="" />
                    </div>
                    <h6> Various Options </h6>
                    <span className="arrow"> <i className="fal fa-long-arrow-right"></i> </span>
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-center mt-40 wow fadeInUp">
                <a href="#" className="butn bg-orange1 border-0 rounded-pill hover-shadow flex-shrink-0" type="submit">
                  <span className="text-white"> Get Started Now <i className="fal fa-long-arrow-right ms-2"></i> </span>
                </a>
                <div className="inf ms-4">
                  <p className="color-999"> Support Email </p>
                  <a href="#" className="color-000 fw-bold"> info@support-iteck.com </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="img mt-5 mt-lg-0 wow fadeIn">
              <img src="/assets/img/choose_us/3d_vector1.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ChooseUs