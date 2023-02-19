import React from 'react'

const About = () => {
  return (
    <section className="about style-9 section-padding">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="img wow fadeIn">
              <img src="/assets/img/about/about9.svg" alt="" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="info">
              <div className="section-head style-9 mb-40">
                <h6 className=" wow fadeInUp"> about company </h6>
                <h2 className=" wow fadeInUp"> Safeguard Sites With Staging & Backups </h2>
              </div>
              <ul>
                <li className=" wow fadeInUp">
                  <span className="icon">
                    <img src="/assets/img/icons/ab9_1.png" alt="" />
                  </span>
                  <p> <strong className="color-darkBlue2"> Safely test changes: </strong> Test site updates, code modifications & content change. </p>
                </li>
                <li className=" wow fadeInUp">
                  <span className="icon">
                    <img src="/assets/img/icons/ab9_2.png" alt="" />
                  </span>
                  <p> <strong className="color-darkBlue2"> Easy development: </strong> Deploy files and database changes from your site. </p>
                </li>
              </ul>
              <div className="call-info pt-40 mt-40 wow fadeInUp">
                <h5> Call 000-111-2220 or Chat Now </h5>
                <p> International calling fees may apply </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About