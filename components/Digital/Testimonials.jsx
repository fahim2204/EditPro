import { useState } from 'react';
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";
import testimonials from '@data/Digital/testimonials.json'

const Testimonials = () => {
  const [isOpen, setOpen] = useState(false);

  const openVideo = (e) => {
    e.preventDefault();
    setOpen(true);
  }

  return (
    <section className="testimonials section-padding style-1" data-scroll-index="5">
      <div className="container">
        <div className="section-head mb-60 text-center">
          <h6 className="color-main text-uppercase wow fadeInUp">testimonials</h6>
          <h2 className="wow fadeInUp">
            The Trust <span className="fw-normal">From Clients</span>
          </h2>
        </div>
        <div className="content">
          <div className="row">
            <div className="col-lg-5">
              <div className="vid_img mb-2 mb-md-0 wow zoomIn slow">
                <img src="/assets/img/testimonials/testi.jpeg" alt="" />
                <a href="https://youtu.be/pGbIOC83-So?t=21" className="play_icon" onClick={openVideo}>
                  <i className="bi bi-play"></i>
                </a>
                <div className="img_info wow fadeInUp">
                  <h4><a href="#">Casper Defloy</a></h4>
                  <small><a href="#">Tech Leader at Esty Inc</a></small>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="info wow fadeInUp">
                {
                  testimonials.map((testimonial, index) => (
                    <div className={`client_card ${index !== testimonials.length - 1 ? 'mb-2':''}`} data-wow-delay={index * 0.2 + "s"} key={index}>
                      <div className="user_img">
                        <img src={testimonial.userImg} alt="" />
                      </div>
                      <div className="inf_content">
                        <div className="rate_stars">
                          {
                            Array(testimonial.stars).fill().map((_,i) => (<i key={i} className="bi bi-star-fill"></i>))
                          }
                        </div>
                        <h6>
                          “{ testimonial.comment }”
                        </h6>
                        <p>{ testimonial.username }  <span className="text-muted">/  { testimonial.position }</span></p>
                      </div>
                    </div>
                  ))
                }
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
    </section>
  )
}

export default Testimonials