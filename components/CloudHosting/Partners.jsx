import React from 'react'

const Partners = () => {
  return (
    <section className="clients style-9 section-padding bg-gray2">
      <div className="container">
        <div className="section-head text-center style-9 mb-80 wow fadeInUp">
          <h6> All in one place </h6>
          <h2> Partner Programs </h2>
        </div>
        <div className="content">
          <div className="row">
            <div className="col-lg-6">
              <div className="client-card wow fadeInUp">
                <div className="row">
                  <div className="col-md-3">
                    <div className="img">
                      <img src="/assets/img/icons/prt1.png" alt="" />
                    </div>
                  </div>
                  <div className="col-md-9">
                    <div className="info">
                      <h5> Reseller Hosting </h5>
                      <p> Get everything you need to start and run your web hosting and domain business.  </p>
                      <a href="#" className="mt-30"> <i className="far fa-long-arrow-right l-arrow me-2"></i> Read More <i className="far fa-long-arrow-right r-arrow ms-2"></i> </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="client-card mt-4 mt-md-0 wow fadeInUp" data-wow-delay="0.2s">
                <div className="row">
                  <div className="col-md-3">
                    <div className="img">
                      <img src="/assets/img/icons/prt2.png" alt="" />
                    </div>
                  </div>
                  <div className="col-md-9">
                    <div className="info">
                      <h5> Iteck <span> Pro </span> Version </h5>
                      <p> Spend less time managing client sites, and free up your day to create more and manage less. </p>
                      <a href="#" className="mt-30"> <i className="far fa-long-arrow-right l-arrow me-2"></i> Read More <i className="far fa-long-arrow-right r-arrow ms-2"></i> </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="logos-content">
            <h4 className=" wow fadeInUp"> <span> 25K+ </span> Installation & Featured On </h4>
            <div className="logos">
              <a href="#" className=" wow fadeInUp"> <img src="/assets/img/logos/23.png" alt="" /> </a>
              <a href="#" className=" wow fadeInUp" data-wow-delay="0.2s"> <img src="/assets/img/logos/24.png" alt="" /> </a>
              <a href="#" className=" wow fadeInUp" data-wow-delay="0.4s"> <img src="/assets/img/logos/25.png" alt="" /> </a>
              <a href="#" className=" wow fadeInUp" data-wow-delay="0.6s"> <img src="/assets/img/logos/26.png" alt="" /> </a>
              <a href="#" className=" wow fadeInUp" data-wow-delay="0.8s"> <img src="/assets/img/logos/27.png" alt="" /> </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Partners