import React from 'react';
import team from '@data/CyberSecurity/team.json';

const Team = () => {
  return (
    <section className="team style-10 section-padding">
      <div className="container">
        <div className="mb-70 text-center">
          <p className="color-blue7 mb-10"> Our Team </p>
          <h2> Our Talent Expert </h2>
        </div>
        <div className="content">
          <div className="row">
            {
              team.map((member, idx) => (
                <div className="col-lg-4" key={idx}>
                  <div className="team-card">
                    <div className="img">
                      <img src={member.picture} alt="" className="main-img" />
                      <span className={`bg_color bg-${idx === 1 ? 'blue7' : 'orange2'}`}></span>
                      <div className="social-icons">
                        <span className="icon"> </span>
                        <div className="socials">
                          <a href="#"> <i className="fab fa-twitter"></i> </a>
                          <a href="#"> <i className="fab fa-facebook-f"></i> </a>
                          <a href="#"> <i className="fab fa-behance"></i> </a>
                          <a href="#"> <i className="fab fa-youtube"></i> </a>
                        </div>
                      </div>
                    </div>
                    <div className="info">
                      <p className="text-capitalize color-blue7"> {member.position} </p>
                      <h5> {member.name} </h5>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Team