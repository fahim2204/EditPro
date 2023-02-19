import React from 'react'

const About = () => {
  return (
    <section className="about style-15 section-padding">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-5">
            <div className="info wow fadeInUp">
              <div className="section-head mb-30">
                <h6 className="text-uppercase fw-bold lh-8"> <img src="/assets/img/icons/home_15_icon.png" alt="" className="icon-30 me-2" />  <span> core features </span> </h6>
                <h2 className="fs-1"> Most Trusted & Secure Crypto Platform </h2>
              </div>
              <p> When We Save this Money for Investors, They can be an Reinvest the Save Money </p>
              <ul>
                <li> <i className="fal fa-check me-3 color-red2"></i> <span> Start investing now, on Iteck crypto </span> </li>
                <li> <i className="fal fa-check me-3 color-red2"></i> <span> To buy and sell cryptocurrency assets </span> </li>
              </ul>
              <a href="#0" className="btn rounded-pill bg-red2 fw-bold text-white mt-40" target="_blank">
                <span> Compare With Other Crypto <i className="fal fa-angle-down ms-2"></i> </span>
              </a>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="img wow fadeInUp" data-wow-delay="0.2s">
              <img src="/assets/img/about/about_15_img.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About