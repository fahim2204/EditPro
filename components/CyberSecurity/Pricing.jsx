import React from 'react'

const Pricing = () => {
  return (
    <section className="pricing style-10 section-padding">
      <div className="container">
        <div className="text-center mb-40">
          <p className="color-blue7 mb-10"> Price & Plans </p>
          <h2> Packages For Everyone </h2>
        </div>
        <div className="content">
          <div className="pricing-table">
            <div className="table-titles">
              <div className="main-head">
                <div className="icon">
                  <img src="/assets/img/pricing/money.png" alt="" />
                </div>
                <p> You pay <strong> $49.00/mo </strong> today renews june 2024 for <strong> $59.00/mo </strong> </p>
              </div>
              <div className="main-body d-none d-lg-block">
                <ul>
                  <li> Team </li>
                  <li> Installed Agent </li>
                  <li> Real-Time Feedback </li>
                  <li> Video Dedicated Support </li>
                  <li> Attacked Targets Per Month </li>
                </ul>
              </div>
            </div>
            <div className="table-body-card">
              <div className="sub-head">
                <p className="color-blue7 mb-2"> Starter </p>
                <h2> $19.00 <small> /mo </small> </h2>
                <a href="#0" className="btn btn-icon-circle rounded-pill fw-bold brd-gray hover-orange2">
                  <small> Purchase Now <i className="fas fa-long-arrow-alt-right bg-blue7 text-white"></i> </small>
                </a>
              </div>
              <div className="sub-body">
                <ul>
                  <li> <strong> Team </strong> 02 </li>
                  <li> <strong> Installed Agent </strong> 12 </li>
                  <li> <strong> Real-Time Feedback </strong> Limited </li>
                  <li> <strong> Video Dedicated Support </strong>  Limited </li>
                  <li> <strong> Attacked Targets Per Month </strong> 100 </li>
                </ul>
              </div>
            </div>
            <div className="table-body-card recommended-card">
              <div className="sub-head">
                <p className="text-white mb-2"> Advance </p>
                <h2> $49.00 <small> /mo </small> </h2>
                <a href="#0" className="btn btn-icon-circle rounded-pill fw-bold brd-gray bg-orange2 border-0">
                  <small> Purchase Now <i className="fas fa-long-arrow-alt-right text-dark bg-white"></i> </small>
                </a>
              </div>
              <div className="sub-body">
                <ul>
                  <li> <strong> Team </strong> 06 </li>
                  <li> <strong> Installed Agent </strong> 50 </li>
                  <li> <strong> Real-Time Feedback </strong> 24/7 </li>
                  <li> <strong> Video Dedicated Support </strong>  24/7 </li>
                  <li> <strong> Attacked Targets Per Month </strong> 1000 </li>
                </ul>
              </div>
            </div>
            <div className="table-body-card">
              <div className="sub-head">
                <p className="color-blue7 mb-2"> Team Plan </p>
                <h2> $99.00 <small> /mo </small> </h2>
                <a href="#0" className="btn btn-icon-circle rounded-pill fw-bold brd-gray hover-orange2">
                  <small> Purchase Now <i className="fas fa-long-arrow-alt-right bg-blue7 text-white"></i> </small>
                </a>
              </div>
              <div className="sub-body">
                <ul>
                  <li> <strong> Team </strong> 10 </li>
                  <li> <strong> Installed Agent </strong> 100 </li>
                  <li> <strong> Real-Time Feedback </strong> unLimited </li>
                  <li> <strong> Video Dedicated Support </strong>  Anytime </li>
                  <li> <strong> Attacked Targets Per Month </strong> 10000 </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing