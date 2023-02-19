import clients from '@data/Startup/clients.json';

const Clients = ({ rtl }) => {
  return (
    <section className="clients style-5" data-scroll-index="6">
      <div className="container">
        {
          rtl ? 
          <div className="section-head mb-70 style-6 text-center">
            <h2 className="mb-20"> يثق بنا الاف <span><small>المسثمرين</small></span></h2>
            <p className="color-666">أكثر من 15000 شركة وشريك موثوق بهم واختيار Itekseo</p>
          </div>
          :
          <div className="section-head mb-70 style-6 text-center">
            <h2 className="mb-20"> Trusted by thoudsands
              <span> <small> Businesss </small> </span>
            </h2>
            <p className="color-666">More 15,000 Companies & partners trusted & choice Itekseo</p>
          </div>
        }
        <div className="content d-flex flex-wrap">
          {
            clients.map((client, index) => (
              <a href="#" className="img img-card" key={index}>
                <img src={client} alt="" />
              </a>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Clients