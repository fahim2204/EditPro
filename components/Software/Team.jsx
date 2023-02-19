import Link from 'next/link';
import teamMembers from '@data/Software/team.json';

const Team = () => {
  return (
    <section className="team section-padding style-1 team-blue2" data-scroll-index="6">
      <div className="container">
        <div className="section-head long-shape style-3 text-center mb-70">
          <h3>Meet Our <span>Amazing Team</span></h3>
        </div>
        <div className="content">
          {
            teamMembers.map((member, i) => (
              <div className="team_box" key={i}>
                <div className="avatar">
                  <img src={member.picture} alt="" />
                </div>
                <div className="info">
                  <h6><a href="#">{ member.name }</a></h6>
                  <small>{ member.position }</small>
                  <div className="social_icons">
                    <a href="#">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-github"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
        <div className="bttns mt-4 text-center mt-50">
          <Link href="/page-about-5">
            <a className="btn rounded-pill bg-blue2 sm-butn mx-1 text-white">
              <span>See All Team</span>
            </a>
          </Link>
          <Link href="/page-contact-5">
            <a className="btn rounded-pill border-blue2 hover-blue2 sm-butn mx-1">
              <span>Join Our Team</span>
            </a>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Team