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
                        style={{
                            transform: 'translateX(-${props => props.translate}px)}',   
                            transition: 'transform ease-out ${props => props.transition}s'
                        }}
                    />
                ))}
        </div>
    )
}
export default SliderContent;