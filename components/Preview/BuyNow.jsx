import appData from '@data/appData.json';

const BuyNow = () => {
  return (
    <section className="box-gr">
      <div className="container-xxl box">
        <div className="row">
          <div className="col-lg-5 valign">
            <div className="cont mb-5 mb-lg-0">
              <h2 className="mb-20 text-capitalize">Buy now and get a new Updates frequently</h2>
              <p className="color-777 lh-6 fs-14px">By getting Iteck today, you receive free lifetime updates! Lots of interesting features are on the way!</p>
              <a href={appData.itemStoreLink} className="btn rounded-pill bg-blue4 fw-bold text-white mt-50">
                <small className="text-uppercase">Purchase Now</small>
              </a>
            </div>
          </div>
          <div className="col-lg-6 offset-lg-1">
            <div className="img">
              <img src="/landing-preview/img/b1.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BuyNow