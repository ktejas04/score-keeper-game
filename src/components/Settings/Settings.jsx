import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Settings.css"
import VolumeController from './VolumeController'

function Settings() {
  return (
    <div className='settings'>
      <h1>Settings</h1>
      <VolumeController/>
      <NavLink to='/' className='main-menu'>Main Menu</NavLink>
    </div>
  )
}

export default Settings