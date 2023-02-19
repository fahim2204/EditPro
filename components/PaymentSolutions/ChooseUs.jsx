import React from 'react';
import chooseusData from '@data/PaymentSolutions/chooseus.json';

const ChooseUs = () => {
  return (
    <section className="choose-us style-14 section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section-head text-center mb-40">
              <p className="color-red1 text-uppercase fw-bold mb-10"> why choose us </p>
              <h2 className="fs-1"> The Faster, Safer Way To Receive Money. </h2>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="row">
            {
              chooseusData.map((choice, index) => (
                <div className="col-lg-3 col-sm-6" key={index}>
                  <div className="choose-card">
                    <div className="icon">
                      <img src={choice.icon} alt="" />
                    </div>
                    <div className="info">
                      <h5> {choice.title} </h5>
                      <p> {choice.details} </p>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default ChooseUs