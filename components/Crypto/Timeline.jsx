import React from 'react';
import timelineData from '@data/Crypto/timeline.json';

const Timeline = () => {
  return (
    <section className="timeline style-15">
      <div className="container">
        <div className="section-head mb-70 wow fadeInUp">
          <h6 className="text-uppercase fw-bold lh-8"> <img src="/assets/img/icons/home_15_icon.png" alt="" className="icon-30 me-2" />  <span> timeline </span> </h6>
          <h2 className="fs-1"> The Timeline Of Our Journey </h2>
        </div>
        <div className="content">
          <div className="timeline-cards">
            <div className="row">
              {
                timelineData.map((item, idx) => (
                  <div className="col-lg-3 col-sm-6" key={idx}>
                    <div className="timeline-card wow fadeInUp">
                      <div className="icon">
                        <img src={item.image} alt="" />
                      </div>
                      <div className="info">
                        <h6> {item.title.partOne} <br /> {item.title.partTwo} </h6>
                      </div>
                      <span className="year"> {item.year} </span>
                    </div>
                  </div>
                ))
              }
            </div>
            <div className="progress">
              <div className="progress-bar wow" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Timeline