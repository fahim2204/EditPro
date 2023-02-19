import Link from 'next/link';

const Footer = ({ noWave, rtl }) => {
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
    <footer className={`style-4 ${noWave ? 'mt-0 pt-100':''}`} data-scroll-index="8">
      <div className="container">
        <div className="section-head text-center style-4">
          <h2 className="mb-10">{ rtl ? 'جاهز' : 'Ready To' } <span>{ rtl ? 'للتنزيل' : 'Download' }</span> </h2>
          <p>{ rtl ? 'اكتشف مساحاتك المفضلة الجديدة ، من ساو باولو إلى سيول. قم بالتنزيل من App Store أو Google Play.' : 'Discover your new favorite spaces, from Sao Paulo to Seoul. Download from App Store or Google Play.' }</p>
          <div className="d-flex align-items-center justify-content-center mt-50">
            <a href="https://www.apple.com/app-store" rel="noreferrer" className="btn rounded-pill bg-blue4 fw-bold text-white me-4" target="_blank">
              <small> <i className="fab fa-apple me-2 pe-2 border-end"></i> { rtl ? 'تنزيل من متجر التطبيقات' : 'Download On App Store' }</small>
            </a>
            <a href="https://play.google.com/store/apps" rel="noreferrer" className="btn rounded-pill hover-blue4 fw-bold border-blue4" target="_blank">
              <small> <i className="fab fa-google-play me-2 pe-2 border-end"></i> { rtl ? 'تنزيل من متجر ابل' : 'Download On Google Play' }</small>
            </a>
          </div>
        </div>
        <div className="foot mt-80">
          <div className="row align-items-center">
            <div className="col-lg-2">
              <div className="logo">
                <img src="/assets/img/logo_lgr.png" alt="" />
              </div>
            </div>
            <div className="col-lg-8">
              <ul className="links">
                <li>
                  <Link href="/home-app-landing"><a className="active">{ rtl ? 'الرئيسية' : 'Home' }</a></Link>
                </li>
                <li>
                  <Link href="/page-about-5"><a>{ rtl ? 'من نحن' : 'about' }</a></Link>
                </li>
                <li>
                  <Link href="/page-product-5"><a>{ rtl ? 'المنتجات' : 'product' }</a></Link>
                </li>
                <li>
                  <Link href="/page-portfolio-5"><a>{ rtl ? 'المشاريع' : 'portfolio' }</a></Link>
                </li>
                <li>
                  <Link href="/page-services-5"><a>{ rtl ? 'الخدمات' : 'services' }</a></Link>
                </li>
                <li>
                  <Link href="/page-shop-5"><a>{ rtl ? 'المتجر' : 'shop' }</a></Link>
                </li>
                <li>
                  <Link href="/page-blog-5"><a>{ rtl ? 'الاخبار' : 'blog' }</a></Link>
                </li>
                <li>
                  <Link href="/page-contact-5"><a>{ rtl ? 'اتصل بنا' : 'contact' }</a></Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-2">
              {
                rtl ?
                (
                  <div className="dropdown" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
                    <button className="icon-25 dropdown-toggle p-0 border-0 bg-transparent rounded-circle img-cover" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                      <img src="/assets/img/lang.png" alt="" className="me-2" />
                        <small>العربية</small>
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                      <li><a className="dropdown-item" href="#">English</a></li>
                    </ul>
                  </div>
                )
                :
                (
                  <div className="dropdown" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
                    <button className="icon-25 dropdown-toggle p-0 border-0 bg-transparent rounded-circle img-cover" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                      <img src="/assets/img/lang.png" alt="" className="me-2" />
                        <small>English</small>
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                      <li><a className="dropdown-item" href="#">English</a></li>
                      <li><a className="dropdown-item" href="#">Arabic</a></li>
                    </ul>
                  </div>
                )
              }
            </div>
          </div>
        </div>
        <div className="copywrite text-center">
          <small className="small">
            { rtl ? '© 2022 حقوق التأليف والنشر' : '© 2022 Copyrights by' } <a href="#" className="fw-bold text-decoration-underline">Iteck Co.</a> { rtl ? 'كل الحقوق محفوظة. صمم بواسطة' : 'All Rights Reserved. Designed by' } <a href="https://themeforest.net/user/themescamp" className="fw-bold text-decoration-underline">ThemesCamp</a>
          </small>
        </div>
      </div>
      { !noWave && <img src="/assets/img/footer/footer_4_wave.png" alt="" className="wave" /> }
    </footer>
  )
}

export default Footer