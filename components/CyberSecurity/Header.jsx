import React from 'react'
import Navbar from '@components/Navbars/CyberNav'

const Header = () => {
  return (
    <header className="style-10">
      <div className="navs-container">
        <Navbar />
      </div>
      <div className="container">
        <div className="content pt-50">
          <div className="row align-items-center gx-0">
            <div className="col-lg-6">
              <div className="info">
                <h6> From The Market Ieaders In Data Intelligence </h6>
                <h1> Trusted Data For Every Users </h1>
                <div className="btns mt-50">
                  <a href="#0" className="btn btn-icon-circle rounded-pill bg-blue7 fw-bold text-white me-4" target="_blank">
                    <small> Request For Demo <i className="fas fa-long-arrow-alt-right"></i> </small>
                  </a>
                  <a href="#0" className="btn btn-icon-circle rounded-pill fw-bold brd-light text-white hover-blue7">
                    <small> Get Started Now <i className="fas fa-long-arrow-alt-right bg-light"></i> </small>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="img">
                <img src="/assets/img/header/header10_img.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="logos">
          <p className="text-center color-orange2"> Intregrated With: </p>
          <div className="logos-content">
            <a href="#" className="logo_img img-contain"> <img src="/assets/img/logos/28.png" alt="" /> </a>
            <a href="#" className="logo_img img-contain"> <img src="/assets/img/logos/29.png" alt="" /> </a>
            <a href="#" className="logo_img img-contain"> <img src="/assets/img/logos/30.png" alt="" /> </a>
            <a href="#" className="logo_img img-contain"> <img src="/assets/img/logos/31.png" alt="" /> </a>
            <a href="#" className="logo_img img-contain"> <img src="/assets/img/logos/32.png" alt="" /> </a>
            <a href="#" className="logo_img img-contain"> <img src="/assets/img/logos/33.png" alt="" /> </a>
            <a href="#" className="logo_img img-contain"> <img src="/assets/img/logos/34.png" alt="" /> </a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header