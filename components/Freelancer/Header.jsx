import React from 'react';

const Header = () => {
  return (
    <header className="style-13">
      <div className="container">
        <div className="content">
          <div className="row align-items-center gx-0">
            <div className="col-lg-6">
              <div className="info">
                <p className="color-999 text-uppercase mb-10"> Welcome To My Portfolio </p>
                <h1> I’m Miranda Halim <span className="text-decoration-underline"> UX Designer </span> </h1>
                <div className="btns d-flex align-content-center mt-30">
                  <a href="#0" className="btn rounded-pill text-white bg-orange3" target="_blank">
                    <small> Download CV </small>
                  </a>
                  <div className="skp ms-3">
                    <p className="color-999">Skype</p>
                    <h6> Miranda.Designer </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="img mt-5 mt-lg-0">
                <img src="/assets/img/header/head_13_hero.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="social-icons">
        <a href="#"> <i className="fab fa-youtube"></i> </a>
        <a href="#"> <i className="fab fa-dribbble"></i> </a>
        <a href="#"> <i className="fab fa-behance"></i> </a>
        <a href="#"> <i className="fab fa-facebook-f"></i> </a>
      </div>
      <div className="head-contact">
        <a href="mailto:info@webmail.com" className="me-4"> info@webmail.com </a>
        <a href="callto:+908 999 000 11"> +908 999 000 11 </a>
      </div>
      <div className="lines">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  )
}

export default Header