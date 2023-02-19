import { useState } from 'react';
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";

const ChooseUs = () => {
  const [isOpen, setOpen] = useState(false);

  const openVideo = (e) => {
    e.preventDefault();
    setOpen(true);
  }

  return (
    <section className="choose-us style-7 section-padding">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="img">
              <img src="/assets/img/choose_us/choose7.jpg" alt="" />
              <a href="https://youtu.be/pGbIOC83-So?t=21" className="play_btn" onClick={openVideo}>
                <i className="fas fa-play"></i>
              </a>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="info">
              <div className="section-head style-4 mb-40">
                <div className="top-title mb-10">
                  <img src="/assets/img/line_l.png" alt="" />
                  <h5> Why Choose Us </h5>
                </div>
                <h2 className="text-white">
                  Why Choose <span> Our Own </span> <br /> IT Service?
                </h2>
              </div>
              <ul>
                <li>
                  <div className="icon">
                    <img src="/assets/img/choose_us/icon1.png" alt="" />
                  </div>
                  <div className="inf">
                    <h6> AI Intregrations </h6>
                    <p> Automatically syncs across all your devices </p>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <img src="/assets/img/choose_us/icon2.png" alt="" />
                  </div>
                  <div className="inf">
                    <h6> On Demand Design </h6>
                    <p> Automatically syncs across all your devices </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <img src="/assets/img/about/about_s4_wave.png" alt="" className="top-wave" />
      <img src="/assets/img/about/about_s4_wave.png" alt="" className="bottom-wave" />
      <img src="/assets/img/choose_us/choose7_circe.png" alt="" className="choose-circle rotate-center" />
      {
        typeof window !== "undefined" && 
          (
            <ModalVideo
              channel="youtube"
              autoplay
              isOpen={isOpen}
              videoId="pGbIOC83-So"
              onClose={() => setOpen(false)}
            />
          )
      }
    </section>
  )
}

export default ChooseUs