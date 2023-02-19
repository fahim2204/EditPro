import { useState } from 'react';

const AboutHeader = () => {
  const [isOpen, setOpen] = useState(false);

  const openVideo = (e) => {
    e.preventDefault();
    setOpen(true);
  }

  return (
    <header className={`about-page-sec style-5`}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="info">
             
              <h1>Unleash the full potential<br /> of your images with our advanced online {" "}
                <span className="ms-2">
                 editing tools.
                  <img src="/assets/img/header/head5_line.png" alt="" className="head-line" />
                  <img src="/assets/img/header/head5_pen.png" alt="" className="head-pen" />
                </span>
              </h1>
              <p>
                Edit Pro helps you to unlock your brand's full potential with our AI-powered image enhancement tools,<br /> ensuring a consistent and captivating visual identity across — all platforms.
              </p>
            </div>
          </div>

        </div>
      </div>
      <img src="/assets/img/header/hand_megaphone.png" alt="" className="hand-mega slide_up_down" />
      <img src="/assets/img/header/head6_rating.png" alt="" className="head6-rating scale_up_down" />
      <img src="/assets/img/header/header5_linechart.png" alt="" className="head6-charts scale_up_down" />
      <img src="/assets/img/header/rocket.png" alt="" className="head6-rocket" />

    </header>
  )
}

export default AboutHeader