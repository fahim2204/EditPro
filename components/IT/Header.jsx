import { useState } from 'react';
import Link from 'next/link';
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  const openVideo = (event) => {
    event.preventDefault();
    setOpen(true);
  }

  return (
    <header className="style-2 overflow-hidden"  data-scroll-index="1">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="content text-center text-light text-capitalize">
              <div className="top_info">
                <h1 className="text-uppercase">Iteck</h1>
                <p className="fw-light text-uppercase">
                  Best Solutions for <br /> <strong className="fw-bold">Big Data & TEchnology</strong> Services
                </p>
                <a href="https://youtu.be/pGbIOC83-So?t=21" className="vid-btn" onClick={openVideo}>
                  <i className="bi bi-play-fill wow heartBeat infinite slower"></i>
                </a>
              </div>
              <div className="brands mt-200 mb-80">
                <a href="#" className="logo wow fadeInUp" data-wow-delay="0">
                  <img src="/assets/img/about/about_logos/1.png" alt="" />
                </a>
                <a href="#" className="logo wow fadeInUp" data-wow-delay="0.2s">
                  <img src="/assets/img/about/about_logos/2.png" alt="" />
                </a>
                <a href="#" className="logo wow fadeInUp" data-wow-delay="0.4s">
                  <img src="/assets/img/about/about_logos/3.png" alt="" />
                </a>
                <a href="#" className="logo wow fadeInUp" data-wow-delay="0.6s">
                  <img src="/assets/img/about/about_logos/4.png" alt="" />
                </a>
                <a href="#" className="logo wow fadeInUp" data-wow-delay="0.8s">
                  <img src="/assets/img/about/about_logos/5.png" alt="" />
                </a>
              </div>
              <h4>
                We can help to maintain and modernize <br /> your IT infrastructure & solve various infrastructure-specific <br /> issues a business may face.
              </h4>
              <p className="d-block mt-40">
                Iteck Co is the partner of choice for many of the world’s leading <br /> enterprises, SMEs and technology challengers. We help businesses elevate their value through <br /> custom software development, product design, QA and consultancy services.
              </p>
              <Link href="/page-about-5">
                <a className="btn sm-butn border text-white radius-9 mt-60 hover-darkBlue">
                  <span>More About Us</span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <img src="/assets/img/header/header_2.png" alt="" className="head_shape2 wave" />
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