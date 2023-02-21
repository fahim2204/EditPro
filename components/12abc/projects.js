import { useEffect } from 'react';
import Link from 'next/link';
import ProjectsData from '../../data/12abc/projects.json';
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

const Projects = () => {

  useEffect(() => {
    setTimeout(() => {
      if (!mixitup) return;
      mixitup('.portfolio-projects')
    }, 0);
  }, []);

  return (
    <section className={`portfolio-projects section-padding pt-50 style-1`}>
      <div className="container">
        <div className={`section-head text-center style-5 mb-5`}>
          <h2 className="mb-20">Our<span>Services</span> </h2>
          <p>Revolutionize your visual content - with our cutting-edge online image editing and enhancement tools.</p>
        </div>
        <section className="portfolio style-1">
          <div className="content">
            <div className="row mix-container">
              {
                ProjectsData.projects.map((project, i) => (
                  <div className={`col-lg-4 mix ${project.filter}`} key={i}>
                    <div className={`portfolio-card ${i !== ProjectsData.projects.length - 1 ? 'mb-50' : ''}`}>
                      <div className="img">
                        {/* <img src={project.video} alt="Diffusion Video" /> */}
                        {project.video ? <img src={project.video} alt="Diffusion Video" /> : <ReactCompareSlider
                          itemOne={
                            <ReactCompareSliderImage src={project.imgUp} alt="Image one" />
                          }
                          itemTwo={
                            <ReactCompareSliderImage src={project.imgRes} alt="Image two" />
                          }
                        />}
                      </div>
                      <div className="info">
                        <h5>
                          <Link href={project.route}>
                            {project.title}
                          </Link>
                        </h5>
                        <div className="text">
                          {project.details}
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
          <div className="text-center">
            <a href="#" className={`btn rounded-pill fw-bold mt-30 sm-butn hover-blue2 blue5-3Dbutn`} target="_blank">
              <small>Show More</small>
            </a>
          </div>
        </section>
      </div>
    </section>
  )
}

export default Projects