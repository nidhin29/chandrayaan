import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import meter1 from '../assets/meter1.jpg';
import meter2 from '../assets/meter2.jpg';
import meter3 from '../assets/meter3.jpg';
import meter4 from '../assets/meter4.jpg';
import colorSharp from '../assets/color-sharp.png';
import './wonders.css';
import { CarouselCaption, CarouselItem } from 'react-bootstrap';


function Wonders() {
  return (
    <section className='skill' id='about'>
        <div className="container">
            <div className="row">
                <div className="col-12">
                <div className="skill-bx wow zoomIn">
                <h2>Discoveries</h2>
    <Carousel interval={2000} >
          <CarouselItem>
          <img src={meter1} alt="Image" />
          <CarouselCaption>
          <h5>Water Molecules on Moon</h5>
          </CarouselCaption>
          </CarouselItem>
          <CarouselItem>
          <img src={meter2} alt="Image" />
          <CarouselCaption>
          <h5>Mapping of the Lunar Surface</h5>
          </CarouselCaption>
          </CarouselItem>
          <CarouselItem>
         <img src={meter3} alt="Image" />
          <CarouselCaption>
          <h5>Studying of Moon Exosphere</h5>
          </CarouselCaption>
          </CarouselItem>
          <CarouselItem>
          <img src={meter4} alt="Image" />
          <CarouselCaption>
          <h5>Evidence of Helium</h5>
          </CarouselCaption>
          </CarouselItem>
    </Carousel>
    </div>
    </div>
     </div>
    </div>
    <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}

export default Wonders

                               
                        