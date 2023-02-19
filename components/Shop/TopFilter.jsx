
const TopFilter = ({ setListView, rtl }) => {
  const showListView = () => {
    document.querySelector('.list-btn.bttn').classList.add('active');
    document.querySelector('.grid-btn.bttn').classList.remove('active');
    setListView(true)
  }

  const hideListView = () => {
    document.querySelector('.grid-btn.bttn').classList.add('active');
    document.querySelector('.list-btn.bttn').classList.remove('active');
    setListView(false)
  }

  return (
    <div className="top-filter mb-10">
      <div className="row align-items-center">
        <div className="col-lg-6">
          <p className="color-999 fs-12px mb-3 mb-lg-0"> <span className="color-000">1 - 40</span> of 1,652 results</p>
        </div>
        <div className="col-lg-6">
          <div className="r-side">
            <div className="row align-items-center">
              <div className="col-8">
                <form action="contact.php" className="form" method="post">
                  <div className="form-group">
                    <label>{ rtl ? 'ترتيب حسب' : 'Sort by' }</label>
                    <select className="form-select" defaultValue={ rtl ? 'الطبيعى' : "Default" }>
                      <option value="">{ rtl ? 'الطبيعى' : 'Default' }</option>
                      <option value="">{ rtl ? 'الأكثر مبيعًا' : 'best seller' }</option>
                      <option value="">{ rtl ? 'منتجات جديدة' : 'new products' }</option>
                      <option value="">{ rtl ? 'الطبيعى' : 'Default' }</option>
                    </select>
                  </div>
                </form>
              </div>
              <div className="col-4">
                <div className="grid-list-btns">
                  <span className="grid-btn bttn active" onClick={hideListView}>
                    <i className="bi bi-grid-3x3"></i>
                  </span>
                  <span className="list-btn bttn" onClick={showListView}>
                    <i className="bi bi-list-task"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopFilter