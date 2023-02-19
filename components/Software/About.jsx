import Link from 'next/link';
import aboutData from '@data/Software/about.json';

const About = () => {
  return (
    <section className="about section-padding style-3" data-scroll-index="3">
      <div className="top-content">
        <div className="img img-left">
          <img src="/assets/img/about/style_3_1.png" alt="" />
          {
            aboutData.numbers.map((number, index) => (
              <div className="info-circle" key={index}>
                <div className="cont">
                  <h2>{ number.value }</h2>
                  <small>{ number.title }</small>
                </div>
              </div>
            ))
          }
        </div>
        <div className="container">
          <div className="row gx-0 justify-content-end">
            <div className="col-lg-5">
              <div className="info">
                <div className="section-head long-shape mb-40 style-3">
                  <h3>Iteck’s <span>Mission & Vision</span></h3>
                </div>
                <h5 className="h5">
                  “It is only when they go wrong that machines remind you how powerful they are.”
                </h5>
                <div className="text mb-20">
                  Iteck Co is the partner of choice for many of the world’s leading enterprises, SMEs
                  and technology challengers. We help businesses elevate their value through custom
                  software development, product design, QA and consultancy services.
                </div>
                <div className="text mb-70">
                  Iteck specializes in technological and IT-related services such as product
                  engineering, warranty management, building cloud, etc.
                </div>
                <Link href="/page-about-5">
                  <a className="btn rounded-pill bg-blue2 sm-butn text-white">
                    <span>More About Us</span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="btm-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="info pe-lg-5">
                <div className="section-head mb-40 style-3">
                  <h3>Iteck’s <span>Technology</span></h3>
                </div>
                <div className="text mb-30">
                  Our team can assist you in transforming your business through latest tech
                  capabilities to stay ahead of the curve.
                </div>
                <ul>
                  {
                    aboutData.features.map((feature, index) => (<li key={index}> <i className="bi bi-star-fill me-3"></i> { feature }</li>))
                  }
                </ul>
                <Link href="/page-about-5">
                  <a className="btn rounded-pill border-blue2 hover-blue2 mt-60 sm-butn">
                    <span>How We Works</span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="img img-right">
          <img src="/assets/img/about/style_3_2.png" alt="" />
        </div>
      </div>
    </section>
  )
}

export default About