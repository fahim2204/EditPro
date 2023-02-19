import React, { useEffect } from 'react';
import TopNav from '@components/Navbars/TopNav-15';
import Navbar from '@components/Navbars/CryptoNav';
import timer from '@common/timer';

const Header = () => {
  useEffect(() => {
    setTimeout(() => {
      timer('nov 29, 2022 11:30');
    }, 0);
  }, []);

  return (
    <header className="style-15">
      <div className="navs-container">
        <TopNav />
        <Navbar />
      </div>
      <div className="container">
        <div className="content">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div className="info">
                <h6> <img src="/assets/img/icons/home_15_icon.png" alt="" className="icon-30 me-2" /> We've got your #crypto back </h6>
                <h1> Iteck is an innovative payment network & kind of money. </h1>
                <a href="#" className="butn bg-yellowGreen text-dark fw-bold rounded-pill">
                  <span> <i className="fas fa-wallet me-2"></i> Choose Wallet </span>
                </a>
                <a href="#" className="butn border-1 border-white border rounded-pill text-white ms-3 hover-red2">
                  <span> Buy Bitcoin </span>
                </a>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="img mt-50">
                <img src="/assets/img/header/head_15_img.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="countdown-content wow fadeInUp">
          <div className="countdown-card">
            <div className="row align-items-center">
              <div className="col-lg-3 col-sm-6">
                <div className="inf">
                  <h3> Token Sale is Live 5%  Bonus Ends In: </h3>
                  <a href="#" className="color-red2 text-uppercase mt-15"> register & Buy Now <i className="fal fa-long-arrow-right ms-2"></i> </a>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="countdown px-3">
                  <div className="item">
                    <h2 id="days"></h2>
                    <small> days </small>
                  </div>
                  <div className="item">
                    <h2 id="hours"></h2>
                    <small> Hours </small>
                  </div>
                  <div className="item">
                    <h2 id="minutes"></h2>
                    <small> Minute </small>
                  </div>
                  <div className="item">
                    <h2 id="seconds"></h2>
                    <small> Seconds </small>
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="progs-content ps-4">
                  <p className="text-end mb-15"> Hard Cap </p>
                  <div className="progress">
                    <div className="progress-bar" role="progressbar" style={{ width: '25%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  <div className="color-yellowGreen d-flex justify-content-between mt-20">
                    <div className="l-side"> <span className="text-white-50"> Raisen: </span> <span className="counter"> <small> $ </small> 65,556.80 </span> </div>
                    <div className="r-side"> <span className="counter">  <small> $ </small> 1,000,000 </span> </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="logos">
            <span className="text-white-50 fw-bold"> We accept: </span>
            <img src="/assets/img/logos/50.png" alt="" />
            <img src="/assets/img/logos/51.png" alt="" />
            <img src="/assets/img/logos/52.png" alt="" />
            <img src="/assets/img/logos/53.png" alt="" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header