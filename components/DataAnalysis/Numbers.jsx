import { useState, useEffect, useRef } from 'react';
import CountTo from '../CountTo';
import numbers from '@data/DataAnalysis/numbers.json';

const Numbers = () => {
  const numbersSectionRef = useRef(null);
  const [position] = useState({ from: 2500, to: 2750 });


  return (
    <section className="numbers style-8 pt-100">
      <div className="container">
        <div className="section-head style-8 text-center mb-80 wow fadeInUp">
          <h6> support platform </h6>
          <h3> Intregrations Platforms </h3>
        </div>
        <div className="content">
          <div className="logo-icon wow zoomIn">
            <img src="/assets/img/logo_home8_icon.png" alt="" />
          </div>
          <div className="plat-icons">
            <a href="#" className="icon icon-shadow slide_up_down">
              <img src="/assets/img/icons/numbers/1.png" alt="" />
            </a>
            <a href="#" className="icon slide_up_down">
              <img src="/assets/img/icons/numbers/2.png" alt="" />
            </a>
            <a href="#" className="icon icon-shadow slide_up_down">
              <img src="/assets/img/icons/numbers/3.png" alt="" />
            </a>
            <a href="#" className="icon slide_up_down">
              <img src="/assets/img/icons/numbers/4.png" alt="" />
            </a>
            <a href="#" className="icon icon-shadow slide_up_down">
              <img src="/assets/img/icons/numbers/5.png" alt="" />
            </a>
            <a href="#" className="icon icon-shadow slide_up_down">
              <img src="/assets/img/icons/numbers/6.png" alt="" />
            </a>
          </div>
          <img src="/assets/img/num8_circle.png" alt="" className="num8_circle rotate-center" />
        </div>
      </div>
      <div className="numbers-btm" ref={numbersSectionRef}>
        <div className="container">
          <div className="numbers-content">
            <div className="row">
              {
                numbers.map((number, idx) => (
                  <div className="col-lg-3 col-sm-6" key={idx}>
                    <div className="number-card style-8 mt-4 mt-lg-0 wow fadeInUp">
                      <div className="icon">
                        <img src={number.image} alt="" />
                      </div>
                      <div className="inf">
                        <h3> <CountTo className="counter" from={0} to={number.value} speed={1500} position={position} /> { number.operator } </h3>
                        <p>{ number.title }</p>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
      <img src="/assets/img/icons/numbers/7.png" alt="" className="r_shape rotate-center" />
    </section>
  )
}

export default Numbers