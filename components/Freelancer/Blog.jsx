import React from 'react';
import blogs from '@data/Freelancer/blog.json';

const Blog = () => {
  return (
    <section className="blog section-padding style-13">
      <div className="container">
        <div className="section-head text-center mb-50 style-13">
          <h6> news </h6>
          <h2> Blog & Insights </h2>
        </div>
        <div className="content">
          <div className="row">
            {
              blogs.map((blog, idx) => (
                <div className="col-lg-4" key={idx}>
                  <div className="blog-item">
                    <div className="cont">
                      <div className="tags">
                        {
                          blog.tags.map((tag, i) => (<a href="#" key={i}> {tag} </a>))
                        }
                      </div>
                      <h5> <a href="#"> {blog.title}... </a> </h5>
                      <div className="author d-flex align-items-center">
                        <div className="img icon-60 rounded-circle overflow-hidden img-cover me-3 flex-shrink-0">
                          <img src={blog.authorPic} alt="" />
                        </div>
                        <div className="inf">
                          <h6 className="fw-bold mb-1"> <a href="#"> {blog.authorName} </a> </h6>
                          <p className=""> <span className="color-999"> Date: </span> <a href="#"> {blog.date} </a> </p>
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
    </section>
  )
}

export default Blog