import React from 'react';
import blogs from '@data/PaymentSolutions/blog.json';

const Blog = () => {
  return (
    <section className="blog section-padding style-14">
      <div className="container">
        <div className="section-head text-center mb-40">
          <p className="color-red1 text-uppercase fw-bold mb-10"> insights </p>
          <h2 className="fs-1"> Company Blog & Insights </h2>
        </div>
        <div className="content">
          <div className="row gx-5">
            {
              blogs.map((blog, index) => (
                <div className="col-lg-4" key={index}>
                  <div className={`blog-item ${index !== blog.length - 1 ? 'mb-5 mb-lg-0' : ''}`}>
                    <div className="img img-cover">
                      <img src={blog.cover} alt="" />
                    </div>
                    <div className="info">
                      <div className="date">
                        <a href="#" className="color-red1 text-uppercase"> {blog.author} </a>
                        <a href="#" className="color-666 text-uppercase ps-3 ms-3 border-1 border-start"> <i className="fal fa-calendar-alt"></i> {blog.date} </a>
                      </div>
                      <h5> {blog.title} </h5>
                      <a href="#" className="more"> read more </a>
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