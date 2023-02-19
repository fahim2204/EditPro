import React from 'react'

const ChatBanner = () => {
  return (
    <section className="chat-banner style-7">
      <div className="container">
        <div className="row align-items-end">
          <div className="col-lg-3 col-sm-6 d-none d-lg-block">
            <div className="img img1">
              <img src="/assets/img/vector1.png" alt="" />
            </div>
          </div>
          <div className="col-lg-5">
            <div className="info">
              <p> Hire Us For Your Project </p>
              <h3> Lets Work Together </h3>
              <div className="btns mt-50">
                <a href="#0" className="btn btn-icon-circle rounded-pill bg-black fw-bold text-white me-4 mb-3 mb-lg-0">
                  <small> Estimate Project <i className="fas fa-long-arrow-alt-right"></i> </small>
                </a>
                <a href="#0" className="btn btn-icon-circle rounded-pill fw-bold me-4 brd-light text-white hover-blue7">
                  <small> Contact Us <i className="fas fa-long-arrow-alt-right bg-light"></i> </small>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="img img2">
              <img src="/assets/img/vector2.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ChatBanner