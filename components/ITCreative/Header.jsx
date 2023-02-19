import React from 'react'

const Header = () => {
  return (
    <header className="style-7">
      <div className="content">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="info mt-5 mt-lg-0">
                <div className="section-head style-4">
                  <div className="top-title">
                    <img src="/assets/img/line_l.png" alt="" />
                    <h5> Get Solid Solution </h5>
                  </div>
                </div>
                <h1>
                  Choose The <br /> <span className="num"> #01 </span> <span className="text-grad"> IT Solutions </span> <br /> WP Theme.
                </h1>
                <div className="d-flex flex-wrap">
                  <a href="#0" className="btn btn-icon-circle rounded-pill bg-blue7 fw-bold text-white me-4" target="_blank">
                    <small> Get Started Now <i className="fas fa-long-arrow-alt-right"></i> </small>
                  </a>
                  <div className="inf mt-3 mt-lg-0">
                    <p className="color-999"> Support Email </p>
                    <a href="#" className="fw-bold"> info@support-iteck.com </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="img mt-4 mt-lg-0">
                <img src="/assets/img/header/head_img7.png" alt="" />
                <img src="/assets/img/header/head7_rock.png" alt="" className="rock7 slide_up_down" />
              </div>
            </div>
            <div className="col-12">
              <div className="sponsers mt-30">
                <div className="title me-5 flex-shrink-0">
                  Happy <br /> <span className="fw-bold"> Sponsors </span>
                </div>
                <div className="sponsers-content">
                  <a href="#">
                    <img src="/assets/img/logos/18.png" alt="" />
                  </a>
                  <a href="#">
                    <img src="/assets/img/logos/19.png" alt="" />
                  </a>
                  <a href="#">
                    <img src="/assets/img/logos/20.png" alt="" />
                  </a>
                  <a href="#">
                    <img src="/assets/img/logos/21.png" alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img src="/assets/img/header/head7_bg.png" alt="" className="head7_bg slide_up_down" />
    </header>
  )
}

export default Header;