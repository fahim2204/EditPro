import features from '@data/App/features.json';
import featuresRTL from '@data/App/features-rtl.json';

const Features = ({ rtl }) => {
  const featuresData = rtl ? featuresRTL : features;

  return (
    <section className="features pt-70 pb-70 style-4" data-scroll-index="1">
      <div className="container">
        <div className="section-head text-center style-4">
          <small className="title_small bg-white">{ rtl ? 'نوتيرو - تطبيق مذكرة سهل الاستخدام' : 'Notero - Easy Notes App' }</small>
          <h2 className="mb-70">{ rtl ? 'خدمات' : 'Awesome' } <span> { rtl ? 'رائعة' : 'Features' } </span> </h2>
        </div>
        <div className="content">
          {
            featuresData.map((feature, index) => (
              <div className="features-card" key={index}>
                <div className="icon img-contain">
                  <img src={feature.image} alt="" />
                  { feature.new && <span className="label icon-40 alert-success text-success rounded-circle small text-uppercase fw-bold">{ rtl ? 'جديد' : 'new' }</span> }
                </div>
                <h6>{ feature.title.text1 } <br /> { feature.title.text2 }</h6>
              </div>
            ))
          }
        </div>
      </div>
      <img src="/assets/img/feat_circle.png" alt="" className="img-circle" />
    </section>
  )
}

export default Features