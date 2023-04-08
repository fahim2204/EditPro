import Link from 'next/link';
import footerData from '../../data/footer.json';

const Footer = () => {
  return (
    <footer className="style-5 pt-5 border-top brd-gray">
      <div className="container">
        <div className="row gx-0 justify-content-between">
          <div className="col-lg-3 col-sm-6">
            <div className="items">
              <div className="title">
                Edit Pro
              </div>
              <small className="text">
                Over 25 years working in IT services developing software applications and mobile apps for
                clients all over the world. For your very specific industry, <br /> we have highly-tailored IT
                solutions.
              </small>
              <div className="socail-icons">
                <a href="https://twitter.com/" rel="noreferrer" className="icon-35 rounded-circle bg-gray overflow-hidden d-inline-flex align-items-center justify-content-center text-gray me-2" target="_blank">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://facebook.com/" rel="noreferrer" className="icon-35 rounded-circle bg-gray overflow-hidden d-inline-flex align-items-center justify-content-center text-gray me-2" target="_blank">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://instagram.com/" rel="noreferrer" className="icon-35 rounded-circle bg-gray overflow-hidden d-inline-flex align-items-center justify-content-center text-gray" target="_blank">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="items">
              <div className="title">
                Information
              </div>
              <small className="text mb-2 d-block">
                22 Example Road, Unknow Street <br /> Usata, India
              </small>
              <small className="text mb-2 d-block">
                +91 0554 54 545
              </small>
              <small className="text d-block">
                info@editpro.ai
              </small>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="items">
              <div className="title">
                Useful Links
              </div>
              <ul>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/about">About Editpro</Link>
                </li>
                <li>
                  <Link href="/">Product</Link>
                </li>
                <li>
                  <Link href="/pricing">Pricing</Link>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="items">
              <div className="title">
                Resource
              </div>
              <ul>
                <li>
                  <a href="/">Online Documentation</a>
                </li>
                <li>
                  <a href="/">Intergrations</a>
                </li>
                <li>
                  <a href="/faq">FAQs</a>
                </li>
                <li>
                  <a href="/">Help Center</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="my-4">
          <div className="d-flex justify-content-center">
            <small className="small">
              © 2022 Copyrights by <a href="#" className="fw-bold text-decoration-underline">EditPro</a> - All Rights Reserved.
            </small>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer