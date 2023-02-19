import footerData from '@data/ITCreative/footer.json';

const Footer = () => {
  return (
    <footer className="style-7">
      <div className="container">
        <div className="content section-padding">
          <div className="row">
            <div className="col-lg-4 border-1 border-end brd-gray">
              <div className="info-logo">
                <a href="#" className="logo">
                  <img src="/assets/img/logo_lgr.png" alt="" />
                </a>
                <div className="text">
                  { footerData.text }
                </div>
                <div className="social-links">
                  <a href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-youtube"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="links-side">
                <div className="row gx-5">
                  <div className="col-lg-6">
                    <div className="links-group">
                      <h5>What We Do</h5>
                      <div className="row">
                        <div className="col-lg-6">
                          <ul className="links">
                            { 
                              footerData.links.map((link, i) => (
                                <li key={i}>
                                  <a href={link.href}>{ link.text }</a>
                                </li>
                              ))
                            }
                          </ul>
                        </div>
                        <div className="col-lg-6">
                          <ul className="links">
                            { 
                              footerData.links2.map((link, i) => (
                                <li key={i}>
                                  <a href={link.href}>{ link.text }</a>
                                </li>
                              ))
                            }
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="links-group">
                      <h5>More Pages</h5>
                      <div className="row">
                        <div className="col-lg-6">
                          <ul className="links">
                            { 
                              footerData.morePages.map((link, i) => (
                                <li key={i}>
                                  <a href={link.href}>{ link.text }</a>
                                </li>
                              ))
                            }
                          </ul>
                        </div>
                        <div className="col-lg-6">
                          <ul className="links">
                            { 
                              footerData.morePages2.map((link, i) => (
                                <li key={i}>
                                  <a href={link.href}>{ link.text } { link.label && <small className="text-uppercase bg-blue7 text-white py-1 px-3 rounded-pill ms-2 lh-2"> { link.label } </small> }</a>
                                </li>
                              ))
                            }
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="foot bg-white p-3 rounded-pill text-center">
          <p> Full Copyright & Design By <a href="#" className="fw-bold"> @ThemesCamp </a> - 2022 </p>
        </div>
      </div>
      {/* <img src="/assets/img/footer/footer_4_wave.png" alt="" className="wave"> */}
    </footer>
  )
}

export default Footer