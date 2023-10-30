import React from 'react'

function Footer() {
  return (
    <div className='container' id='footer'>
        <div className="row px-5 py-5  d-flex justify-content-between">
          <div className='col-md-4'>
            <div className='d-flex justify-content-start'>
              <h3>
                <i className="bi bi-gem"></i>
              </h3>
              <h3 className='mx-2 logo'>Techserve</h3>
            </div>
            <div className='text-start'>
              <p>Lorem ipsum dolor sit amet consectetur adipiscing edit. Quisque dignissim surpis so consectetur somper. Odio sem tristique purrus velt uokens mi lectus mattis leo. Nulla tellus fibero malesuada vitae ultermoorper et, votulpat id evat</p>
            </div> 
          </div>
          <div className='col-md-6'>
            <div className='navbar-footer d-flex justify-content-around flex-wrap pb-4'>
              <p className='mx-2'><a href="#home">Home</a></p>
              <p className='mx-2'><a href="#about">About Us</a></p>
              <p className='mx-2'><a href="#service">Services</a></p>
              <p className='mx-2'><a href="#News">News</a></p>
              <p className='mx-2'><a href="#contact">Contacts</a></p>
              <p><a href="#signIn">Sign In</a></p>
            </div>
            <div className='footer-icon d-flex justify-content-around col-md-5 ms-auto pb-5'>
              <i className="bi bi-facebook rounded-circle py-2 px-3"></i>
              <i className="bi bi-twitter rounded-circle py-2 px-3"></i>
              <i className="bi bi-linkedin rounded-circle py-2 px-3"></i>
            </div>
            <div className='text-end'>
              <p>Copyright ©, All Rights Reserved, 2017</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Footer