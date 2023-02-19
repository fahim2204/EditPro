import appData from '@data/appData.json';

const CallToAction = () => {
  return (
    <section className="cal-actn section-padding text-white" data-overlay-dark="0">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="cont text-center">
              <h3 className="num"><span className="gr">4567<span className="thin">+</span></span></h3>
              <h6 className="sub-title inline gr-sunrise-text my-3 text-uppercase">Licenses sold and counting</h6>
              <h2>Let’s Start Your Business Today!</h2>
              <p className="mt-15">Create innovative website today. Purchase Iteck Template now!</p>
              <a href={appData.itemStoreLink} className="btn rounded-pill bg-blue4 fw-bold text-white mt-50">
                <small className="text-uppercase"> Purchase Now </small>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="circle-img">
        <img src="/landing-preview/img/circle.png" alt="" />
      </div>
    </section>
  )
}

export default CallToAction