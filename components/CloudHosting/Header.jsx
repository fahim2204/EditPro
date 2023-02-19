import Navbar from '@components/Navbars/CloudNav';
import TopNav from '@components/Navbars/CloudNav/TopNav';

const Header = () => {
  return (
    <header className="style-9">
      <TopNav />
      <Navbar />
      <div className="navs-container">
        <div className="hosting-links py-4 text-white text-center">
          <div className="container">
            <div className="links">
              <a href="#" className="fw-bold pe-3 me-3 border-end border-1 brd-light hover-darkBlue"> Cloud Hosting </a>
              <a href="#" className="me-4 hover-darkBlue"> Web Hosting </a>
              <a href="#" className="me-4 hover-darkBlue"> Windows Hosting </a>
              <a href="#" className="me-4 hover-darkBlue"> Dedicated Server </a>
              <a href="#" className="me-4 hover-darkBlue"> VPS Hosting </a>
              <a href="#" className="hover-darkBlue"> Reseller Hosting </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="content section-padding">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div className="info">
                <h6> cloud hosting </h6>
                <h1> High Performance Secured <span> Hosting </span> </h1>
                <ul>
                  <li> Improved page loads and SEO </li>
                  <li> Fee domain, email & support included </li>
                  <li> 30-day money back guarantee </li>
                </ul>
                <a href="#" className="butn border-2 border-white border rounded-3 text-white mt-40">
                  <span> Get Started Now </span>
                </a>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="img">
                <img src="/assets/img/header/header9.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header