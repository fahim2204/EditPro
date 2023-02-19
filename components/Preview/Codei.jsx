import appData from '@data/appData.json';

const Codei = () => {
  return (
    <section className="codei section-padding">
      <div className="container-xxl box px-4">
        <div className="row align-items-center">
          <div className="col-lg-5">
            <div className="cont mb-5 mb-lg-0">
              <h2 className="mb-20 lh-3 fs-2 text-capitalize">Build and customize stunning pages in minutes – easily.</h2>
              <p className="color-777 lh-6 fs-14px">huge collection of elements, rich customizability, flexible layouts, and fast results!</p>
              <p className="color-777 lh-6 fs-14px">Choose a pre-built headers or create a custom layout that perfectly suits your needs. It’s easy, fast and mobile-friendly.</p>
              <a href={appData.itemStoreLink} className="btn rounded-pill bg-blue4 fw-bold text-white mt-50">
                <small className="text-uppercase">Purchase Now</small>
              </a>
            </div>
          </div>
          <div className="col-lg-6 offset-lg-1">
            <div className="img">
              <img src="/landing-preview/img/b3.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Codei