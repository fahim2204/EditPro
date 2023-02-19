import { useState } from 'react';
import plans from '@data/DataAnalysis/plans.json';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css'

const Pricing = () => {
  const [range, setRange] = useState(20);

  const sliderChange = (value) => {
    setRange(value);
  }

  return (
    <section className="pricing style-8 bg-gray2">
      <div className="pricing-head wow fadeInUp">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div className="section-head style-8">
                <h6> our plans </h6>
                <h3 className="text-white"> Minimalist Plans </h3>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="position-relative">
                <Slider
                  value={range}
                  onChange={sliderChange}
                  railStyle={{ backgroundColor: '#151515', height: '5px' }}
                  trackStyle={{ backgroundColor: `#0066FF`, height: '5px' }}
                />
                <p className="users-number"> <input type="text" id="amount" value={range} readOnly /> <span> users </span>  </p>
              </div>
            </div>
            <div className="col-lg-2">
              <div className="pricing-tabsHead text-center">
                <div className="price-radios">
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="monthly-input"
                      value="option1" />
                    <label className="form-check-label" htmlFor="monthly-input">
                      Monthly
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="yearly-input"
                      value="option2" checked />
                    <label className="form-check-label" htmlFor="yearly-input">
                      yearly
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pricing-body">
        <div className="container">
          <div className="content">
            <div className="row">
              {
                plans.map((plan, index) => (
                  <div className={`col-lg-4 ${plan.head ? '' : 'pt-60'} order-0 order-lg-0 wow fadeInUp`} data-wow-delay={`${index * 0.2}s`} key={index}>
                    {
                      plan.head && (
                        <div className="popular-head">
                          <p> { plan.head } </p>
                        </div>
                      )
                    }
                    <div className="pricing-card">
                      <div className="pricing-title">
                        <h2> { plan.title } </h2>
                        <p> { plan.description } </p>
                      </div>
                      <div className="price">
                        <p> Price: ${ plan.price } </p>
                        <a href="#" className="price-btn"> Purchase Now <i className="fal fa-long-arrow-right"></i> </a>
                      </div>
                      <div className="pricing-info">
                        <ul>
                          {
                            plan.features.map((feature, i) => (
                              <li key={i}>
                                <span className="icon">
                                  <img src="/assets/img/icons/numbers/8.png" alt="" />
                                </span>
                                <span> { feature } </span>
                              </li>
                            ))
                          }
                        </ul>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing