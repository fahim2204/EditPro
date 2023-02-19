import Link from 'next/link';
import footerData from '@data/Startup/footer.json';
import footerDataRTL from '@data/Startup/footer-rtl.json';

const Footer = ({ rtl }) => {
  const FooterData = rtl ? footerDataRTL : footerData;

  return (
    <footer className="style-6 border-top brd-gray">
      <div className="container">
        <div className="row gx-0 justify-content-between">
          <div className="col-lg-3 col-sm-6">
            <div className="items">
              <div className="title">
                { rtl ? "Itekseo - الأفضل في التسويق" : "Itekseo - Best for SEO/Marketing" }
              </div>
              <ul>
                <li className="color-666 mb-2">
                  <i className="bi bi-house me-1"></i>
                  <small>{ FooterData.address }</small>
                </li>
                <li className="color-666 mb-2">
                  <i className="bi bi-phone me-1"></i>
                  <small>{ FooterData.phone }</small>
                </li>
                <li className="color-666 mb-2">
                  <i className="bi bi-envelope me-1"></i>
                  <small>{ FooterData.email }</small>
                </li>
              </ul>
              <div className="socail-icons">
                <a href="twiter.com" className="icon-35 rounded-circle bg-gray overflow-hidden d-inline-flex align-items-center justify-content-center text-gray me-2">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="facebook.com" className="icon-35 rounded-circle bg-gray overflow-hidden d-inline-flex align-items-center justify-content-center text-gray me-2">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="instagram.com" className="icon-35 rounded-circle bg-gray overflow-hidden d-inline-flex align-items-center justify-content-center text-gray">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="items">
              <div className="title">
                { rtl ? "الخدمات" : "Services" }
              </div>
              <ul>
                {
                  FooterData.services.map((service, index) => (
                    <li key={index}>
                      <a href={service.link}>{ service.title }</a>
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="items">
              <div className="title">
                { rtl ? "المعلومات" : "Information" }
              </div>
              <ul>
                {
                  FooterData.information.map((information, index) => (
                    <li key={index}>
                      <Link href={information.link}><a>{ information.title }</a></Link>
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="items">
              <div className="title">
                { rtl ? "النشرة الإخبارية" : "Newsletter" }
              </div>
              <small className="color-666">{ rtl ? "سجل الآن للحصول على آخر التحديثات على" : "Register now to get latest updates on" } <br /> { rtl ? "الترقيات والقسائم." : "promotions & coupons." }</small>
              <form action="contact.php" className="form mt-30" method="post">
                <div className="form-group">
                  <span className="icon">
                    <i className="bi bi-envelope"></i>
                  </span>
                  <input type="text" placeholder={ rtl ? "ادخل بريدك الالكترونى" : "Enter your email" } />
                  <button> <i className="bi bi-send"></i> </button>
                </div>
              </form>
              <small className="color-666 fst-italic mt-20">{ rtl ? "من خلال الاشتراك ، فإنك توافق على" : "By subscribing, you accepted the our" } <a href="#" className="fst-normal text-dark">{ rtl ? "سياستنا." : "Policy." }</a> </small>
            </div>
          </div>
        </div>
        <div className="foot">
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="logo">
                <img src="/assets/img/logo_home6.png" alt="" />
              </div>
            </div>
            <div className="col-lg-6">
              <small className="small">
                { rtl ? "© 2022 حقوق التأليف والنشر" : "© 2022 Copyrights by" } <small className="fw-bold text-decoration-underline">Iteck Co.</small> { rtl ? "كل الحقوق محفوظة. صمم بواسطة" : "All Rights Reserved. Designed by" } <a href="https://themeforest.net/user/themescamp" className="fw-bold text-decoration-underline">ThemesCamp</a>
              </small>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer