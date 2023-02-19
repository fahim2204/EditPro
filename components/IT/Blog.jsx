import Link from 'next/link';
import blogs from '@data/IT/blog.json';

const Blog = () => {
  const firstBlog = blogs[0];
  const blogsList = blogs.slice(1);

  return (
    <section className="blog style-2 section-padding" data-scroll-index="7">
      <div className="container">
        <div className="section-head mb-30 text-center">
          <h2 className="text-white ltspc-20 text-uppercase fs-1 lh-1 mb-70">editorial</h2>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="content">
              <div className="row gx-5">
                <div className="col-lg-6 border-end brd-light">
                  <div className="card border-0 bg-transparent rounded-0 text-white mb-4 mb-lg-0">
                    <div className="img">
                      <img src={firstBlog.cover} className="card-img-top" alt="..." />
                    </div>
                    <div className="card-body px-0">
                      <small className="d-block date text mt-2">
                        <a href="#" className="text-uppercase border-end brd-light pe-3 me-3">News</a>
                        <i className="bi bi-clock me-1"></i>
                        <a href="#" className="op-8">Posted on { firstBlog.time }</a>
                      </small>
                      <h4 className="fw-normal text-white mt-2">
                        <Link href="/page-single-post-5"><a>{ firstBlog.title }</a></Link>
                      </h4>
                      <p className="small mt-2 op-8">{ firstBlog.short_desc }</p>
                      <div
                        className="d-flex small mt-30 align-items-center justify-content-between op-9">
                        <div className="l_side d-flex align-items-center">
                          <span className="icon-20 rounded-circle d-inline-flex justify-content-center align-items-center text-uppercase bg-main p-1 me-2">
                            { firstBlog.placeholderImageText }
                          </span>
                          <a href="#" className="mt-1">
                            By { firstBlog.author }
                          </a>
                        </div>
                        <div className="r-side mt-1">
                          <i className="bi bi-chat-left-text me-1"></i>
                          <a href="#">{ firstBlog.comments }</a>
                          <i className="bi bi-eye ms-4 me-1"></i>
                          <a href="#">{ firstBlog.views }</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  {
                    blogsList.map((blog, index) => (
                      <div className={`card border-0 bg-transparent rounded-0 text-white ${index !== blogsList.length - 1 ? 'border-bottom brd-light pb-4 mb-4':''}`} key={index}>
                        <div className="row">
                          <div className="col-lg-5">
                            <div className="img h-100">
                              <img src={blog.cover} className="w-100 h-100 radius-2" alt="..." />
                            </div>
                          </div>
                          <div className="col-lg-7">
                            <div className="card-body pt-3 pt-lg-0">
                              <small className="d-block date text">
                                <a href="#" className="text-uppercase border-end brd-light pe-3 me-3">News</a>
                                <i className="bi bi-clock me-1"></i>
                                <a href="#" className="op-8">{ blog.time }</a>
                              </small>
                              <h6 className="fw-normal text-white mt-2 fs-6"> <a href="#">{ blog.title }</a> </h6>
                              <div
                                className="d-flex small mt-20 align-items-center justify-content-between op-9">
                                <div className="l_side d-flex align-items-center">
                                  <span className="icon-20 rounded-circle d-inline-flex justify-content-center align-items-center text-uppercase bg-main p-2 me-2">
                                    { blog.placeholderImageText }
                                  </span>
                                  <a href="#" className="mt-1">
                                    By { blog.author }
                                  </a>
                                </div>
                                <div className="r-side mt-1">
                                  <i className="bi bi-chat-left-text me-1"></i>
                                  <a href="#">{ blog.comments }</a>
                                  <i className="bi bi-eye ms-4 me-1"></i>
                                  <a href="#">{ blog.views }</a>
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
            </div>
          </div>
        </div>
        <div className="text-center">
          <a href="#" className="sm-butn btn border text-white radius-9 mt-80 hover-lightBlue border-lightBlue">
            <span>See More Articles</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Blog