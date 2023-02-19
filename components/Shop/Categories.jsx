
const Categories = ({ rtl }) => {
  return (
    <div className="filter-card mb-30">
      <div className="card-title">
        <span>{ rtl ? 'التصنيفات' : 'Categories' }</span>
      </div>
      <div className="form-check category-checkRadio">
        <input className="form-check-input" type="radio" name="category" id="category1" />
        <label className="form-check-label cat-link" htmlFor="category1">
          { rtl ? 'كل التصنيفات' : 'All Categories' }
        </label>
      </div>
      <div className="form-check category-checkRadio">
        <input className="form-check-input" type="radio" name="category" id="category2" />
        <label className="form-check-label cat-link" htmlFor="category2">
          { rtl ? 'التسويق و التحليل' : 'Marketing & SEO' }
        </label>
      </div>
      <div className="accordion" id="accordionExample">
        <div className="">
          <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" type="button" data-bs-toggle="collapse"
              data-bs-target="#collapseOne" aria-expanded="true"
              aria-controls="collapseOne">
              { rtl ? 'تكنولوجى' : 'Technology' }
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show"
            aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="ps-3 mb-10">
              <div className="form-check category-checkRadio">
                <input className="form-check-input" type="radio" name="category"
                  id="category3" defaultChecked />
                <label className="form-check-label cat-link" htmlFor="category3">
                  { rtl ? 'كمبيوتر ولابتوب' : 'PC & Laptop' }
                </label>
              </div>
              <div className="form-check category-checkRadio">
                <input className="form-check-input" type="radio" name="category"
                  id="category4" />
                <label className="form-check-label cat-link" htmlFor="category4">
                  { rtl ? 'قطع غيار' : 'Hardware' }
                </label>
              </div>
              <div className="form-check category-checkRadio">
                <input className="form-check-input" type="radio" name="category"
                  id="category5" />
                <label className="form-check-label cat-link" htmlFor="category5">
                  { rtl ? 'موبايل وتابلت' : 'mobile & tablet' }
                </label>
              </div>
              <div className="form-check category-checkRadio">
                <input className="form-check-input" type="radio" name="category"
                  id="category6" />
                <label className="form-check-label cat-link" htmlFor="category6">
                  { rtl ? 'اكسسوارات' : 'accessories' }
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" type="button"
              data-bs-toggle="collapse" data-bs-target="#collapseTwo"
              aria-expanded="false" aria-controls="collapseTwo">
              { rtl ? 'الكترونيات' : 'Electronic' }
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse"
            aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="ps-3 mb-10">
              <div className="form-check category-checkRadio">
                <input className="form-check-input" type="radio" name="category"
                  id="category7" />
                <label className="form-check-label cat-link" htmlFor="category7">
                  { rtl ? 'كمبيوتر ولابتوب' : 'PC & Laptop' }
                </label>
              </div>
              <div className="form-check category-checkRadio">
                <input className="form-check-input" type="radio" name="category"
                  id="category8" />
                <label className="form-check-label cat-link" htmlFor="category8">
                  { rtl ? 'قطع غيار' : 'Hardware' }
                </label>
              </div>
              <div className="form-check category-checkRadio">
                <input className="form-check-input" type="radio" name="category"
                  id="category9" />
                <label className="form-check-label cat-link" htmlFor="category9">
                  { rtl ? 'موبايل وتابلت' : 'mobile & tablet' }
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed" type="button"
              data-bs-toggle="collapse" data-bs-target="#collapseThree"
              aria-expanded="false" aria-controls="collapseThree">
              { rtl ? 'تكنولوجى' : 'Course' }
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse"
            aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="ps-3 mb-10">
              <div className="form-check category-checkRadio">
                <input className="form-check-input" type="radio" name="category"
                  id="category10" />
                <label className="form-check-label cat-link" htmlFor="category10">
                  { rtl ? 'كمبيوتر ولابتوب' : 'PC & Laptop' }
                </label>
              </div>
              <div className="form-check category-checkRadio">
                <input className="form-check-input" type="radio" name="category"
                  id="category11" />
                <label className="form-check-label cat-link" htmlFor="category11">
                  { rtl ? 'قطع غيار' : 'Hardware' }
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="form-check category-checkRadio">
        <input className="form-check-input" type="radio" name="category" id="category12" />
        <label className="form-check-label cat-link" htmlFor="category12">
          { rtl ? 'احداث' : 'Event' }
        </label>
      </div>
    </div>
  )
}

export default Categories