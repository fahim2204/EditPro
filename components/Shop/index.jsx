import { useState } from 'react';
import shopData from '@data/App/shop.json';
import shopDataRTL from '@data/App/shop-rtl.json';
import Categories from './Categories'
import Filter from './Filter'
import Product from './Product';
import TopFilter from './TopFilter'

const Shop = ({ style = "4", rtl }) => {
  const [listView, setListView] = useState(false);
  const data = rtl ? shopDataRTL : shopData;

  return (
    <section className="shop section-padding pt-50">
      <div className="container">
        <div className={`section-head text-center style-${style} ${style==="5" ? 'mb-80':''}`}>
          <h2 className="mb-20">{ rtl ? 'سوق' : 'Iteck’s' }  <span> { rtl ? 'Iteck' : 'Store' } </span> </h2>
          <div className="page-links color-999">
            <a href="#" className="me-2">
              { rtl ? 'الرئيسية' : 'Home' }
            </a>
            <span className="me-2">/</span>
            <a href="#" className="color-000">
              { rtl ? 'سوق Iteck' : 'Iteck’s Store' }
            </a>
          </div>
        </div>
        <div className="row gx-4">
          <div className="col-lg-3 col-sm-6">
            <div className="filter">
              <Categories rtl={rtl} />
              <Filter style={style} rtl={rtl} />
            </div>
          </div>
          <div className="col-lg-9">
            <div className="products-content">
              <TopFilter setListView={setListView} rtl={rtl} />
              <div className={`products ${listView ? 'list-view':''}`}>
                <div className="row gx-2 gx-lg-4">
                  {
                    data.map((item, index) => (
                      <Product key={index} product={item} rtl={rtl} />
                    ))
                  }
                </div>
                <div className={`pagination style-5 color-${style} justify-content-center mt-50`}>
                  <a href="#" className="active">
                    <span>1</span>
                  </a>
                  <a href="#">
                    <span>2</span>
                  </a>
                  <a href="#">
                    <span>3</span>
                  </a>
                  <a href="#">
                    <span>4</span>
                  </a>
                  <a href="#">
                    <span>...</span>
                  </a>
                  <a href="#">
                    <span>20</span>
                  </a>
                  <a href="#">
                    <span className="text">{ rtl ? 'التالي' : 'next' } <i className="fas fa-chevron-right"></i> </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Shop