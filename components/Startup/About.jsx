import { useState } from 'react';
import Link from 'next/link';
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";

const About = ({ rtl }) => {
  const [isOpen, setOpen] = useState(false);

  const openVideo = (e) => {
    e.preventDefault();
    setOpen(true);
  }

  return (
    <section className="about style-6" data-scroll-index="1">
      <div className="container">
        <div className="content section-padding">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-5">
              <div className="info">
                <div className="section-head mb-40 style-6">
                  <h2>
                    {
                      rtl 
                      ?
                      <>قم بترقية مشاريعك <br /> الى <span><small>أعلى المستويات</small></span></>
                      :
                      <>Boost your business up to <span><small>high level</small></span></>
                    }
                  </h2>
                </div>
                <div className="text">
                  {
                    rtl 
                    ?
                    "مثل أي وكالة عظيمة ، نحن الأفضل بنتاجئنا التي قدمناها لعملنا الأخير. يلتزم مطورونا بالحفاظ على أعلى معايير الويب حتى يتحمل موقعك اختبار الزمن."
                    :
                    "Like any great agency, we are only as good as the result we deliver of our recent work. Our developers are committed to maintaining the highest web standards so that your site will withstand the test of time."
                  }
                </div>
                <div className="btns d-flex align-items-center mt-60">
                  <Link href={`/${rtl ? 'rtl-page-about':'page-about-5'}`}>
                    <a className="btn rounded-pill butn-blue6 hover-blue2 sm-butn fw-bold me-3">
                      <span>
                        { rtl ? "من نحن" : "About Us" } <i className="bi bi-arrow-right ms-1"></i>
                      </span>
                    </a>
                  </Link>
                  <a href="https://youtu.be/pGbIOC83-So?t=21" data-lity className="vid-btn" onClick={openVideo}>
                    <i className="bi bi-play"></i>
                    <span>
                      { rtl ? "مشاهدة" : "See Our" } <br /> { rtl ? "اخر عروضنا" : "Showreels" }
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="img">
                <img src="/assets/img/about/superman_3d.png" alt="" />
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
      <img src="/assets/img/about/about_s6_bubbles.png" alt="" className="bubbles rotate-center" />
    </section>
  )
}

export default About