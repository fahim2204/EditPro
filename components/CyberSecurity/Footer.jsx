import React from 'react'

const Footer = () => {
  return (
    <footer className="style-10">
      <div className="container">
        <div className="content section-padding overflow-hidden">
          <div className="row gx-5">
            <div className="col-lg-4">
              <div className="info-card border-blue7">
                <h5 className="color-666 fw-normal text-capitalize mb-10"> Head Office </h5>
                <h5> 12/A, New Booston, <br /> NYC info@webmail.com </h5>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="info-card mt-5 mt-lg-0">
                <h5 className="color-666 fw-normal text-capitalize mb-10"> Sub Office </h5>
                <h5> Pablo Hemilton Tower, Tokyo <br /> jobs@example.com </h5>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 offset-lg-1">
              <div className="subscribe-card mt-5 mt-lg-0">
                <h5 className="mb-30 fw-bold lh-1"> Get Newsletter </h5>
                <div className="form-group">
                  <span className="icon"> <i className="fas fa-envelope-open"></i> </span>
                  <input type="text" placeholder="Email address" />
                  <button type="submit"> Subscribe </button>
                </div>
                <p> ** We are not going to save data </p>
              </div>
            </div>
          </div>
        </div>
        <div className="foot">
          <div className="row align-items-center">
            <div className="col-lg-3 col-sm-6">
              <a className="navbar-brand" href="#">
                <img src="/assets/img/logo_10.png" alt="" />
              </a>
            </div>
            <div className="col-lg-6">
              <div className="links text-center">
                <a href="#" className="mx-4"> About </a>
                <a href="#" className="mx-4"> Career </a>
                <a href="#" className="mx-4"> Faq </a>
                <a href="#" className="mx-4"> Insights </a>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 text-lg-end">
              <div className="social-icons">
                <a href="#"> <i className="fab fa-facebook-f"></i> </a>
                <a href="#"> <i className="fab fa-twitter"></i> </a>
                <a href="#"> <i className="fab fa-behance"></i> </a>
                <a href="#"> <i className="fab fa-youtube"></i> </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img src="/assets/img/footer/footer_10_pattern.png" alt="" className="pattern" />
    </footer>
  )
}

export default Footer