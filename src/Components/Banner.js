import React from 'react';
// import imageBanner from '../assets/Image/banner.jpg';

function Banner() {
  return (
    <div className='container-fluid py-5' id='banner'>
        <div className='row d-flex pt-5'>
            <div className='col-md-5 ms-auto bannerText'>
                <div className='text-start'>
                    <h1>A leading provider of consulting services</h1>
                </div>
                <div className='text-start'> 
                    <p>We help you communicate the value of your project so you get</p>
                    <p>the buy-in and adoption you need to success</p>
                </div>
                <div className='text-start py-5'>
                    <button className='btn'>TRY IT FREE</button>
                </div> 
            </div>
        </div>
    </div>
  )
}

export default Banner