import React from 'react'
import './nav-item.css'

const navItem = (props) => {
  return (
    <li className='nav-item'>{props.children}</li>
  )
}
const navLink = (props) => {
  return (
    <li className='nav-link'>{props.children}</li>
  )
}

export default navItem

export  {navLink}