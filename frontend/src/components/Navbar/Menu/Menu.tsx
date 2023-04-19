import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi"
import Sidebar from '../../Sidebar/Sidebar'


const Menu = () => {
  // @ state for toggle sideBar
  const [toggle, setToggle] = useState<boolean>(false);
  return (
    <div className='w-[8%] flex justify-between items-center'>
      <span className='cursor-pointer' onClick={() => setToggle(!toggle)}>
        <GiHamburgerMenu size={24} />
      </span>
      <Sidebar visibility={toggle} />
      <span>
        Logo
      </span>
    </div>
  )
}

export default Menu