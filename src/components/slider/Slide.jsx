import React from 'react';
import './slider.css'

const Slide = ({content}) => {
    return(
        <div 
            className="slide" 
            style={{ backgroundImage: `url('${content}')`}}
        >
            <h1 className="header-text">A <br/>Cowboy<br/> Adventure!</h1>
        </div>
    )
}
export default Slide;