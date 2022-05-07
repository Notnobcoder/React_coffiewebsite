import React from 'react'
import "./navbar.css"
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div className='Navbar'>
      <div className="NavImage">
        <img src="https://image.similarpng.com/very-thumbnail/2020/11/Coffee-logo-design-on-transparent-background-PNG.png" alt="" />
      </div>
      <div className="NavItems">
        <ul>
          <a href=""><NavLink to="/">Home</NavLink></a>
          <a href=""><NavLink to="/about">About</NavLink></a>
          <a href=""><NavLink to="/menu">Menu</NavLink></a>
          <a href=""><NavLink to="/contact">Contact</NavLink></a>
        </ul>
      </div>
    </div>
  )
}
