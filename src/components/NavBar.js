import React from 'react'
import { NavLink } from 'react-router-dom'
function NavBar() {
  return (
    <div className='row'>
        <nav className='col-md-12'>
            <div style={{marginRight : "100px"}}>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/contact'>Contact</NavLink>
            </div>
        </nav>
    </div>
  )
}

export default NavBar
