import blogs from '@data/Startup/blog.json';
import blogsRTL from '@data/Startup/blog-rtl.json';
import BlogCard from './BlogCard';

const Blog = ({ rtl }) => {
  const blogsData = rtl ? blogsRTL : blogs;

  return (
    <section className="blog section-padding style-6" data-scroll-index="8">
      <div className="container">
        {
          rtl ?
          (
            <div className="section-head mb-70 style-6 text-center">
              <h2 className="mb-20"> أحدث الأخبار من <span><small>مجلتنا</small></span></h2>
              <p className="color-666">احصل على أحدث المقالات من صحافتنا ، ناقش وشارك</p>
            </div>
          )
          :
          (
            <div className="section-head mb-70 style-6 text-center">
              <h2 className="mb-20"> Latest from our <span className="ms-1"><small> magazine </small></span></h2>
              <p className="color-666">Get the latest articles from our press, discuss & share</p>
            </div>
          )
        }
        <div className="content">
          {
            blogsData.map((blog, index) => (
              <BlogCard key={index} blog={blog} isCenter={index === 1} rtl={rtl} />
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Blog