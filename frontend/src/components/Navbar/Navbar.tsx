import React from 'react'
import Menu from './Menu/Menu'
import Profile from './Profile/Profile'
import Search from './Search/Search'

const Navbar = () => {

  return (
    <div className='flex fixed w-full top-0 left-0 justify-between items-center px-3 h-16  shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] z-[999999] bg-white py-8'>
      <Menu />
      <Search />
      <Profile />
    </div>
  )
}

export default Navbar