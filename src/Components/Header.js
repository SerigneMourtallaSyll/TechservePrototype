import React from 'react'
import { NavBar } from './NavBar';
import Banner from './Banner';
function Header() {
  return (
    <div className='header' id='header'>
        <NavBar />
        <Banner />
    </div>
  )
}

export default Header