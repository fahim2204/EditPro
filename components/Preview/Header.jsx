import { useEffect } from 'react';
import appData from '@data/appData.json';
import scenes from '@data/Preview/header.json';

const Header = () => {
  useEffect(() => {
    setTimeout(() => {
      if (typeof Parallax !== 'undefined') {
        var scene = document.getElementById('js-scene');
        new Parallax(scene);

        var scene2 = document.getElementById('js-scene2');
        new Parallax(scene2);
      }
    });
  }, []);

  return (
    <header className="valign">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7">
            <div className="cont text-center">
              {/* 
                <div className="coming">
                  <h6 className="sub-title text-uppercase color-darkBlue mb-20 fs-14px ltspc-2 fw-bold">Next demos will arrive in:</h6>
                  <div className="clockdiv" data-date="aug 10, 2022">
                    <div>
                      <div className="days fs-1 color-darkBlue fw-600"></div>
                      <span>Days</span>
                    </div>
                    <div>
                      <div className="hours fs-1 color-darkBlue fw-600"></div>
                      <span>Hours</span>
                    </div>
                    <div>
                      <div className="minutes fs-1 color-darkBlue fw-600"></div>
                      <span>Minutes</span>
                    </div>
                    <div>
                      <div className="seconds fs-1 color-darkBlue fw-600"></div>
                      <span>Seconds</span>
                    </div>
                  </div>
                </div> 
              */}
              <h1> Software & Technology <br /> HTML Template </h1>
              <a href="#demos" className="btn rounded-pill bg-white fw-bold color-darkBlue mt-50 me-2">
                <small className="text-uppercase"> all demos </small>
              </a>
              <a href={appData.itemStoreLink} className="btn rounded-pill bg-blue4 fw-bold text-white mt-50">
                <small className="text-uppercase"> Purchase Now </small>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="circle-img">
        <img src="/landing-preview/img/circle.png" alt="" />
      </div>

      <div className="mag-img">
        <div id="js-scene" data-invert-y="true" data-invert-x="true">
          <div className="imgs one">
            {
              scenes.scene1.one.map((scene, i) => (
                <div className={`top ${scene.class} layer`} data-depth={scene.depth} key={i}>
                  <img src={scene.img} alt="" />
                </div>
              ))
            }
          </div>

          <div className="imgs three">
            {
              scenes.scene1.three.map((scene, i) => (
                <div className={`top ${scene.class} layer`} data-depth={scene.depth} key={i}>
                  <img src={scene.img} alt="" />
                </div>
              ))
            }
          </div>

          <div className="imgs four">
            {
              scenes.scene1.four.map((scene, i) => (
                <div className={`top ${scene.class} layer`} data-depth={scene.depth} key={i}>
                  <img src={scene.img} alt="" />
                </div>
              ))
            }
          </div>

          <div id="js-scene2" data-invert-y="false" data-invert-x="false">
            <div className="imgs two">
              {
                scenes.scene2.two.map((scene, i) => (
                  <div className={`top ${scene.class} layer`} data-depth={scene.depth} key={i}>
                    <img src={scene.img} alt="" />
                  </div>
                ))
              }
            </div>

            <div className="imgs five">
              {
                scenes.scene2.five.map((scene, i) => (
                  <div className={`top ${scene.class} layer`} data-depth={scene.depth} key={i}>
                    <img src={scene.img} alt="" />
                  </div>
                ))
              }
            </div>

            <div className="mob">
              <div className="layer" data-depth="0.10">
                <img src="/landing-preview/img/header/mob.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header