import { useState } from "react";
import FadeInOut from '../FadeInOut';
import productDetails from '@data/App/product-details.json';
import productDetailsRTL from '@data/App/product-details-rtl.json';

const ProductDetails = ({ style = "4", rtl }) => {
  const data = rtl ? productDetailsRTL : productDetails;
  const [tabs, setTabs] = useState(data.nav_tabs);

  const openTab = (tabId) => {
    // Remove class 'current' from all tab-links
    document.querySelectorAll(`.product-details .nav-link`).forEach(el => el.classList.remove('active'));
    // Add class 'current' to clicked tab-link
    document.querySelector(`.product-details .nav-link[id="${tabId}-tab"]`).classList.add('active');

    // Close all tabs and open tab with id == tabId
    setTabs(prev_tabs => {
      let newTabs = structuredClone(prev_tabs);

      let newContents = newTabs.map(tab => {
        tab.show = false;
        return tab;
      });

      let idx = newContents.findIndex(tab => tab.id === tabId);

      newContents[idx].show = true;

      newTabs = newContents;

      return newTabs;
    });
  }

  return (
    <section className="product-details pt-100">
      <div className="container">
        <ul className="nav nav-pills" id="pills-tab" role="tablist">
          {
            data.nav_pills.map((nav, i) => (
              <li className="nav-item" role="presentation" key={i}>
                <button className={`nav-link ${i === 0 ? 'active':''}`} id={`${nav.id}-tab`} data-bs-toggle="pill" data-bs-target={`#${nav.id}`} type="button" role="tab" aria-controls={nav.id} aria-selected="true" onClick={() => openTab(nav.id)}>{ nav.title }</button>
              </li>
            ))
          }
        </ul>
        <div className="tab-content" id="pills-tabContent">
          <FadeInOut show={tabs[0].show}>
            <div className="tab-pane show active" id="pills-description" role="tabpanel" aria-labelledby="pills-description-tab">
              <div className="content-info text-center pb-0">
                <div className="text mb-30">
                  {
                    rtl ?
                    'عند موافقه العميل المبدئيه على التصميم يتم ازالة هذا النص من التصميم ويتم وضع النصوص النهائية المطلوبة للتصميم ويقول البعض ان وضع النصوص التجريبية بالتصميم قد تشغل المشاهد عن وضع الكثير من الملاحظات او الانتقادات للتصميم الاساسي.'
                    :
                    'Nulla velit turpis, tincidunt eget elit vitae, congue sodales metus. Sed sed neque luctus, sollicitudin sem sed, consectetur libero. Nunc mollis turpis velit, vitae laoreet sapien vehicula nec. Curabitur blandit ac libero eu dictum. Nullam vehicula hendrerit nisl eu laoreet. Cras non velit est. Vivamus tincidunt lacus est, at auctor elit finibus et. Maecenas a consequat metus. Aliquam ac nisl nec est mollis faucibus eget vitae eros. Duis bibendum vestibulum felis id mattis.'
                  }
                </div>
                <div className="text">
                  {
                    rtl ?
                    'عند موافقه العميل المبدئيه على التصميم يتم ازالة هذا النص من التصميم ويتم وضع النصوص النهائية المطلوبة للتصميم ويقول البعض ان وضع النصوص التجريبية بالتصميم قد تشغل المشاهد عن وضع الكثير من الملاحظات او الانتقادات للتصميم الاساسي.'
                    :
                    'Suspendisse metus sapien, lacinia eu lectus sit amet, consequat mollis felis. Mauris convallis augue quis semper venenatis. Vivamus imperdiet leo at neque efficitur, id faucibus arcu eleifend. Vivamus in massa bibendum, aliquet est quis, ornare lacus.'
                  }
                </div>
              </div>
            </div>
          </FadeInOut>
          <FadeInOut show={tabs[1].show}>
            <div className="tab-pane show active" id="pills-reviews" role="tabpanel" aria-labelledby="pills-reviews-tab">
              <div className="product-reviews pt-30">
                <div className="row gx-5">
                  <div className="col-lg-7">
                    <div className="reviews-content pt-30">
                      <h5 className="color-000 mb-40 text-capitalize"> { rtl ? 'المراجعات 02' : '02 reviews' } </h5>
                      <div className="comment-replay-cont bg-light py-5 px-4 mb-20">
                        <div className="d-flex comment-cont">
                          <div className="icon-60 rounded-circle img-cover overflow-hidden me-3 flex-shrink-0">
                            <img src="/assets/img/team/2.jpeg" alt="" />
                          </div>
                          <div className="inf">
                            <div className="title d-flex justify-content-between">
                              <h6 className="fw-bold fs-14px">{ rtl ? 'روبوتات داونى' : 'Robert Downey Jr' }</h6>
                              <div className="time fs-12px text-uppercase d-inline-block">
                                <div className="rate">
                                  <div className="stars">
                                    <i className="fas fa-star active"></i>
                                    <i className="fas fa-star active"></i>
                                    <i className="fas fa-star active"></i>
                                    <i className="fas fa-star active"></i>
                                    <i className="fas fa-star"></i>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="text color-000 fs-12px mt-10">
                              { rtl ? 'عند موافقه العميل المبدئيه على التصميم يتم ازالة هذا النص من التصميم ويتم وضع النصوص النهائية المطلوبة للتصميم ويقول البعض ان وضع النصوص التجريبية بالتصميم قد تشغل المشاهد عن وضع الكثير من الملاحظات او الانتقادات للتصميم الاساسي.' : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Atume nusaate staman utra phone limo sumeria' }
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="comment-replay-cont bg-light py-5 px-4 mb-20">
                        <div className="d-flex comment-cont">
                          <div className="icon-60 rounded-circle img-cover overflow-hidden me-3 flex-shrink-0">
                            <img src="/assets/img/team/4.jpeg" alt="" />
                          </div>
                          <div className="inf">
                            <div className="title d-flex justify-content-between">
                              <h6 className="fw-bold fs-14px">{ rtl ? 'بين كويل' : 'Ben Chiwell' }</h6>
                              <div className="time fs-12px text-uppercase">
                                <div className="rate">
                                  <div className="stars">
                                    <i className="fas fa-star active"></i>
                                    <i className="fas fa-star active"></i>
                                    <i className="fas fa-star active"></i>
                                    <i className="fas fa-star active"></i>
                                    <i className="fas fa-star"></i>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="text color-000 fs-12px mt-10">
                              { rtl ? 'عند موافقه العميل المبدئيه على التصميم يتم ازالة هذا النص من التصميم ويتم وضع النصوص النهائية المطلوبة للتصميم ويقول البعض ان وضع النصوص التجريبية بالتصميم قد تشغل المشاهد عن وضع الكثير من الملاحظات او الانتقادات للتصميم الاساسي.' : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Atume nusaate staman utra phone limo sumeria' }
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-5">
                    <form className="comment-form d-block pt-30">
                      <h5 className="color-000 mb-40 text-capitalize"> { rtl ? 'اضافة تعليق' : 'Add a review' } </h5>
                      <div className="row">
                        <div className="col-lg-12">
                          <label className="text-uppercase mb-1">
                            { rtl ? 'تقييمك' : 'your rating' }
                          </label>
                          <div className="rate-stars">
                            <input type="radio" name="star" defaultValue="5" />
                            <input type="radio" name="star" defaultValue="4" />
                            <input type="radio" name="star" defaultValue="3" />
                            <input type="radio" name="star" defaultValue="2" />
                            <input type="radio" name="star" defaultValue="1" />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="form-group mb-30">
                            <textarea className="form-control radius-4 fs-12px p-3" rows="6" placeholder={ rtl ? 'أكتب تعليقك هنا' : "Write your comment here" }></textarea>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group mb-4 mb-lg-0">
                            <input type="text" className="form-control fs-12px radius-4 p-3" name="name" placeholder={ rtl ? 'اسمك *' : "Your Name *" } />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <input type="text" className="form-control fs-12px radius-4 p-3" name="email" placeholder={ rtl ? 'بريدك الالكتروني *' : "Your Email *" } />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="form-check mt-20">
                            <input className="form-check-input" type="checkbox" defaultValue="" id="flexCheckDefault" />
                            <label className="form-check-label fs-12px" htmlFor="flexCheckDefault">
                              { rtl ? 'احفظ اسمي والبريد الإلكتروني في هذا المتصفح لاستخدامها المرة المقبلة في تعليقي' : 'Save my name & email in this browser for next time I comment' }
                            </label>
                          </div>
                        </div>
                        <div className="col-12">
                          <a href="#" className={`btn rounded-pill bg-blue${style} fw-bold text-white mt-4`} target="_blank">
                            <small> { rtl ? 'إرسال تعليق' : 'Submit Comment' } </small>
                          </a>
                        </div>
                      </div>

                    </form>
                  </div>
                </div>
              </div>
            </div>
          </FadeInOut>
          <FadeInOut show={tabs[2].show}>
            <div className="tab-pane show active" id="pills-information" role="tabpanel" aria-labelledby="pills-information-tab">
              <div className="content-info pb-0">
                <div className="additional-info">
                  <ul>
                    <li>
                      <strong>{ rtl ? 'الوزن' : 'Weight' }</strong>
                      <span> 0.6 kg </span>
                    </li>
                    <li>
                      <strong>{ rtl ? 'الابعاد' : 'Dimensions' }</strong>
                      <span> 40 × 30 × 30 cm </span>
                    </li>
                    <li>
                      <strong>{ rtl ? 'اللون' : 'Color' }</strong>
                      <span> White, Black, Red </span>
                    </li>
                    <li>
                      <strong>{ rtl ? 'السنة' : 'Year' }</strong>
                      <span> 2021 </span>
                    </li>
                    <li>
                      <strong>{ rtl ? 'الشكل' : 'Style' }</strong>
                      <span> { rtl ? 'كلاسيك' : 'Classic, Modern' } </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </FadeInOut>
        </div>
      </div>
    </section>
  )
}

export default ProductDetails