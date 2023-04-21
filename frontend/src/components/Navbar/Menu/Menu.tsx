import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi"
import Sidebar from '../../Sidebar/Sidebar'
import { useNavigate } from 'react-router-dom'
import { RxCross2 } from "react-icons/rx"


const Menu = () => {
  const navigate = useNavigate()
  // @ state for toggle sideBar
  const [toggle, setToggle] = useState<boolean>(false);
  return (
    <div className='w-[8%] flex justify-between items-center'>
      <span className='cursor-pointer' onClick={() => setToggle(!toggle)}>
        {toggle ? <RxCross2 size={24} /> : <GiHamburgerMenu size={24} />}
      </span>
      <Sidebar visibility={toggle} />
      <span className='max-sm:hidden cursor-pointer uppercase font-extrabold text-gray-500  ' onClick={() => {
        navigate("/")
      }}>
        Logo
      </span>
    </div>
  )
}

export default Menu