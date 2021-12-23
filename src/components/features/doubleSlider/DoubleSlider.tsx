import 'rc-slider/assets/index.css';
import React, {useState} from "react";

function DoubleSlider (){
    let [min,setMin] = useState(0)
    let [max,setMax] = useState(0)
    const Slider = require('rc-slider');
    const createSliderWithTooltip = Slider.createSliderWithTooltip;
    const Range = createSliderWithTooltip(Slider.Range);
    return <>
        <Range min={0} max={1000} defaultValue={[50,500]} />
    </>
}
export default DoubleSlider