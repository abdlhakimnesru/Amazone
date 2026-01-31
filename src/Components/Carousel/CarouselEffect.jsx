import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { img } from './Img/data'
import classes from './Carousel.module.css'
import {catagoryInfo} from '../Catagory/fullinfo'

function CarouselEffect() {
  return (
    <div>

        <Carousel
        
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showIndicators={false}
        >

        {
           img.map((imageItem, index) => (
            <div key={index}>
                <img src={imageItem} alt={`Slide ${index + 1}`} />
            </div>
           ))
        }    
        </Carousel>
        <div className={classes["hero_img"]}>
          
        </div>
    </div>
  )
}

export default CarouselEffect