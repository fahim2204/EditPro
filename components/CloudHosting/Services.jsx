import services from '@data/CloudHosting/services.json';

const Services = () => {
  return (
    <section className="services style-9 bg-gray2">
      <div className="services-content">
        <div className="container">
          <div className="row">
            {
              services.map((service, index) => (
                <div className="col-lg-3 col-sm-6" key={index}>
                  <div className="service-card wow fadeInUp" data-wow-delay={`${index * 0.2}s`}>
                    <div className="img-icon">
                      <img src={service.icon} alt="" />
                    </div>
                    <h3> { service.title.partOne } <br />  { service.title.partTwo } </h3>
                    <p> {  service.description } </p>
                    <a href="#" className="icon"> <i className="far fa-long-arrow-right"></i> </a>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
      <div className="container">
        <div className="con-info wow fadeInDown">
          <h5> Need help? Call our award-winning support team at <strong> 040-67607600 </strong> </h5>
        </div>
      </div>
    </section>
  )
}

export default Services