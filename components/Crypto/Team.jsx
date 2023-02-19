import React from 'react';
import teamMemebers from '@data/Crypto/team.json';

const Team = () => {
  return (
    <section className="team style-15">
      <div className="row gx-0">
        {
          teamMemebers.map((member, idx) => (
            <div className="col-lg-3 col-sm-6" key={idx}>
              <div className="team-card wow fadeInUp">
                <div className="img">
                  <img src={member.picture} alt="" />
                </div>
                <div className="info">
                  <div className="social-icons">
                    <a href="#"> <i className="fab fa-facebook-f"></i> </a>
                    <a href="#"> <i className="fab fa-twitter"></i> </a>
                    <a href="#"> <i className="fab fa-behance"></i> </a>
                    <a href="#"> <i className="fab fa-youtube"></i> </a>
                    <a href="#"> <i className="fab fa-linkedin"></i> </a>
                  </div>
                  <div className="inf">
                    <p className="text-uppercase"> {member.position} </p>
                    <h5> {member.name} </h5>
                  </div>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Team