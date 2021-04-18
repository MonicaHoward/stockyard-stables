import React from 'react';
import Slider from '../slider/Slider'
import './home.css'

const images = [
    'https://images.pexels.com/photos/6468/animal-brown-horse.jpg',
    'https://images.pexels.com/photos/3193155/pexels-photo-3193155.jpeg',
  ]

const Home = () => {

    return(
        <div className="section" id="home">
            <Slider slides={images}/>
        </div>
    )
}

export default Home;