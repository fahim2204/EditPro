import { useState, useEffect } from 'react';
import Link from 'next/link';
import demos from '@data/Preview/demos.json';

const Demos = () => {
  const [demosRows, setDemosRows] = useState([]);

  useEffect(() => {
    let demosInRow = 3;
    let rowIndex = 0;
    let rowsItems = [[]];

    demos.forEach((demo, i) => {
      if (i > 0 && i % demosInRow === 0) {
        rowIndex++;
        rowsItems[rowIndex] = [];
      }

      rowsItems[rowIndex].push(demo);
    });

    setDemosRows(rowsItems);
  }, []);

  return (
    <section className="demos section-padding bg-light" id="demos">
      <div className="container-xxl">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-10">
            <div className="sec-head text-center mb-40">
              <h2 className="num"><span className="color-grd">NEW<span className="thin"></span></span></h2>
              <h3 className="text-capitalize">Stunning Homepages</h3>
              <p className="color-777">A great collection of beautiful website templates for your need. Choose the best suitable template and start customizing it.</p>
            </div>
          </div>
        </div>
        {
          demosRows.map((demos, r) => (
            <div className="row" key={r}>
              {
                demos.map((demo, i) => (
                  <div className="col-lg-4 col-md-6" key={i}>
                    <div className={`item ${demo.isNew ? 'item_ribbon green' : ''} ${demo.isComingSoon || demo.isArrived ? 'item_ribbon orange' : ''} ${demo.isFeatured ? 'item_ribbon red' : ''}`}>
                      <Link href={demo.link}>
                        <a target="_blank">
                          <div className={demo.isUpcoming ? 'img blur_img' : 'img'}>
                            <img src={demo.img} alt="" />
                          </div>
                          <div className="info">
                            <span>{ demo.title }</span>
                            <h6>{ demo.type }</h6>
                          </div>
                        </a>
                      </Link>
                      {
                        (demo.isNew || demo.isComingSoon || demo.isFeatured || demo.isArrived) && (
                          <div className="new_demo_label">
                            <span>
                              { demo.isNew && 'New' }
                              { demo.isComingSoon && 'Soon' }
                              { demo.isFeatured && 'Hot' }
                              {demo.isArrived && 'Arrived'}
                            </span>
                          </div>
                        )
                      }
                    </div>
                  </div>
                ))
              }
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Demos