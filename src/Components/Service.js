import React from 'react';
import image1 from '../assets/Image/dollar-bill.png';
import IconService from './IconService';
import image2 from '../assets/Image/management.png';
import image3 from '../assets/Image/signpost.png';
import image4 from '../assets/Image/rabotage.png';
import image5 from '../assets/Image/risk-management.png';
import image6 from '../assets/Image/infrastructure.png';


function Service() {
  return (
    <div className='container-fluid' id='service'>
        <div className='row px-5'>
            <div className='py-5' id='title-section'>
                <h1>Our Services</h1>
                <p>Nullam auguea arcu.pellentique non liberosit amet. mattis pulvinar tellus</p>
                <p>Etiam varius sit amet velit no eletfend.</p>
            </div>
            <div className='icons d-flex flex-wrap'>
                <IconService img={image1} />
                <IconService img={image2} />
                <IconService img={image3} />
                <IconService img={image4} />
                <IconService img={image5} />
                <IconService img={image6} />
            </div>
        </div>
    </div>
  )
}

export default Service