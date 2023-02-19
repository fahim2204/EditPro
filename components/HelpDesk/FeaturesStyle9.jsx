import React from 'react';
import features from '@data/HelpDesk/features.json';

const FeaturesStyle9 = () => {
  return (
    <section className="features style-9">
      <div className="container">
        <div className="content section-padding border-1 border-top brd-gray">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-5">
              <div className="info wow fadeInUp">
                <div className="section-head mb-40">
                  <h6 className="color-green text-uppercase"> // Core Features </h6>
                  <h2 className="fs-1"> Easy to customize with ai chat boot. </h2>
                </div>
                <div className="accordion accordion-flush" id="accordionFlushExample">
                  {
                    features.map((feature, index) => (
                      <div className="accordion-item" key={index}>
                        <h2 className="accordion-header" id="flush-headingOne">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse${feature.id}`} aria-expanded="false" aria-controls={`flush-collapse${feature.id}`}>
                            <span> {feature.id}. </span> {feature.title}
                          </button>
                        </h2>
                        <div id={`flush-collapse${feature.id}`} className={`accordion-collapse collapse ${index === 1 ? 'show' : ''}`} aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                          <div className="accordion-body">
                            {feature.details}
                          </div>
                        </div>
                      </div>
                    ))
                  }
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="img wow zoomIn" data-wow-delay="0.2s">
                <img src="/assets/img/feat_9_img.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturesStyle9