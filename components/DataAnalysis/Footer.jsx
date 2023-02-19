import footerData from '@data/DataAnalysis/footer.json';

const Footer = () => {
  return (
    <footer className="style-8 bg-gray2">
      <div className="container">
        <div className="content section-padding">
          <div className="logo-social">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="foot-logo">
                  <a href="#">
                    <img src="/assets/img/logo_home8.png" alt="" />
                  </a>
                </div>
              </div>
              <div className="col-lg-6 text-lg-end">
                <div className="socials">
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
          </div>
          <div className="links-content">
            <div className="row justify-content-between">
              <div className="col-lg-4">
                <div className="foot-info">
                  <h6 className="foot-title"> About Us </h6>
                  <p>{footerData.text}</p>
                  <ul className="mt-20">
                    <li>
                      <a href="#"> <i className="fas fa-envelope-open me-2 color-main"></i> {footerData.email}</a>
                    </li>
                    <li>
                      <a href="#"> <i className="fas fa-phone me-2 color-main"></i> {footerData.phone}</a>
                    </li>
                    <li>
                      <a href="#"> <i className="fas fa-map-marker-alt me-2 color-main"></i> {footerData.address}</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2">
                <div className="links">
                  <h6 className="foot-title"> What We Do </h6>
                  <ul>
                    {
                      footerData.links.map((link, i) => (
                        <li key={i}>
                          <a href={link.href}>{link.text}</a>
                        </li>
                      ))
                    }
                  </ul>
                </div>
              </div>
              <div className="col-lg-2">
                <div className="links">
                  <h6 className="foot-title"> Other Pages </h6>
                  <ul>
                    {
                      footerData.morePages.map((link, i) => (
                        <li key={i}>
                          <a href={link.href}>{link.text}</a>
                        </li>
                      ))
                    }
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="foot-subscribe">
                  <h6 className="foot-title"> Get Newsletter </h6>
                  <p> Get every single promotional & business update. </p>
                  <div className="form-group mt-30">
                    <span className="icon"> <i className="fas fa-envelope-open"></i> </span>
                    <input type="text" className="form-control" placeholder="Email address" />
                  </div>
                  <a href="#" className="butn bg-main border-0 rounded-pill hover-shadow flex-shrink-0 mt-20 w-100 py-3" type="submit">
                    <span className="text-white"> Subscribe Now <i className="fal fa-long-arrow-right ms-2"></i> </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="foot py-4 border-1 border-top brd-gray text-center">
          <p> Full Copyright & Design By <a href="#" className="fw-bold"> @ThemesCamp </a> - 2022 </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer