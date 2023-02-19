import Navbar from '@components/Navbars/DataAnalysis';

const Header = () => {
  return (
    <header className="style-8 bg-gray2">
      <Navbar />
      <div className="container">
        <div className="content section-padding">
          <div className="row align-items-center gx-0">
            <div className="col-lg-6">
              <div className="info">
                <p className="fw-bold color-main text-decoration-underline text-uppercase wow fadeInUp"> We Bring Ideas To Life </p>
                <h1 className="wow fadeInUp"> Ai & Data Machine <br /> Deep Solutions. </h1>
                <div className="form wow fadeInUp">
                  <h5> Subscribe & Get 7-Days Trail </h5>
                  <div className="form-group mt-4">
                    <span className="icon flex-shrink-0 ms-3">
                      <i className="fas fa-envelope-open"></i>
                    </span>
                    <input type="text" className="form-control" placeholder="Business email address" />
                    <button className="butn bg-orange1 border-0 rounded-pill hover-shadow flex-shrink-0" type="submit">
                      <span className="text-white"> Get A Demo <i className="fal fa-long-arrow-right ms-2"></i> </span>
                    </button>
                  </div>
                </div>
                <p className="text-center color-999 mt-3"> *** We are not going to save your data </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="img mt-4 mt-lg-0 wow fadeIn">
                <img src="/assets/img/header/3d_vector_head8.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header