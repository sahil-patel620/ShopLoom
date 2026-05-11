import React, { useState } from "react";
import Slider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import "./PriceFilter.css";

const RangeSlider = Slider.default;

const PriceFilter = () => {
  const [range, setRange] = useState({
    min: 10,
    max: 400,
  });

  return (
    <div className="flex flex-col mb-4">
      <p className="text-black text-[16px] mt-5 mb-5">Price</p>
      <RangeSlider
        className="custom-range-slider"
        min={0}
        max={400}
        defaultValue={[range.min, range.max]}
        onInput={(values) => setRange({ min: values[0], max: values[1] })}
      />

      <div className="flex justify-between ">
        <div className="flex items-center border mt-5 w-[30%]  border-gray-300 rounded-lg">
          <p className="pl-3">₹</p>
          <input
            type="number"
            disabled
            placeholder="Min"
            min={0}
            max={400}
            className="outline-none p-2 "
            value={range?.min}
          />
        </div>
        <div className="flex items-center border mt-5 w-[30%]  border-gray-300 rounded-lg">
          <p className="pl-3">₹</p>
          <input
            type="number"
            disabled
            placeholder="Max"
            min={0}
            max={400}
            className="outline-none p-2"
            value={range?.max}
          />
        </div>
      </div>
    </div>
  );
};

export default PriceFilter;
