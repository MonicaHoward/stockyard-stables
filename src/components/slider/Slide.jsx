import React from 'react';
import './slider.css'

const Slide = ({content}) => {
    return(
        <div 
            className="slide" 
            style={{ backgroundImage: `url('${content}')`}}
        >
            <h1>STOCKYARDS STABLES</h1>
            <h2>A Texas Cowboy Adventure!</h2>
        </div>
    )
}
export default Slide;