import React from 'react'

const Contact = () => {
  return (
    <section className="contact style-14">
      <div className="container">
        <div className="contact-card">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="section-head text-center mb-50">
                <p className="color-red1 text-uppercase fw-bold mb-10"> You can do anything in this world, as long as you can navigate it. </p>
                <h2 className="fs-1"> Ready To Thrive? Start Today With Our Free Payment Solution. </h2>
              </div>
              <div className="text-center">
                <a href="#0" className="btn rounded-pill text-white bg-red1 fw-bold hover-shadow me-3" target="_blank">
                  <small> Get Started Now <i className="fal fa-long-arrow-right ms-1"></i> </small>
                </a>
                <a href="#0" className="btn rounded-pill text-dark bg-white hover-red1 fw-bold border-1 brd-gray" target="_blank">
                  <small> Learn More </small>
                </a>
              </div>
            </div>
          </div>
          <img src="/assets/img/contact_14_back.png" alt="" className="img_back slide_up_down" />
        </div>
      </div>
    </section>
  )
}

export default Contact