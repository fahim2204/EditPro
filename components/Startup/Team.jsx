import teamMembers from '@data/Startup/team.json'
import teamMembersRTL from '@data/Startup/team-rtl.json'

const Team = ({ rtl }) => {
  const TeamMembers = rtl ? teamMembersRTL : teamMembers;

  return (
    <section className="team section-padding style-6" data-scroll-index="7">
      <div className="content">
        <div className="container">
          <div className="row items align-items-end mb-50">
            <div className="col-lg-7">
              <div className="section-head mb-0 style-6">
                {
                  rtl ?
                  <h2 className="mb-0">افضل <span><small>المديرين</small></span></h2>
                    :
                  <h2 className="mb-0">Our <span><small>Leaders</small></span></h2>
                }
              </div>
            </div>
            <div className="col-lg-5 text-end">
                {
                  rtl ?
                  <a className="text-decoration-underline text-uppercase mb-4" href="#">مشاهدة الفريق بالكامل</a>
                    :
                  <a className="text-decoration-underline text-uppercase mb-4" href="#">See All our team</a>
                }
            </div>
          </div>
          <div className="row">
            {
              TeamMembers.map((member, index) => (
                <div className="col-lg-3 col-sm-6" key={index}>
                  <div className="team-card mb-30 mb-lg-0 style-6">
                    <div className="img img-cover">
                      <img src={member.picture} alt="" />
                      <div className="social-icons">
                        <a href="#" className="me-1">
                          <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#" className="me-1">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" className="me-1">
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                        <a href="#">
                          <i className="fab fa-github"></i>
                        </a>
                      </div>
                    </div>
                    <div className="info">
                      <a className="d-block" href="#"><h6>{ member.name }</h6></a>
                      <small>{ member.position }</small>
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