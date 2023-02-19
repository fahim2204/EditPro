import { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const Filter = ({ style = "4", rtl }) => {
  const [range, setRange] = useState([75, 300]);

  const sliderChange = (value) => {
    setRange(value);
  }
  return (
    <div className="filter-card">
      <div className="card-title d-flex justify-content-between">
        <span>{ rtl ? 'فلتر' : 'Filter' }</span>
        <a href="#" className="text-uppercase fw-normal fs-10px"> <i
          className="bi bi-arrow-repeat me-1"></i> { rtl ? 'إعادة ضبط الجميع' : 'Reset All' } </a>
      </div>
      <div className="filter-card-item">
        <div className="sub-tilte d-flex align-items-center justify-content-between">
          <span>{ rtl ? 'العلامات التجارية' : 'Brands' }</span>
          <small className="icon">
            <i className="bi bi-chevron-down"></i>
          </small>
        </div>
        <div className="filter-card-body">
          <div className="search-group">
            <input type="text" placeholder="Search brand" />
            <button> <i className="bi bi-search"></i> </button>
          </div>
          <div className="filter-card-scroll">
            <div className="form-check category-checkBox">
              <input className="form-check-input" type="checkbox" value=""
                id="categoryCheck1" />
              <label className="form-check-label" htmlFor="categoryCheck1">
                { rtl ? 'جميع العلامات التجارية' : 'All Brands' }
              </label>
            </div>
            <div className="form-check category-checkBox">
              <input className="form-check-input" type="checkbox" value=""
                id="categoryCheck2" />
              <label className="form-check-label" htmlFor="categoryCheck2">
                { rtl ? 'ابل' : 'Apple' }
              </label>
            </div>
            <div className="form-check category-checkBox">
              <input className="form-check-input" type="checkbox" value=""
                id="categoryCheck3" />
              <label className="form-check-label" htmlFor="categoryCheck3">
                { rtl ? 'سامسونج' : 'Samsung' }
              </label>
            </div>
            <div className="form-check category-checkBox">
              <input className="form-check-input" type="checkbox" value=""
                id="categoryCheck4" />
              <label className="form-check-label" htmlFor="categoryCheck4">
                { rtl ? 'اوبو' : 'Oppo' }
              </label>
            </div>
            <div className="form-check category-checkBox">
              <input className="form-check-input" type="checkbox" value=""
                id="categoryCheck5" />
              <label className="form-check-label" htmlFor="categoryCheck5">
                { rtl ? 'سونى' : 'Sony' }
              </label>
            </div>
            <div className="form-check category-checkBox">
              <input className="form-check-input" type="checkbox" value=""
                id="categoryCheck6" />
              <label className="form-check-label" htmlFor="categoryCheck6">
                { rtl ? 'ابل' : 'Apple' }
              </label>
            </div>
            <div className="form-check category-checkBox">
              <input className="form-check-input" type="checkbox" value=""
                id="categoryCheck7" />
              <label className="form-check-label" htmlFor="categoryCheck7">
                { rtl ? 'سامسونج' : 'Samsung' }
              </label>
            </div>
            <div className="form-check category-checkBox">
              <input className="form-check-input" type="checkbox" value=""
                id="categoryCheck8" />
              <label className="form-check-label" htmlFor="categoryCheck8">
                { rtl ? 'اوبو' : 'Oppo' }
              </label>
            </div>
            <div className="form-check category-checkBox">
              <input className="form-check-input" type="checkbox" value=""
                id="categoryCheck9" />
              <label className="form-check-label" htmlFor="categoryCheck9">
                { rtl ? 'سونى' : 'Sony' }
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="filter-card-item">
        <div className="sub-tilte d-flex align-items-center justify-content-between">
          <span>{ rtl ? 'الالوان' : 'Colors' }</span>
          <small className="icon">
            <i className="bi bi-chevron-down"></i>
          </small>
        </div>
        <div className="filter-card-body">
          <div className="filter-card-scroll">
            <div className="form-check category-checkBox">
              <input className="form-check-input" type="checkbox" value=""
                id="categoryCheck10" />
              <label className="form-check-label" htmlFor="categoryCheck10">
                { rtl ? 'كل الالوان' : 'All Colors' }
              </label>
            </div>
            <div className="form-check category-checkBox">
              <input className="form-check-input" type="checkbox" value=""
                id="categoryCheck11" />
              <label className="form-check-label" htmlFor="categoryCheck11">
                { rtl ? 'احمر' : 'Red' }
              </label>
            </div>
            <div className="form-check category-checkBox">
              <input className="form-check-input" type="checkbox" value=""
                id="categoryCheck12" />
              <label className="form-check-label" htmlFor="categoryCheck12">
                { rtl ? 'برتقالى' : 'Orange' }
              </label>
            </div>
            <div className="form-check category-checkBox">
              <input className="form-check-input" type="checkbox" value=""
                id="categoryCheck13" />
              <label className="form-check-label" htmlFor="categoryCheck13">
                { rtl ? 'اصفر' : 'Yellow' }
              </label>
            </div>
            <div className="form-check category-checkBox">
              <input className="form-check-input" type="checkbox" value=""
                id="categoryCheck14" />
              <label className="form-check-label" htmlFor="categoryCheck14">
                { rtl ? 'ازرق' : 'Blue' }
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="filter-card-item border-0 m-0">
        <div className="sub-tilte d-flex align-items-center justify-content-between">
          <span>{ rtl ? 'السعر' : 'Price' }</span>
        </div>
        <div className="filter-card-body">
          <div className="slider-range-content">
            <div className="amount-input">
              <div className="amount">
                <small>$ { rtl ? 'الاقل' : 'Min' }</small>
                <input type="text" id="amount1" readOnly value={range[0]} />
              </div>
              <div className="amount">
                <small>$ { rtl ? 'الاغلى' : 'Max' }</small>
                <input type="text" id="amount2" readOnly value={range[1]} />
              </div>
              <button>{ rtl ? 'تطبيق' : 'go' }</button>
            </div>
            <div id="slider-range" style={{ marginTop: '25px', "--clr-style": `var(--color-blue${style})` }}>
              <Slider
                range
                min={0}
                max={500}
                value={range}
                onChange={sliderChange}
                railStyle={{ backgroundColor: '#dfdfdf', height: '6px' }}
                trackStyle={{ backgroundColor: `var(--color-blue${style})`, height: '6px' }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Filter