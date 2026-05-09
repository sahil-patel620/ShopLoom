import React from 'react'
import Slider from 'react-range-slider-input'
import 'react-range-slider-input/dist/style.css'

const RangeSlider = Slider.default

const PriceFilter = () => {
  return (
    <div>
      <p className="text-black text-[16px] mt-5">
        Price
      </p>
      <RangeSlider min={0} max={1000} />
    </div>
  )
}

export default PriceFilter