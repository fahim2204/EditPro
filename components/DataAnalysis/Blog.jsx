import blogs from '@data/DataAnalysis/blog.json'

const Blog = () => {
  return (
    <section className="blog style-8 bg-gray2">
      <div className="container">
        <div className="content section-padding wow fadeInUp">
          <div className="section-head text-center style-8 mb-80">
            <h6> blog </h6>
            <h3> our News & Insights </h3>
          </div>
          <div className="blog-content">
            <div className="row">
              <div className="col-lg-6">
                <div className="main-post wow fadeInUp">
                  <div className="img img-cover">
                    <img src={blogs[0].cover} alt="" />
                    <div className="tags">
                      <a href="#"> { blogs[0].tag } </a>
                    </div>
                  </div>
                  <div className="info pt-30">
                    <div className="date-author">
                      <a href="#" className="date">
                        { blogs[0].date }
                      </a>
                      <span className="color-999 mx-3"> | </span>
                      <a href="#" className="author color-999">
                        By <span className="color-000 fw-bold"> { blogs[0].author } </span>
                      </a>
                    </div>
                    <h4 className="title">
                      <a href="#"> { blogs[0].title } </a>
                    </h4>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="side-posts">
                  {
                    blogs.map((blog, index) => (
                      index > 0 ?
                        (
                          <div className="item wow fadeInUp" key={index}>
                            <div className="img img-cover">
                              <img src={blog.cover} alt="" />
                            </div>
                            <div className="info">
                              <div className="date-author">
                                <a href="#" className="date">
                                  { blog.date }
                                </a>
                                <span className="color-999 mx-3"> | </span>
                                <a href="#" className="author color-999">
                                  By <span className="color-000 fw-bold"> { blog.author } </span>
                                </a>
                              </div>
                              <h4 className="title">
                                <a href="#"> { blog.title } </a>
                              </h4>
                            </div>
                          </div>
                        )
                        :
                        null
                    ))
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Blog