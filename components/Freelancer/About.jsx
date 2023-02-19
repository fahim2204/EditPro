import React from 'react'

const About = () => {
  return (
    <section className="about style-13">
      <div className="container">
        <div className="content">
          <div className="row">
            <div className="col-lg-8">
              <div className="info">
                <h5> About Me </h5>
                <div className="text">
                  I’m an freelance ui & ux designer with over two decades of experience. I’ve covered both Milan’s fashion week and the US primaries in the same year. Above all, I believe that fair and free press is fundamental to with healthy society the core ideal behind my work.
                </div>
                <div className="logos">
                  <img src="/assets/img/about/logo1.png" alt="" />
                  <img src="/assets/img/about/logo2.png" alt="" />
                  <img src="/assets/img/about/logo3.png" alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="about-contact">
                <div className="item mt-5 mt-lg-0">
                  <div className="inf">
                    <p> Full Name </p>
                    <h6> Miranda H. Halim </h6>
                  </div>
                  <div className="icon">
                    <img src="/assets/img/icons/ab_13_1.png" alt="" />
                  </div>
                </div>
                <div className="item mt-30">
                  <div className="inf">
                    <p> Email Address </p>
                    <h6> info@webmail.com </h6>
                  </div>
                  <div className="icon">
                    <img src="/assets/img/icons/ab_13_2.png" alt="" />
                  </div>
                </div>
                <div className="item mt-30">
                  <div className="inf">
                    <p> Phone </p>
                    <h6> +111 222 333 44 </h6>
                  </div>
                  <div className="icon">
                    <img src="/assets/img/icons/ab_13_3.png" alt="" />
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

export default About