import React from 'react'
import {GiHamburgerMenu} from "react-icons/gi"

const Menu = () => {
  return (
    <div className='w-[8%] flex justify-between items-center'>
        <span className='cursor-pointer'>
          <GiHamburgerMenu size={24}/>
        </span>
        <span>
          Logo
        </span>
    </div>
  )
}

export default Menu