import React, { useState } from 'react';
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";

const About = () => {
  const [isOpen, setOpen] = useState(false);

  const openVideo = (e) => {
    e.preventDefault();
    setOpen(true);
  }

  return (
    <section className="about section-padding style-14">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 pe-lg-5">
            <div className="info">
              <div className="section-head mb-40">
                <p className="color-red1 text-uppercase fw-bold mb-10"> oslo co. sucess story </p>
                <h2 className="fs-1"> Read or Watch Our Story </h2>
              </div>
              <div className="text">
                Fund your account using a selection of deposit methods or receive money from friends, family and businesses.
              </div>
              <div className="text">
                Iteck has been helping to make it, send it and spend it for millions of customers since 2001. So wherever you are and whatever you want to do with your money, just skrill it.
              </div>
              <a href="#0" className="btn rounded-pill text-white bg-red1 fw-bold mt-30 hover-shadow" target="_blank">
                <small> Read Story <i className="fal fa-long-arrow-right ms-1"></i> </small>
              </a>
            </div>
          </div>
          <div className="col-lg-6 ps-lg-5">
            <div className="img">
              <img src="/assets/img/about/about_14_1.png" alt="" className="main-img" />
              <a href="https://youtu.be/pGbIOC83-So?t=21" data-lity className="play_ptn" onClick={openVideo}> <i className="fas fa-play"></i> </a>
            </div>
          </div>
        </div>
      </div>
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

export default About