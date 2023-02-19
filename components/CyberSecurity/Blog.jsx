import React from 'react'

const Blog = () => {
  return (
    <section className="blog style-10 section-padding bg-light">
      <div className="container">
        <div className="mb-70">
          <div className="row">
            <div className="col-lg-8">
              <p className="color-blue7 mb-10"> News Feeds </p>
              <h2> Company Blog & Insights </h2>
            </div>
            <div className="col-lg-4 text-lg-end">
              <a href="#0" className="btn btn-icon-circle rounded-pill fw-bold brd-gray hover-orange2 mt-4 mt-lg-0">
                <small> show more <i className="fas fa-long-arrow-alt-right bg-blue7 text-white"></i> </small>
              </a>
            </div>
          </div>
        </div>
        <div className="contact">
          <div className="row">
            <div className="col-lg-5">
              <div className="blog-card">
                <div className="img">
                  <img src="/assets/img/blog/18.png" alt="" className="" />
                </div>
                <div className="info">
                  <h5> <a href="#"> Best unlocked me an striking perceive. </a> </h5>
                  <p> One of the most important WIP of a blog design is readability. An sure that the background and foreground colors. </p>
                  <div className="date"> <a href="#"> Nov 21, 2022 </a> <span className="color-999 mx-3"> | </span> <a href="#"> <span className="color-999"> By </span> Admin </a> </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="cards">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="blog-card mt-4 mt-lg-0">
                      <div className="info w-100">
                        <h5> <a href="#"> The practice of blog's look, feel, branding </a> </h5>
                        <p> One of the most important WIP of a blog design is readability. An sure that the background and foreground colors. </p>
                        <div className="date"> <a href="#"> Nov 21, 2022 </a> <span className="color-999 mx-3"> | </span> <a href="#"> <span className="color-999"> By </span> Admin </a> </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="blog-card mt-4 mt-lg-0">
                      <div className="info w-100">
                        <h5> <a href="#"> The readability & open functionality </a> </h5>
                        <p> One of the most important WIP of a blog design is readability. An sure that the background and foreground colors. </p>
                        <div className="date"> <a href="#"> Nov 21, 2022 </a> <span className="color-999 mx-3"> | </span> <a href="#"> <span className="color-999"> By </span> Admin </a> </div>
                      </div>
                    </div>
                  </div>
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