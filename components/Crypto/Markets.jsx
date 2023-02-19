import React from 'react';
import marketsData from '@data/Crypto/markets.json';

const Markets = () => {
  return (
    <section className="markets section-padding style-15">
      <div className="container">
        <div className="section-head text-center mb-70 wow fadeInUp">
          <h6 className="text-uppercase fw-bold lh-8"> <img src="/assets/img/icons/home_15_icon.png" alt="" className="icon-30 me-2" />  <span> exchnage </span>  <img src="/assets/img/icons/home_15_icon.png" alt="" className="icon-30 ms-2" /> </h6>
          <h2 className="fs-1"> Interested You Today </h2>
        </div>
        <div className="content">
          <div className="markets-table">
            <div className="table-head wow fadeInUp">
              <div className="item">
                <p> Instrument </p>
              </div>
              <div className="item">
                <p> Last Price </p>
              </div>
              <div className="item">
                <p> 24H Change </p>
              </div>
              <div className="item">
                <p> 24H Change </p>
              </div>
            </div>
            <div className="table-body">
              {
                marketsData.map((row, idx) => (
                  <div className="body-row wow fadeInUp" key={idx}>
                    <div className="item">
                      <div className="icon-40 me-3">
                        <img src={row.paymentIcon} alt="" />
                      </div>
                      <p className="text-white-50"> <strong className="text-white text-uppercase"> {row.from} </strong> /{row.to} </p>
                    </div>
                    <div className="item">
                      <p className="text-white-50"> <strong className="text-white me-1"> {row.price} </strong> ${row.price} </p>
                    </div>
                    <div className="item">
                      <p className={row.lastDayChange.operator === '+' ? 'per-up' : 'color-red2'}> {row.lastDayChange.operator}{row.lastDayChange.change}% </p>
                    </div>
                    <div className="item">
                      <p className="text-white w-100"> <strong> ${row.lastDayPrice.dollar}  </strong> </p>
                      <p className="text-white-50 w-100"> <strong> {row.lastDayPrice.crypto}  </strong> </p>
                    </div>
                    <div className="item">
                      <img src="/assets/img/icons/line_chart.png" alt="" className="line_chart" />
                    </div>
                    <div className="item">
                      <a href="#" className="trad-btn"> Trade Now </a>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
          <div className="text-center wow fadeInUp">
            <a href="#0" className="btn rounded-pill bg-red2 fw-bold text-white mt-40" target="_blank">
              <span> View More Market <i className="fal fa-long-arrow-right ms-2"></i> </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Markets