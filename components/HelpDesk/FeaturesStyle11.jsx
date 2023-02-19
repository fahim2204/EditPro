import React from 'react'

const FeaturesStyle11 = () => {
  return (
    <section className="features style-11">
      <div className="container">
        <div className="content section-padding border-1 border-top brd-gray">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-5">
              <div className="info">
                <div className="section-head wow fadeInUp">
                  <h6 className="color-green text-uppercase"> //    Core Features </h6>
                  <h2 className="fs-1"> Why Should You Use Our Iteck Helpdesk </h2>
                </div>
                <ul>
                  <li className="wow fadeInUp" data-wow-delay="0.1s">
                    <img src="/assets/img/icons/features/22.png" alt="" className="icon" />
                    <p> Show off your goods in elegant product cards and make more sales while chatting </p>
                  </li>
                  <li className="wow fadeInUp" data-wow-delay="0.2s">
                    <img src="/assets/img/icons/features/23.png" alt="" className="icon" />
                    <p> Qualify leads online with custom forms and AI chatbot automations </p>
                  </li>
                </ul>
                <a href="#0" className="btn rounded-pill fw-bold border-1 border brd-gray hover-green mt-40 wow fadeInUp" data-wow-delay="0.3s" target="_blank">
                  <small> Learn More </small>
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="features-cards">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="cards-side">
                      <div className="feat-card wow fadeInUp">
                        <div className="icon">
                          <img src="/assets/img/icons/features/24.png" alt="" />
                        </div>
                        <h3> <span> Chatbot </span> Pro Intregrations </h3>
                        <p> Automate customer service with AI support </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="cards-side">
                      <div className="feat-card wow fadeInUp" data-wow-delay="0.2s">
                        <div className="icon">
                          <img src="/assets/img/icons/features/25.png" alt="" />
                        </div>
                        <h3> <span> HelpDesk </span> Auto Generate </h3>
                        <p> Support customers with tickets generate </p>
                      </div>
                      <div className="feat-card mt-30 wow fadeInUp" data-wow-delay="0.4s">
                        <div className="icon">
                          <img src="/assets/img/icons/features/26.png" alt="" />
                        </div>
                        <h3> <span> Knowledgebase </span> Ready </h3>
                        <p> Guide and educate customer in easy way </p>
                      </div>
                    </div>
                  </div>
                </div>
                <img src="/assets/img/feat_11_pattern.png" alt="" className="pattern rotate-center" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturesStyle11