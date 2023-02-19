import appData from '@data/appData.json';

const Responsive = () => {
  return (
    <section className="respons section-padding">
      <div className="container-xxl">
        <div className="row">
          <div className="col-lg-6">
            <div className="img md-mb50">
              <img src="/landing-preview/img/b2.png" alt="" />
            </div>
          </div>
          <div className="col-lg-5 offset-lg-1 valign">
            <div className="cont">
              <h6 className="sub-title d-inline-block text-uppercase ltspc-4 color-grd mb-20">Template Adaptability</h6>
              <h2 className="fs-1 text-capitalize">Fully responsive & <br /> retina-ready</h2>
              <p className="fs-6 mt-10 color-777">Be sure that your brand new website looks great on any possible screen resolution and device.</p>
              <a href={appData.itemStoreLink} className="btn rounded-pill bg-blue4 fw-bold text-white mt-50">
                <small className="text-uppercase">Purchase Now</small>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Responsive