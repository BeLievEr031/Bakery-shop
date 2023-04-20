import React from 'react'
import { BsFillCartFill } from "react-icons/bs"
import { Link } from "react-router-dom"

const Profile = () => {
  // const navigate = useNavigate();
  return (
    <div className='w-[8%] flex justify-between items-center'>
      <div className='flex justify-between items-center relative cursor-pointer'>
        <Link to={"/cart"}><BsFillCartFill size={24} /></Link>
        <span className='h-5 w-5 rounded-full  text-indigo-500 bg-indigo-50  flex justify-center items-center text-sm absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 mt-1'>2</span>
      </div>
      <div className='h-10 w-10 rounded-full cursor-pointer'>
        <span>
          <img src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg" alt=""
            className='w-full h-full rounded-full'
          />
        </span>
      </div>
    </div>
  )
}

export default Profile