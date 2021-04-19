import React from 'react';
import ArrowLeftOutlinedIcon from '@material-ui/icons/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@material-ui/icons/ArrowRightOutlined';


const Arrow = ({direction, handleClick}) => {

    return(
        <div
            onClick={handleClick}
            className="arrow-container"
            // style={{ 'direction' === 'right' ? 'right: 25px' : 'left: 25px' }}  
            // style={{ right: '25px' }}  
            style={ direction === 'right' ? {right: '25px' } : {left: '25px' } }  

        >
            {direction === 'right' ? <ArrowRightOutlinedIcon /> : <ArrowLeftOutlinedIcon/>}
            
        </div>
    )
}

export default Arrow;