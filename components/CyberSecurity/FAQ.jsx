import React from 'react';
import IntegrationCard from './IntegrationCard';
import faqs from '@data/CyberSecurity/faq.json';

const FAQ = () => {
  return (
    <section className="faq style-10 bg-light pt-100">
      <div className="container">
        <div className="mb-70">
          <div className="row">
            <div className="col-lg-8">
              <p className="color-blue7 mb-10"> FAQ </p>
              <h2> Freequently Asked Question </h2>
            </div>
            <div className="col-lg-4 text-lg-end mt-4 mt-lg-0">
              <a href="#0" className="btn btn-icon-circle rounded-pill fw-bold brd-gray hover-orange2">
                <small> More Question <i className="fas fa-long-arrow-alt-right bg-blue7 text-white"></i> </small>
              </a>
            </div>
          </div>
        </div>
        <div className="content overflow-hidden">
          <div className="row gx-5">
            <div className="col-lg-8">
              <div className="accordion" id="accordionExample">
                {
                  faqs.map((faq, idx) => (
                    <div className="accordion-item" key={idx}>
                      <h2 className="accordion-header" id={`hd${idx}`}>
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#cl${idx}`} aria-expanded="true" aria-controls="collapseOne">
                          {faq.question}
                        </button>
                      </h2>
                      <div id={`cl${idx}`} className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                          <p>
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
            <div className="col-lg-4">
              <div className="faq-form mt-5 mt-lg-0">
                <h4> Ask More Question </h4>
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Your name" />
                  <span className="icon"> <i className="fas fa-user"></i> </span>
                </div>
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Email address" />
                  <span className="icon"> <i className="fas fa-envelope"></i> </span>
                </div>
                <div className="form-group">
                  <textarea name="" id="" rows="5" className="form-control" placeholder="message"></textarea>
                  <span className="icon"> <i className="fas fa-pen"></i> </span>
                </div>
                <button className="butn w-100 bg-blue7 text-white border-0 rounded-3"> <span> send message </span> </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <IntegrationCard />
    </section>
  )
}

export default FAQ