import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import plans from '../../data/Saas/plans.json';

const Pricing = ({ rtl }) => {
  const data = useMemo(() => plans, [rtl]);
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    let formattedFeatures = [];

    data[0].features.forEach(feature => formattedFeatures.push({ title: feature.title, data: [] })) ;

    data.forEach((plan, i) => {
      plan.features.forEach((feature, x) => {
        formattedFeatures[x].data[i] = feature.checked !== undefined ? feature.checked : feature.content;
      })
    });

    setFeatures(formattedFeatures);
  }, [data]);



  return (
    <section className="pricing section-padding style-5" data-scroll-index="4">
      <div className="container">
        <div className="section-head text-center mb-60 style-5">
          <h2 className="mb-20">Choose Plan and <span>Kick-start</span></h2>
          <p>
           Whether you’re just getting started with rapid testing or scaling across the organization, we’ve got you covered.
          </p>
        </div>
        <div className="container">
          <div className="row g-3 d-flex">
            <div className="col-4 rounded bg-white shadow-sm">df</div>
            <div className="col-4 rounded bg-white shadow-sm">fdg</div>
            <div className="col-4 rounded bg-white shadow-sm">df</div>

          </div>
        </div>
        <div className="table-responsive">
          <div className="content">
            <div className="price-head">
              <div className="price-headTitle">
                <img src="/assets/img/icons/price_s5.png" alt="" />
              </div>
              {
                data.map((plan, i) => (
                  <div className={`price-headItem ${plan.bestChoice && 'bg-gray5'}`} key={i}>
                    <h6>{ plan.title }</h6>
                    <h2 className={`monthly_price ${plan.bestChoice && 'color-blue5'}`}>{ plan.price.monthly } <span>/{ rtl ? 'شهريا' : 'mo' }</span></h2>
                    <h2 className={`yearly_price ${plan.bestChoice && 'color-blue5'}`}>{ plan.price.yearly } <span>/{ rtl ? 'سنويا' : 'yr' }</span></h2>
                    <small>{ plan.short_description }</small>
                    <small>{ plan.description }</small>
                    {
                      plan.bestChoice && <div className="label">{ rtl ? 'أفضل خيار' : 'best choice' }</div>
                    }
                  </div>
                ))
              }
            </div>

            <div className="price-body">
              {
                features.map((feature, i) => (
                  <div className="price-bodyItems" key={i}>
                    <div className="price-bodyTitle">
                      { feature.title }
                    </div>
                    <div className="price-item">
                      { typeof feature.data[0] === 'boolean' ? (feature.data[0] && <i className="bi bi-check2"></i>) : (<span>{ feature.data[0] }</span>) }
                    </div>
                    <div className="price-item bg-gray5">
                      { typeof feature.data[1] === 'boolean' ? (feature.data[1] && <i className="bi bi-check2"></i>) : (<span>{ feature.data[1] }</span>) }
                    </div>
                    <div className="price-item">
                      { typeof feature.data[2] === 'boolean' ? (feature.data[2] && <i className="bi bi-check2"></i>) : (<span>{ feature.data[2] }</span>) }
                    </div>
                  </div>
                ))
              }
            </div>

            <div className="price-foot">
              <div className="price-footTitle">
              </div>
              <div className="price-footItem">
                <Link className="btn rounded-pill blue5-3Dbutn hover-blue2 sm-butn fw-bold" href={ rtl ? "/rtl-page-contact" : "/page-contact-5" }>
                    <span>Buy Now</span>
                </Link>
              </div>
              <div className="price-footItem bg-gray5">
                <Link className="btn rounded-pill blue5-3Dbutn hover-blue2 sm-butn fw-bold" href={ rtl ? "/rtl-page-contact" : "/page-contact-5" }>
                    <span> { rtl ? 'نبدأ الآن ' : 'Get Started Now' } </span>
                </Link>
              </div>
              <div className="price-footItem">
                <Link className="btn rounded-pill blue5-3Dbutn hover-blue2 sm-butn fw-bold" href={ rtl ? "/rtl-page-contact" : "/page-contact-5" }>
                    <span> { rtl ? 'نبدأ الآن ' : 'Get Started Now' } </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing