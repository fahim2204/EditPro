/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import Navbar from '@components/Navbars/HelpDeskNav';
import TopNav from '@components/Navbars/HelpDeskNav/TopNav';

const Header = () => {
  return (
    <header className="style-11">
      <div className="navs-container">
        <TopNav />
        <Navbar />
      </div>
      <div className="container">
        <div className="content section-padding">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="info">
                <h6> //  Build better bonds automatically </h6>
                <h1> A Simple Ticketing System For a Team Like Yours </h1>
                <p className="color-999 me-5 d-inline-block"> <i className="fal fa-check me-2"></i> Ready-to-use automations </p>
                <p className="color-999 d-inline-block"> <i className="fal fa-check me-2"></i> Free 14-day trial </p>
                <div className="btns mt-50">
                  <a href="#0" className="btn rounded-pill bg-green fw-bold text-white" target="_blank">
                    <small> Get Started Now </small>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="img">
                <img src="/assets/img/header/header_11_img.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header