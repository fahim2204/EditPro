import React from 'react';
import numbers from '@data/PaymentSolutions/numbers.json';

const Numbers = () => {
  return (
    <section className="numbers style-14">
      <div className="container">
        <div className="row">
          {
            numbers.map((number, i) => (
              <div className="col-lg-3 col-sm-6" key={i}>
                <div className={`number-item ${i !== numbers.length - 1 ? 'mb-5 mb-lg-0' : ''}`}>
                  <div className="icon">
                    <img src={number.icon} alt="" />
                  </div>
                  <div className="info">
                    <h2> <span className="counter">{number.number}</span>{number.operator} </h2>
                    <p> {number.title} </p>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Numbers