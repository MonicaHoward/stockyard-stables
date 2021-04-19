import React, {useState} from 'react';
import './slider.css'
import SliderContent from './SliderContent';
import Arrow from './Arrow'

const Slider = ({slides, props}) => {
    const getWidth = () => window.innerWidth;
    const [state, setState] = useState({
      translate: 0,
      transition: 0.45,
      activeIndex: 0,
    });
    const { translate, transition, activeIndex} = state;
    const nextSlide = () => {
      console.log("next clicked");
        if (activeIndex === slides.length - 1) {
          return setState({
            ...state,
            translate: 0,
            activeIndex: 0
          })
        }
    
        setState({
          ...state,
          activeIndex: activeIndex + 1,
          translate: (activeIndex + 1) * getWidth()
        })
      }
    
      const prevSlide = () => {
        if (activeIndex === 0) {
          return setState({
            ...state,
            translate: (slides.length - 1) * getWidth(),
            activeIndex:slides.length - 1
          })
        }
    
        setState({
          ...state,
          activeIndex: activeIndex - 1,
          translate: (activeIndex - 1) * getWidth()
        })
      }

    return(
        <div className="slider">
            <SliderContent
                translate={translate}
                transition={transition}
                width={getWidth()* slides.length}
                slides={slides}
            >
            </SliderContent>
            <Arrow direction="left"  handleClick={prevSlide}/>
            <Arrow direction="right" handleClick={nextSlide}/>
        </div>
    )
}
export default Slider;