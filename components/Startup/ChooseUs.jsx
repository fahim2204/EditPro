import chooseUsData from '@data/Startup/chooseus.json';
import chooseUsDataRTL from '@data/Startup/chooseus-rtl.json';


const ChooseUs = ({ rtl }) => {
  const data = rtl ? chooseUsDataRTL : chooseUsData;

  return (
    <section className="choose-us section-padding style-6" data-scroll-index="4">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-6">
            <div className="img">
              <img src="/assets/img/choose_us/man_arrow.png" alt="" />
            </div>
          </div>
          <div className="col-lg-5">
            <div className="info">
              <div className="section-head mb-20 style-6">
                {
                  rtl ?
                  <h2> لماذا تختار <span><small>Itekseo</small></span></h2>
                  :
                  <h2>Why choose <span><small>Itekseo</small></span></h2>
                }
              </div>
              <div className="text mb-50">
                {
                  rtl ?
                  <>نحن متحمسون لعملنا. يظل المصممون لدينا في الصدارة لتقديم تصميمات مواقع ويب جذابة وسهلة الاستخدام لجعل عملك متميزًا</>
                  :
                  <>We are passionate about our work. Our designers stay ahead of the curve to provide engaging and user-friendly website designs to make your business stand out</>
                }
              </div>
              <ul>
                {
                  data.map((item, index) => (
                    <li className={`d-flex ${index !== chooseUsData.length - 1 ? 'mb-40':''}`} key={index}>
                      <small
                        className="icon-60 bg-gray rounded-circle color-blue4 d-inline-flex align-items-center justify-content-center me-4 flex-shrink-0">
                        <img src={item.image} alt="" />
                      </small>
                      <div className="inf">
                        <h5>{ item.title }</h5>
                        <p className="fs-12px color-666 mt-2">
                          { item.text }
                        </p>
                      </div>
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>
        </div>
      </div>
      <img src="/assets/img/about/about_s6_bubbles.png" alt="" className="bubbles rotate-center" />
    </section>
  )
}

export default ChooseUs