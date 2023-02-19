
const About = ({ style = "4", rtl }) => {
  return (
    <section className="about-app style-5">
      <div className="container">
        <div className="content text-center">
          <div className="img-content pt-70 pb-100 border-bottom brd-gray">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div className="info mt-30">
                  <h5 className="lh-4">
                    {
                      rtl ?
                      <>
                        فريق في <a href="#" className={`color-blue${style}`} >@iteck</a> هو مكرس بشكل لا يصدق ، وواسع المعرفة ، ومفيد. كان المنتج النهائي جميلًا ويستحق كل بنس. أوصي بشدة بمختبرات.
                      </>
                      :
                      <>
                        “The team at <a href="#" className={`color-blue${style}`} >@iteck</a> is incredibly dedicated, knowledgeable, and helpful. The finished product was beautiful, and worth every penny. I would absolutely recommend Moonex Labs.”
                      </>
                    }
                  </h5>
                  <a href="#" className="mt-60 color-666 fs-12px text-uppercase">- <strong className="color-000">{ rtl ? 'جون هنري ' : 'Jhon henry' } </strong>{ rtl ? ', المدير التنفيذي في Notero JSC -' : ', ceo at notero jsc -' } </a>
                  <div className="share mt-100">
                    <span className="color-999 fs-12px text-uppercase d-block">{ rtl ? 'شارك هذا المشروع' : 'share this project' }</span>
                    <a href="#" className={`social-icon hover-blue${style} me-2`}>
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#" className={`social-icon hover-blue${style} me-2`}>
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#" className={`social-icon hover-blue${style} me-2`}>
                      <i className="fab fa-pinterest"></i>
                    </a>
                    <a href="#" className={`social-icon hover-blue${style} me-2`}>
                      <i className="fab fa-goodreads-g"></i>
                    </a>
                    <a href="#" className={`social-icon hover-blue${style}`}>
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="next-prog section-padding">
            <h5 className="color-999 text-uppercase fw-light">{ rtl ? 'المشروع التالى' : 'next project' }</h5>
            <a href="#" className="color-000 fs-1 fw-bold mt-20">{ rtl ? 'Criftocy صفحة هبوط' : 'Criftocy Landing Page' }</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About