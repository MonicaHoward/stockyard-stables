import React, {useState} from 'react';
import './slider.css'
import SliderContent from './SliderContent';

const Slider = ({slides}) => {
    const getWidth = () => window.innerWidth
    const [state, setState] = useState({
      translate: 0,
      transition: 0.45
    })
    const { translate, transition} = state;

    return(
        <div className="slider">
            <SliderContent
                // translate={translate}
                // transition={transition}
                width={getWidth()* slides.length}
                slides={slides}
            >
                {/* {props.slides.map((slide, i) => (
                    <Slide 
                        key={slide + i} 
                        content={slide} 
                    />
                ))} */}
            </SliderContent>
        </div>
    )
}
export default Slider;