import React from 'react';
import Slide from './Slide';
import './slider.css'

const SliderContent = ({slides}) => {

    return(
        <div className="slider-content">
           {slides.map((slide, i) => (
                    <Slide 
                        key={slide + i} 
                        content={slide} 
                    />
                ))}
        </div>
    )
}
export default SliderContent;