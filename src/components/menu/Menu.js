import React from 'react'
import  './Menu.css'

const Menu = ({menuTitle}) => {
  return (
    <div className='menuItem'>
        <h5 className='menuTitle'>{menuTitle}</h5>
    </div>
  )
}

export default Menu