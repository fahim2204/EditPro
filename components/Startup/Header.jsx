import Navbar from '@components/Navbars/StartupNav';
import OnePageNavbar from '@components/Navbars/StartupNav/OnePageNav';
import NavbarRTL from '@components/Navbars/StartupNav/RTLNav';

const Header = ({ isOnePage, rtl }) => {
  return (
    <header className="style-6">
      <div className="content" data-scroll-index="0">
        {
          isOnePage ? 
           <OnePageNavbar rtl={rtl} />
           : 
            rtl ? (<NavbarRTL />) : (<Navbar />)
        }
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="info">
                <h6>{ rtl ? 'Itekseo للتسويق الألكترونى' : 'itekseo agency' }</h6>
                <h1>
                  {
                    rtl ?
                    <>
                      التسويق الالكترونى هو <span> <small> المستقبل </small> </span>
                    </>
                    :
                    <>
                      SEO Analytics and Marketing for <span><small>Startup</small></span>
                    </>
                  }
                </h1>
                <div className="text">
                  {
                    rtl ?
                    <>
                       ضمان أفضل عائد على الاستثمار لمتطلبات حملة تحسين محركات البحث (SEO) الخاصة بك. <br />
                      احصل على تحليل SEO المجاني الخاص بك
                    </>
                    :
                    <>
                      Ensuring the best return on investment for your bespoke SEO campaign requirement. <br /> Get your free SEO Analysis
                    </>
                  }
                </div>
                <form action="contact.php" className="form" method="post">
                  <div className="form-group">
                    <i className="fas fa-globe me-2"></i>
                    <input type="text" name="website" placeholder={rtl ? "رابط موقعك الالكترونى" : "https://yoursite.com"} />
                  </div>
                  <div className="form-group">
                    <i className="far fa-envelope me-2"></i>
                    <input type="text" name="email" placeholder={rtl ? "البريد الالكترونى" : "youremail@domain.com"} />
                  </div>
                  <a href="#" className="btn rounded-pill butn-blue6 hover-blue2 sm-butn fw-bold">
                    <span>
                      { rtl ? "أبدأ الأن" : "Analyze Now" } <i className="bi bi-arrow-right ms-1"></i>
                    </span>
                  </a>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img src="/assets/img/header/hand_megaphone.png" alt="" className="hand-mega slide_up_down" />
      <img src="/assets/img/header/target_3d.png" alt="" className="target-3d rotate-center" />
      <img src="/assets/img/header/head6_rating.png" alt="" className="head6-rating scale_up_down" />
      <img src="/assets/img/header/header5_linechart.png" alt="" className="head6-charts scale_up_down" />
      <img src="/assets/img/header/rocket.png" alt="" className="head6-rocket" />
    </header>
  )
}

export default Header