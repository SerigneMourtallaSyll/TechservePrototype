import React from 'react';
// import { Carousel} from 'react-bootstrap';
// import imageTestimonial1 from '../assets/Image/img-team-2.jpg';
// import imageTestimonial2 from '../assets/Image/2.jpg';
// import imageTestimonial3 from '../assets/Image/img-team-3.jpg';

function CarouselItemContent({img, name, profile}) {
  return (
    <div className='col-md-3 py-5 mt-3'>
      <div className='textContent w-100 rounded py-5'>
        <img src={img} alt="img"/>
        <h4 className='pt-5'>{name}</h4>
        <h6>{profile}</h6>
        <p className=''>Lorem ipsum dolor sit amet consectetur adipiscing edit. Quisque dignissim surpis so consectetur somper. Odio sem tristique purrus velt uokens.
         Nullam auguea arcu.pellentique non liberosit amet.
        </p>
      </div>
    </div>

  )
}

export default CarouselItemContent