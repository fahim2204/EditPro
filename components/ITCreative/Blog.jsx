import Link from 'next/link';
import blogs from '@data/ITCreative/blog.json';

const Blog = () => {
  return (
    <section className="blog style-7 section-padding">
      <div className="container">
        <div className="section-head text-center style-4 mb-80">
          <div className="top-title mb-10">
            <img src="/assets/img/line_l.png" alt="" />
            <h5> blog </h5>
            <img src="/assets/img/line_r.png" alt="" />
          </div>
          <h2 className="">
            Company <span> News & Insights </span>
          </h2>
        </div>
        <div className="content">
          <div className="row">
            {
              blogs.map((blog, index) => (
                <div className="col-lg-4" key={index}>
                  <div className="blog-card style-7 mt-5 mt-lg-0">
                    <div className="img img-cover">
                      <img src={blog.cover} alt="" />
                    </div>
                    <div className="info pt-40">
                      <div className="date-tags">
                        <div className="tags">
                          <Link href="/page-blog-app"><a>{ blog.category }</a></Link>
                        </div>
                        <a href="#" className="date">
                          { blog.date }
                        </a>
                        <span className="color-999"> | </span>
                        <a href="#" className="author color-999">
                          By <span className="color-000 fw-bold"> { blog.author } </span>
                        </a>
                      </div>
                      <h4 className="title">
                        <Link href="/page-single-post-app"><a> { blog.title } </a></Link>
                      </h4>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
      <img src="/assets/img/shap_color_7.png" alt="" className="shap_color" />
    </section>
  )
}

export default Blog