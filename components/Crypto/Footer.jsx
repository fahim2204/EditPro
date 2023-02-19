import React from 'react'

const Footer = () => {
  return (
    <footer className="style-15">
      <div className="container">
        <div className="content">
          <div className="foot-logo-social mb-70">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="foot-logo">
                  <img src="/assets/img/logo_15.png" alt="" />
                </div>
              </div>
              <div className="col-lg-6 text-lg-end">
                <div className="social-icons">
                  <a href="#"> <i className="fab fa-facebook-f"></i> </a>
                  <a href="#"> <i className="fab fa-twitter"></i> </a>
                  <a href="#"> <i className="fab fa-behance"></i> </a>
                  <a href="#"> <i className="fab fa-youtube"></i> </a>
                </div>
              </div>
            </div>
          </div>
          <div className="links-content">
            <div className="row justify-content-between gx-0">
              <div className="col-lg-4">
                <h6 className="sub-title"> our company </h6>
                <div className="main-links">
                  <ul>
                    <li> <a href="#"> About us </a> </li>
                    <li> <a href="#"> Price & Plans </a> </li>
                    <li> <a href="#"> Blog </a> </li>
                    <li> <a href="#"> Support </a> </li>
                    <li> <a href="#"> Media Center </a> </li>
                    <li> <a href="#"> Get In Touch </a> </li>
                    <li> <a href="#"> Careers </a> </li>
                    <li> <a href="#"> FAQ </a> </li>
                    <li> <a href="#"> Licenses & Registration </a> </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <h6 className="sub-title"> get in touch </h6>
                <div className="links">
                  <ul>
                    <li> <i className="fas fa-phone color-red2 me-2"></i> <a href="#"> +888 999 777 88 </a> </li>
                    <li> <i className="fas fa-envelope-open color-red2 me-2"></i> <a href="#"> info@webmail.com </a> </li>
                    <li> <i className="fas fa-globe color-red2 me-2"></i> <a href="#"> www.example-web.com </a> </li>
                    <li> <i className="fas fa-map-marker-alt color-red2 me-2"></i> <a href="#"> 7/A, New Booston, NYC </a> </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2">
                <h6 className="sub-title"> Mobile app </h6>
                <div className="down-imgs">
                  <a href="#" className="img mt-30">
                    <img src="/assets/img/foot_15_down1.png" alt="" />
                  </a>
                  <a href="#" className="img mt-20">
                    <img src="/assets/img/foot_15_down2.png" alt="" />
                  </a>
                </div>
              </div>
              <div className="col-lg-2">
                <h6 className="sub-title"> our products </h6>
                <div className="links">
                  <ul>
                    <li> <a href="#"> Buy Crypto </a> </li>
                    <li> <a href="#"> Earn Crypto Interest </a> </li>
                    <li> <a href="#"> Instant Crypto Credit Lines™ </a> </li>
                    <li> <a href="#"> Crypto Exchange </a> </li>
                    <li> <a href="#"> iTeck Crypto Card </a> </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="foot">
          <p> Copyright & Design By <a href="#" className="text-white"> @ThemeCamp </a> - 2022 </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer