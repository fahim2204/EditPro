import React from 'react'

const About = () => {
  return (
    <section className="about style-10 section-padding">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="imgs">
              <div className="row gx-3">
                <div className="col-lg-6 pt-60">
                  <div className="img img-cover">
                    <img src="/assets/img/about/about_10_1.jpg" alt="" />
                  </div>
                  <div className="img img-cover mt-3">
                    <img src="/assets/img/about/about2_2.png" alt="" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="img img-cover">
                    <img src="/assets/img/about/about_10_2.jpg" alt="" />
                  </div>
                  <div className="img img-cover mt-3">
                    <img src="/assets/img/about/about_10_3.jpg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="info">
              <h6> Since From 2000 </h6>
              <h2> We Provide Professional <br /> Security Solutions </h2>
              <p> Cybersecurity is the practice of protecting systems, networks, <br /> and programs from digital attacks. </p>
              <p> These cyberattacks are usually aimed at accessing, changing, <br /> or destroying sensitive information; extorting money from user <br /> or interrupting normal business processes. </p>
              <a href="#0" className="btn btn-icon-circle rounded-pill bg-blue7 fw-bold text-white mt-50" target="_blank">
                <small> Learn More <i className="fas fa-long-arrow-alt-right"></i> </small>
              </a>
            </div>
          </div>
        </div>
      </div>
      <img src="/assets/img/about/about10_pattern.png" alt="" className="pattern" />
    </section>
  )
}

export default About