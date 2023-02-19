import React from 'react'

const Recommends = () => {
  return (
    <section className="Recommends section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section-head text-center wow fadeInUp">
              <h6 className="color-green text-uppercase"> //    Recommends    // </h6>
              <h2 className="fs-1"> Leading industry experts recommend Iteck </h2>
            </div>
          </div>
        </div>
        <div className="content mt-70">
          <div className="row justify-content-between gx-0">
            <div className="col-lg-2 col-5">
              <div className="img mb-30 wow fadeInUp">
                <img src="/assets/img/choose_us/1.svg" alt="" />
              </div>
            </div>
            <div className="col-lg-2 col-5">
              <div className="img mb-30 wow fadeInUp" data-wow-delay="0.2s">
                <img src="/assets/img/choose_us/2.svg" alt="" />
              </div>
            </div>
            <div className="col-lg-2 col-5">
              <div className="img mb-30 wow fadeInUp" data-wow-delay="0.4s">
                <img src="/assets/img/choose_us/3.svg" alt="" />
              </div>
            </div>
            <div className="col-lg-2 col-5">
              <div className="img mb-30 wow fadeInUp" data-wow-delay="0.6s">
                <img src="/assets/img/choose_us/4.png" alt="" />
              </div>
            </div>
            <div className="col-lg-2 col-5">
              <div className="img mb-30 wow fadeInUp" data-wow-delay="0.8s">
                <img src="/assets/img/choose_us/5.png" alt="" />
              </div>
            </div>
          </div>
          <p className="color-666 pt-20 border-1 border-top brd-gray text-center mt-50 wow fadeInDown"> Generate leads, create help tickets, and chat across channels <a href="#" className="color-000 fw-bold"> Get Started Now </a> </p>
        </div>
      </div>
    </section>
  )
}

export default Recommends