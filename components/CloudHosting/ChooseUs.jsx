import React from 'react'

const ChooseUs = () => {
  return (
    <section className="choose-us style-9 section-padding bg-gray2">
      <div className="container">
        <div className="section-head text-center style-9 mb-80 wow fadeInUp">
          <h6> why choose us </h6>
          <h2> This Website Needs from <br /> Startup to Success </h2>
        </div>
        <div className="content">
          <ul className="nav nav-pills mb-3 wow fadeInUp" id="pills-tab" role="tablist">
            <li className="nav-item" role="presentation">
              <button className="nav-link active" id="choose1-tab" data-bs-toggle="pill" data-bs-target="#choose1" type="button" role="tab" aria-controls="pills-home" aria-selected="true">
                <img src="/assets/img/icons/features/9.svg" alt="" /> 1 Click Acesss
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="choose2-tab" data-bs-toggle="pill" data-bs-target="#choose2" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">
                <img src="/assets/img/icons/features/10.svg" alt="" /> Update Management
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="choose3-tab" data-bs-toggle="pill" data-bs-target="#choose1" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">
                <img src="/assets/img/icons/features/11.svg" alt="" /> Site Monitoring
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="choose4-tab" data-bs-toggle="pill" data-bs-target="#choose2" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">
                <img src="/assets/img/icons/features/12.svg" alt="" /> Staging Site
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="choose5-tab" data-bs-toggle="pill" data-bs-target="#choose1" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">
                <img src="/assets/img/icons/features/13.svg" alt="" /> Backup & Restore
              </button>
            </li>
          </ul>
          <div className="tab-content pt-2 wow fadeInUp" id="pills-tabContent">
            <div className="tab-pane fade show active" id="choose1" role="tabpanel">
              <p className="text-center fs-6 color-darkBlue2"> Cost-effective hosting that delivers secure, reliable performance. </p>
              <div className="feat-content">
                <div className="row align-items-center gx-0">
                  <div className="col-lg-6">
                    <div className="img img-cover">
                      <img src="/assets/img/choose_us/choose9.png" alt="" />
                    </div>
                  </div>
                  <div className="col-lg-5 offset-lg-1">
                    <div className="info mt-4 mt-lg-0">
                      <div className="icon">
                        <img src="/assets/img/choose_us/icon3.png" alt="" />
                      </div>
                      <h2> This Website Needs from <br /> Startup to Success. </h2>
                      <p> Websites are stored or “hosted” on a publicly accessible computer (a server). Some websites require an entire server to themselves. </p>
                    </div>
                  </div>
                </div>
                <a href="https://www.youtube.com/watch?v=pGbIOC83-So&t=21s" className="play_icon" data-lity>
                  <i className="fas fa-play"></i>
                </a>
              </div>
            </div>
            <div className="tab-pane fade" id="choose2" role="tabpanel">
              <p className="text-center fs-6 color-darkBlue2"> Cost-effective hosting that delivers secure, reliable performance. </p>
              <div className="feat-content">
                <div className="row align-items-center gx-0">
                  <div className="col-lg-6">
                    <div className="img img-cover">
                      <img src="/assets/img/choose_us/choose9.png" alt="" />
                    </div>
                  </div>
                  <div className="col-lg-5 offset-lg-1">
                    <div className="info mt-4 mt-lg-0">
                      <div className="icon">
                        <img src="/assets/img/icons/ab9_2.png" alt="" />
                      </div>
                      <h2> This Website Needs from <br /> Startup to Success. </h2>
                      <p> Websites are stored or “hosted” on a publicly accessible computer (a server). Some websites require an entire server to themselves. </p>
                    </div>
                  </div>
                </div>
                <a href="https://www.youtube.com/watch?v=pGbIOC83-So&t=21s" className="play_icon" data-lity>
                  <i className="fas fa-play"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ChooseUs