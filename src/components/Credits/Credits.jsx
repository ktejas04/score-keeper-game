import React from 'react'
import './Credits.css'
import { NavLink } from 'react-router-dom'

function Credits() {
  return (
    <div className='credits'>
      <h1>Credits</h1>
      <p>Made by Tejas Kumar</p>
      <NavLink to='/' className='main-menu'>Main Menu</NavLink>
    </div>
  )
}

export default Credits