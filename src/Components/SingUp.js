import React from 'react'

function SingUp() {
  return (
    <div className='container-fluid mt-5' id='signUp'>
        <div className="row d-flex">
            <div className='col-md-2 p-0'>
                <div class="parent">
                    <div className="child1 child2"></div>
                    <div className="child1"></div>
                </div>
            </div>
            <div className='col-md-8 py-5'>
                <div className="pt-3">
                    <h2>Want to see Techserve in action?</h2>
                    <p>Nullam augue aeru.pellentasque non libero sit amet, mattis pulvinar ipsum</p>
                </div>
                <div className='py-5'>
                    <button className='btn'>SIGN UP FOR FREE</button>
                </div>
            </div>
            <div className='col-md-2'>
                <div class="parent" id='secondParent'>
                    <div className="child3 child4"></div>
                    <div className="child3"></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SingUp