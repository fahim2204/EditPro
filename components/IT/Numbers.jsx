import { useState } from 'react';
import CountTo from '../CountTo';
import numbers from '@data/IT/numbers.json';

const Numbers = () => {
  const [position] = useState({ from: 2600, to: 2900 });

  return (
    <div className="choose-numbers mt-80">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="row">
            {
              numbers.map((number, index) => (
                <div className="col-lg-4" key={index}>
                  <div className="num-item">
                    <div className="num">
                      <CountTo className="counter" from={0} to={number.value} speed={1500} position={position} />
                      { number.operator && <span> +</span> }
                    </div>
                    <div className="inf">
                      { number.title.part1 } <br /> { number.title.part2 }
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Numbers