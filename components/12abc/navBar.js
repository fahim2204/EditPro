import Link from 'next/link';

const Navbar = ({ navbarRef, bgTransparent }) => {
  const handleMouseMove = (event) => {
    const dropDownToggler = event.target.classList.contains('dropdown-toggle') ? event.target : event.target.querySelector('.dropdown-toggle');
    const dropDownMenu = dropDownToggler?.nextElementSibling;

    dropDownToggler?.classList?.add('show');
    dropDownMenu?.classList?.add('show');
  }

  const handleMouseLeave = (event) => {
    const dropdown = event.target.classList.contains('dropdown') ? event.target : event.target.closest('.dropdown');
    const dropDownToggler = dropdown.querySelector('.dropdown-toggle');
    const dropDownMenu = dropdown.querySelector('.dropdown-menu');

    dropDownToggler?.classList?.remove('show');
    dropDownMenu?.classList?.remove('show');
  }

  return (
    <nav className={`navbar navbar-expand-lg navbar-light style-5 ${bgTransparent ? 'bg-transparent' : ''}`} ref={navbarRef}>
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold fs-4" href="/">
          Edit Pro
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown1" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                PRODUCTS
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown1">
                <li><Link className="dropdown-item" href="/">Background Remover</Link></li>
                <li><Link className="dropdown-item" href="/home-it-solutions2">Face Cutout</Link></li>
                <li><Link className="dropdown-item" href="/home-data-analysis">Photo Enhancer</Link></li>
                <li><Link className="dropdown-item" href="/home-app-landing">Photo Colorizer</Link></li>
                <li><Link className="dropdown-item" href="/home-saas-technology">Image Retouch</Link></li>
                <li><Link className="dropdown-item" href="/home-marketing-startup">Cartoon Selfie</Link></li>
                <li><Link className="dropdown-item" href="/home-it-solutions">Passport Photo</Link></li>
                <li><Link className="dropdown-item" href="/home-software-company">Photo Animer</Link></li>
                <li><Link className="dropdown-item" href="/home-digital-agency">Photo Color Correction</Link></li>
                <li><Link className="dropdown-item" href="/home-modren-shop">AI Art Generation</Link></li>
                <li><Link className="dropdown-item" href="/home-modren-shop">Background Diffusion</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/pricing">
                PRICING
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/page-portfolio-5">
                ABOUT US
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/contact">
                CONTACT
              </Link>
            </li>
            {/* <li className="nav-item dropdown" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown2" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                pages
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown1">
                <li><Link className="dropdown-item" href="/page-about-5"><a>about</a></Link></li>
                <li><Link className="dropdown-item" href="/page-product-5"><a>product</a></Link></li>
                <li><Link className="dropdown-item" href="/page-services-5"><a>services</a></Link></li>
                <li><Link className="dropdown-item" href="/page-shop-5"><a>shop</a></Link></li>
                <li><Link className="dropdown-item" href="/page-single-project-5"><a>single project</a></Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link href="/page-portfolio-5">
                <a className="nav-link">
                  portfolio
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/page-blog-5">
                <a className="nav-link">
                  blog
                  <small className="fs-10px icon-20 rounded-pill bg-blue5 text-white fw-bold px-3 ms-2 d-inline-flex justify-content-center align-items-center">3</small>
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/page-contact-5">
                <a className="nav-link">
                  contact us
                </a>
              </Link>
            </li> */}

          </ul>
          <div className="nav-side">
            <div className="d-flex align-items-center">
              <span className="nav-item">
                <Link className="nav-link" href="/login">
                  <i className="bi bi-person fs-5 me-2"></i>
                  LOGIN
                </Link>
              </span>
              {/* <Link className="btn rounded-pill blue5-3Dbutn hover-blue2 sm-butn fw-bold" href="/page-contact-5">
                <span>Start Free Trial <i className="bi bi-arrow-right ms-1"></i> </span>
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar