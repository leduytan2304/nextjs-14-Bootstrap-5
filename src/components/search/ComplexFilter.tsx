import React from 'react';

export default function ComplexFilter() {
  return (
    <div>
      <div className="d-flex flex-column g-0">
      <div className="d-flex align-items-center g-05">
                    <h4 className="m-0 bold text-highlight">Find A Room</h4>
                    <div className="d-flex align-items-center pd-05 g-03 r-23 bg-cl-6ED">
                        <div className="dot-fillter"></div>
                        <span className="fs-03-08 color-20A t-n-wrap">To Rent</span>
                    </div>
                </div>
        <span className="text-grey">254 Results Found</span>
      </div>

      <div className="d-flex flex-column mgt-2">
        {/* Price */}
        <div className="d-flex flex-column border-top pdy-1">
          <div className="d-flex justify-content-between align-items-center">
            <h6 className="m-0 w-7">Price range (per month)</h6>
            <span className="text-highlight" style={{ cursor: 'pointer' }}>Reset</span>
          </div>
          <div className="d-flex flex-column">
            <div className="range_container mgt-35 mgy-2">
              <div className="sliders_control">
                <input id="fromSlider" type="range" defaultValue={0} min={0} max={950000} />
                <div id="fromSliderTooltip" className="slider-tooltip">0</div>
                <input id="toSlider" type="range" defaultValue={950000} min={0} max={950000} />
                <div id="toSliderTooltip" className="slider-tooltip">0</div>
              </div>
              <div id="scale" className="scale" data-steps="10" style={{ display: 'none' }}></div>
            </div>
            <div className="d-flex range-container fillter-input">
              <input type="text" placeholder="¥ 0" />
              <span> to </span>
              <input type="text" placeholder="¥ 950000" />
            </div>
          </div>
        </div>

        {/* Layout */}
        <div className="d-flex flex-column border-top pdy-1">
          <h6 className="m-0 w-7">Layouts</h6>
          <div className="d-grid grid-2 mt-3">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="layout1" />
              <label className="form-check-label w-7" htmlFor="layout1">1R</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="layout2" />
              <label className="form-check-label w-7" htmlFor="layout2">1DK</label>
            </div>
          </div>
        </div>

        {/* Size */}
        <div className="d-flex flex-column border-top pdy-1">
          <div className="d-flex justify-content-between align-items-center">
            <h6 className="m-0 w-7">Size range (m<sup>2</sup>)</h6>
            <span className="text-highlight" style={{ cursor: 'pointer' }}>Reset</span>
          </div>
          <div className="d-flex flex-column">
            <div className="range_container mgt-35 mgy-2">
              <div className="sliders_control">
                <input id="fromSize" type="range" defaultValue={0} min={0} max={200} />
                <div id="fromSizeTooltip" className="slider-tooltip">0</div>
                <input id="toSize" type="range" defaultValue={200} min={0} max={200} />
                <div id="toSizeTooltip" className="slider-tooltip">0</div>
              </div>
              <div id="scaleSize" className="scale" data-steps="1" style={{ display: 'none' }}></div>
            </div>
          <div className="d-flex range-container fillter-input">
              <div style={{ position: 'relative' }}>
                <input type="text" placeholder="0" />
                <span className="unit">m<sup>2</sup></span>
              </div>
              <span> to </span>
              <div style={{ position: 'relative' }}>
                <input type="text" placeholder="No limit" />
            </div>
            </div>
          </div>
        </div>

        {/* Fee part */}
        <div className="d-flex flex-column border-top pdy-1">
          <h6 className="m-0 w-7">Fee part</h6>
          <div className="d-flex flex-column g-05 mgt-1">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="fee1" />
              <label className="form-check-label w-7" htmlFor="fee1">No key money</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="fee2" />
              <label className="form-check-label w-7" htmlFor="fee2">No deposit</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="fee3" />
              <label className="form-check-label w-7" htmlFor="fee3">No agentcy fee</label>
            </div>
          </div>
        </div>

        {/* Building age */}
        <div className="d-flex flex-column border-top pdy-1">
          <h6 className="m-0 w-7">Building age</h6>
          <div className="d-flex flex-column g-05 mgt-1">
            <div className="form-check">
              <input className="form-check-input" type="radio" name="age" id="age1" />
              <label className="form-check-label" htmlFor="age1">Within 1 year</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="age" id="age2" />
              <label className="form-check-label" htmlFor="age2">Within 5 years</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="age" id="age3" />
              <label className="form-check-label" htmlFor="age3">Any</label>
            </div>
          </div>
        </div>

        {/* Station walk */}
        <div className="d-flex flex-column border-top pdy-1">
          <h6 className="m-0 w-7">Station walk</h6>
          <div className="d-flex flex-column g-05 mgt-1">
            <div className="form-check">
              <input className="form-check-input" type="radio" name="walk" id="walk1" />
              <label className="form-check-label" htmlFor="walk1">Within 3 mins</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="walk" id="walk2" />
              <label className="form-check-label" htmlFor="walk2">Within 5 mins</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="walk" id="walk3" />
              <label className="form-check-label" htmlFor="walk3">Within 10 mins</label>
            </div>
          </div>
        </div>

        {/* Building structures */}
        <div className="d-flex flex-column border-top pdy-1">
          <h6 className="m-0 w-7">Building Structures</h6>
          <div className="d-flex flex-column g-05 mgt-1" style={{ overflow: 'hidden' }}>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="struct1" />
              <label className="form-check-label w-7" htmlFor="struct1">Autoclaved Light-weight Concr...</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="struct2" />
              <label className="form-check-label w-7" htmlFor="struct2">Reinforced Concrete</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="struct3" />
              <label className="form-check-label w-7" htmlFor="struct3">Steel</label>
            </div>
          </div>
        </div>

        {/* Building Features */}
        <div className="d-flex flex-column border-top pdy-1">
          <h6 className="m-0 w-7">Building Features</h6>
          <div className="d-flex flex-column g-05 mgt-1" style={{ overflow: 'hidden' }}>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="feat1" />
              <label className="form-check-label w-7" htmlFor="feat1">Gym</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="feat2" />
              <label className="form-check-label w-7" htmlFor="feat2">Elevator</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="feat3" />
              <label className="form-check-label w-7" htmlFor="feat3">No key money</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


