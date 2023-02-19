import Link from 'next/link';
import data from '@data/Software/blog.json';

const Blog = () => {
  return (
    <section className="blog section-padding style-3" data-scroll-index="7">
      <div className="container">
        <div className="row gx-0 justify-content-between">
          <div className="col-lg-5">
            <div className="blog-content">
              <div className="section-head style-3 d-flex align-items-center mb-50">
                <h3>Iteck’s <span>Journal</span></h3> <Link href="/page-blog-5"><a className="text-muted ms-5 ps-5 mt-2">All  Articles <i className="bi bi-chevron-right ms-1"></i></a></Link>
              </div>
              {
                data.blogs.map((post, i) => (
                  <div className={`card border-0 bg-transparent rounded-0 ${i !== data.blogs.length - 1 ? 'border-bottom brd-gray':''} pb-4 mb-4`} key={i}>
                    <div className="row align-items-center">
                      <div className="col-lg-4">
                        <Link href="/page-single-post-5">
                          <a className="img img-cover">
                            <img src={post.cover} className="radius-2" alt="..." />
                          </a>
                        </Link>
                      </div>
                      <div className="col-lg-8">
                        <div className="card-body p-0">
                          <small className="d-block date text">
                            <a href="#" className="text-uppercase border-end brd-light pe-3 me-3 color-blue2 fw-bold">{ post.type }</a>
                            <i className="bi bi-clock me-1"></i>
                            <a href="#" className="op-8">{ post.time }</a>
                          </small>
                          <h6 className="card-title"><Link href="/page-single-post-5"><a>{ post.title}</a></Link></h6>
                          <div className="d-flex small mt-20 align-items-center justify-content-between op-9">
                            <div className="l_side d-flex align-items-center">
                              <span className="icon-10 rounded-circle d-inline-flex justify-content-center align-items-center text-uppercase bg-blue2 p-2 me-2 text-white">
                                { post.userImage }
                              </span>
                              <a href="#">
                                <small className="text-muted">By</small> { post.username }
                              </a>
                            </div>
                            <div className="r-side mt-1">
                              <i className="bi bi-chat-left-text me-1"></i>
                              <a href="#">{ post.comments }</a>
                              <i className="bi bi-eye ms-4 me-1"></i>
                              <a href="#">{ post.views }</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
          <div className="col-lg-5">
            <div className="faq style-3">
              <div className="section-head style-3 text-uppercase mb-50">
                <h3>FAQS</h3>
              </div>
              <div className="accordion" id="accordionExample">
                {
                  data.faq.map((item, index) => (
                    <div className="accordion-item" key={index}>
                      <h2 className="accordion-header" id={`heading${index+1}`}>
                        <button className={`accordion-button ${index === 0 ? '':'collapsed'}`} type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${index+1}`} aria-expanded="true" aria-controls={`collapse${index+1}`}>
                          { item.question }
                        </button>
                      </h2>
                      <div id={`collapse${index+1}`} className={`accordion-collapse collapse ${index === 0 ? 'show':''}`} aria-labelledby={`heading${index+1}`} data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                          { item.answer }
                        </div>
                      </div>
                    </div>
                  ))
                }
                <Link href="/page-contact-5">
                  <a className="text-muted text-uppercase mt-50 small">
                    See More <i className="bi bi-chevron-right ms-1"></i>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="client-logos mt-100">
          <div className="row align-items-center">
            {
              data.clients.map((client, index) => (
                <div className="col-6 col-lg-2" key={index}>
                  <a href="#" className="img d-block">
                    <img src={client} alt="" />
                  </a>
                </div>
              ))
            }
          </div>
        </div>
      </div>
      <img src="/assets/img/blog/v_lines.png" alt="" className="v_lines" />
    </section>
  )
}

export default Blog