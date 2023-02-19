import Link from 'next/link';
import services from '@data/Software/services.json';

const Services = () => {
  return (
    <section className="services style-3 section-padding pb-70" data-scroll-index="2">
      <div className="container">
        <div className="section-head style-3 d-flex align-items-center">
          <h3>Our Main <span>Services</span></h3> <Link href="/page-services-5"><a className="text-muted ms-5 ps-5 mt-2">See full services <i className="bi bi-chevron-right ms-1"></i></a></Link>
        </div>
        <div className="row">
          {
            services.map((service, index) => (
              <div className="col-lg-3 col-sm-6 mb-30 mb-lg-0" key={index}>
                <div className="service-card style-3">
                  <div className="icon">
                    <img src={service.icon} alt="" />
                  </div>
                  <div className="info">
                    <h5 className="title">{ service.title }</h5>
                    <div className="text">
                      { service.details }
                    </div>
                    <Link href="/page-portfolio-5">
                      <a>
                        <span>see projects</span> <i className="bi bi-chevron-right ms-1"></i>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Services