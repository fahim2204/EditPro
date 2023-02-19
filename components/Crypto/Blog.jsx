import React from 'react'

const Blog = () => {
  return (
    <section className="blog section-padding style-15">
      <div className="container">
        <div className="row align-items-end mb-70 wow fadeInUp">
          <div className="col-lg-6">
            <div className="section-head">
              <h6 className="text-uppercase fw-bold lh-8"> <img src="/assets/img/icons/home_15_icon.png" alt="" className="icon-30 me-2" />  <span> news </span> </h6>
              <h2 className="fs-1"> Blog & Insights </h2>
            </div>
          </div>
          <div className="col-lg-6 text-lg-end">
            <a href="#" className="butn border-1 brd-light border rounded-pill text-white hover-red2 mb-2">
              <span> More News <i className="fal fa-long-arrow-right ms-2"></i> </span>
            </a>
          </div>
        </div>
        <div className="content">
          <div className="row">
            <div className="col-lg-8">
              <div className="main-card wow fadeInUp">
                <div className="row gx-0">
                  <div className="col-lg-6">
                    <div className="img img-cover">
                      <img src="/assets/img/blog/25.jpg" alt="" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="info">
                      <div className="cont">
                        <h6 className="color-red2 text-uppercase mb-3"> <a href="#"> crypto, </a> <a href="#"> bitcoin </a> </h6>
                        <h4> <a href="#"> When it comes to magazine and news websites. </a> </h4>
                        <p> It comes to magazine and news websites, WordPress is top of the bill. Well-known news sites like The New York Times </p>
                        <a href="#" className="author mt-40">
                          <div className="icon-60 rounded-circle overflow-hidden img-cover me-3 flex-shrink-0">
                            <img src="/assets/img/team/9.jpg" alt="" />
                          </div>
                          <div className="inf">
                            <h6> Rosalina D. William </h6>
                            <p> Posted: June 22, 2023 </p>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="center_icon img-contain">
                  <img src="/assets/img/icons/blog_15_icon.png" alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="sub-card wow fadeInUp" data-wow-delay="0.2s">
                <div className="img img-cover">
                  <img src="/assets/img/blog/26.jpg" alt="" />
                  <div className="center_icon img-contain">
                    <img src="/assets/img/icons/blog_15_icon.png" alt="" />
                  </div>
                </div>
                <div className="info">
                  <div className="cont">
                    <h6 className="color-red2 text-uppercase mb-3"> <a href="#"> crypto, </a> <a href="#"> bitcoin </a> </h6>
                    <h4> <a href="#"> When it comes to magazine and news websites. </a> </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Blog