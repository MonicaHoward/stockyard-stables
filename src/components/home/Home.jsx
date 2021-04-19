import React from 'react';
import Slider from '../slider/Slider'
import './home.css'

const images = [
    'https://images.pexels.com/photos/4479568/pexels-photo-4479568.jpeg',
  ]

const Home = () => {

    return(
        <div className="section home" id="home">
            <Slider slides={images}/>
        </div>
    )
}

export default Home;