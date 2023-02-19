import React, { useState } from 'react'
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  const openVideo = (e) => {
    e.preventDefault();
    setOpen(true);
  }

  return (
    <header className="style-14">
      <div className="container">
        <div className="content">
          <div className="row align-items-end">
            <div className="col-lg-5">
              <div className="info">
                <a href="https://youtu.be/pGbIOC83-So?t=21" data-lity className="vid_link" onClick={openVideo}>
                  <span className="icon"> <i className="fas fa-play"></i> </span>
                  <p> Explore Iteck </p>
                </a>
                <h1> Smart Banking One <span> Solutions </span> </h1>
                <div className="form-group">
                  <span className="icon"> <i className="fas fa-envelope-open"></i> </span>
                  <input type="text" className="form-control" placeholder="Business email" />
                  <button className="btn rounded-pill text-white bg-red1 shadow-lg fw-bold" target="_blank">
                    <small> Signup For Free </small>
                  </button>
                </div>
                <div className="down_store">
                  <p className="fw-bold mb-3"> Available App </p>
                  <div className="btns">
                    <a href="#" className="me-2"> <img src="/assets/img/header/head_14_btn_apple.png" alt="" />
                    </a>
                    <a href="#"> <img src="/assets/img/header/head_14_btn_android.png" alt="" /> </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="img">
                <img src="/assets/img/header/header_14_img.png" alt="" />
              </div>
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
    </header>
  )
}

export default Header