import services from '@data/ITCreative/services.json';

const Services = () => {
  return (
    <section className="services style-7 pt-100">
      <div className="container">
        <div className="section-head text-center style-4 mb-50">
          <div className="top-title mb-10">
            <img src="/assets/img/line_l.png" alt="" />
            <h5> Services </h5>
            <img src="/assets/img/line_r.png" alt="" />
          </div>
          <h2 className="">
            What We <span> Provide </span> <br /> As A Company
          </h2>
        </div>
        <div className="services-content pb-100">
          <div className="row">
            {
              services.map((service, index) => (
                <div className="col-lg-3 col-sm-6" key={index}>
                  <div className="service-item-style7">
                    <div className="img">
                      <img src={service.image} alt="" />
                      <span className="icon">
                        <i className={service.icon}></i>
                      </span>
                    </div>
                    <div className="info">
                      <h6>{ service.title }</h6>
                      <p className="text">{ service.description }</p>
                      <a href="#"> <i className="fal fa-long-arrow-right"></i> Read More  <i className="fal fa-long-arrow-right"></i> </a>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services