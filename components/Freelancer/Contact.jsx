import React from 'react'

const Contact = () => {
  return (
    <section className="contact style-13">
      <div className="container">
        <div className="content">
          <div className="row gx-0 justify-content-between">
            <div className="col-lg-5">
              <div className="contact-info">
                <div className="section-head side-title mb-40 style-13">
                  <h6> call to action </h6>
                  <h2> Any Project On Mind </h2>
                </div>
                <p> A portfolio is a collection of financial investments like stocks, bonds, commodities, cash, & cash equivalent including closed-end funds. </p>
                <ul className="mt-30">
                  <li>
                    <p> <strong>  Address : </strong> 58 Howard Street, San Francisco, CA 941 </p>
                  </li>
                  <li>
                    <p> <strong>  Fax : </strong> 888 999 000 99, 000 999 888 99 </p>
                  </li>
                  <li>
                    <p> <strong>  Email : </strong> info@webmail.com, jobs@webmail.com </p>
                  </li>
                  <li>
                    <p> <strong>  Work Hour : </strong> Mon - Sat : 9:00 - 18:00 </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="contact-form mt-4 mt-lg-0">
                <div className="row gx-3 align-items-center">
                  <div className="col-lg-6">
                    <div className="form-group">
                      <input type="text" className="form-control" placeholder="Full name" />
                      <span className="icon"> <i className="fas fa-user"></i> </span>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <input type="text" className="form-control" placeholder="Email address" />
                      <span className="icon"> <i className="fas fa-envelope"></i> </span>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <select name="" id="" className="form-control form-select">
                        <option value=""> Enquiry Subject </option>
                        <option value=""> Enquiry Subject </option>
                        <option value=""> Enquiry Subject </option>
                      </select>
                      <span className="icon"> <i className="fas fa-book"></i> </span>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <textarea name="" rows="5" className="form-control" placeholder="Message"></textarea>
                      <span className="icon"> <i className="fas fa-pen"></i> </span>
                    </div>
                  </div>
                </div>
                <a href="#0" className="btn rounded-pill text-white bg-orange3" target="_blank">
                  <small> Submit Request </small>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact