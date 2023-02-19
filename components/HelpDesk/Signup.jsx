import React from 'react'

const Signup = () => {
  return (
    <section className="signup style-11 section-padding bg-light">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7">
            <div className="section-head text-center wow fadeInUp">
              <h6 className="color-green text-uppercase"> //    Get free trail    // </h6>
              <h2 className="fs-1"> That delights your customers and fuels your sales </h2>
            </div>
            <div className="content mb-80 wow fadeInUp">
              <div className="form-group">
                <span className="icon"> <i className="fas fa-envelope-open"></i> </span>
                <input type="text" className="form-control" placeholder="Business email" />
                <button> sign up free </button>
              </div>
              <div className="text fw-bold text-uppercase mt-20 d-flex justify-content-around">
                <span> <i className="fal fa-check-circle color-green me-1"></i> Free 14-day trial </span>
                <span> <i className="fal fa-check-circle color-green me-1"></i> Automation </span>
                <span> <i className="fal fa-check-circle color-green me-1"></i> Omnichannel messaging </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img src="/assets/img/pattern_signUp.png" alt="" className="pattern slide_up_down" />
    </section>
  )
}

export default Signup