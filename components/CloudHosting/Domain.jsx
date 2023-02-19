import React from 'react'

const Domain = () => {
  return (
    <section className="domain-search style-9 section-padding bg-gray2">
      <div className="container">
        <div className="section-head text-center style-9 mb-80 wow fadeInUp">
          <h6> domain search </h6>
          <h2> It’s All Starts With A Good Domain </h2>
          <p> Free to focus on growing your business, let us handle your site </p>
        </div>
        <div className="content">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="domain-choose wow fadeInUp">
                <div className="form-group">
                  <span className="icon"> <i className="far fa-search"></i> </span>
                  <input type="text" placeholder="Search with any name" />
                  <select name="" id="" className="form-select">
                    <option value="">.com</option>
                    <option value="">.tech</option>
                    <option value="">.net</option>
                    <option value="">.co</option>
                    <option value="">.info</option>
                    <option value="">.org</option>
                  </select>
                </div>
                <button className="butn bg-darkBlue2 border-0 rounded-3 text-white">
                  <span> Search Now </span>
                </button>
              </div>
            </div>
          </div>
          <div className="domain-names">
            <div className="row justify-content-center wow fadeInUp">
              <div className="col-lg-10">
                <div className="row">
                  <div className="col-lg-2 col-6">
                    <div className="item dom-tech">
                      <p> <i className="far fa-square-full"></i> .tech<span>/$8.00</span> </p>
                    </div>
                  </div>
                  <div className="col-lg-2 col-6">
                    <div className="item dom-net">
                      <p> <i className="far fa-square-full"></i> .net<span>/$8.00</span> </p>
                    </div>
                  </div>
                  <div className="col-lg-2 col-6">
                    <div className="item dom-co">
                      <p> <i className="far fa-square-full"></i> .co/<span>$5.00</span> </p>
                    </div>
                  </div>
                  <div className="col-lg-2 col-6">
                    <div className="item dom-com">
                      <p> <i className="far fa-square-full"></i> .com<span>/$10.00</span> </p>
                    </div>
                  </div>
                  <div className="col-lg-2 col-6">
                    <div className="item dom-info">
                      <p> <i className="far fa-square-full"></i> .info<span>/$10.00</span> </p>
                    </div>
                  </div>
                  <div className="col-lg-2 col-6">
                    <div className="item dom-org">
                      <p> <i className="far fa-square-full"></i> .org<span>/$3.00</span> </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <h5 className=" wow fadeInUp"> Which domain is right for you? </h5>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Domain