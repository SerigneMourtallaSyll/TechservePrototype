import React from 'react';
// import { Carousel } from 'react-bootstrap';
import CarouselItemContent from './TemoignageComponent';
import imageTestimonial1 from '../assets/Image/img-team-2.jpg';
import imageTestimonial2 from '../assets/Image/2.jpg';
import imageTestimonial3 from '../assets/Image/img-team-3.jpg';

function Temoignage() {
  return (
    <div className='container-fluid py-5' id='about'>
        <div className="row">
          <div className="py-0">
              <h1>Client's Testimonials</h1>
          </div>
          <div className='d-flex justify-content-around flex-wrap' id='testimonials'>
            <CarouselItemContent img={imageTestimonial1} name={"Kelly Riley"} profile={"Reddy"}/>
            <CarouselItemContent img={imageTestimonial2} name={"Oliver Robinson"} profile={"Yesgroup"}/>
            <CarouselItemContent img={imageTestimonial3} name={"Nicole Brown"} profile={"Good Box"}/>
          </div>
        </div>
    </div>
  )
}

export default Temoignage