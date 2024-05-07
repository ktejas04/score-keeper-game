import React from 'react'
import './Rankings.css'
import { NavLink } from 'react-router-dom';


function Rankings() {
  return (
    <div className='rankings'>
      <h1>Rankings</h1>
      <ul className='data'>
        <li className="data-item">Tejas - 21</li>
        <li className="data-item">Alex - 10</li>
        <li className="data-item">Sam - 3</li>
        <li className="data-item"></li>
      </ul>
      <NavLink to='/' className='main-menu'>Main Menu</NavLink>
    </div>
  )
}

export default Rankings