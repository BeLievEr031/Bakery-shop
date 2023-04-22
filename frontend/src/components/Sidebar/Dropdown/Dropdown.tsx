import React from 'react'
import { GrUserAdmin } from "react-icons/gr"
import { BiLogIn } from "react-icons/bi"
import { MdOutlineBakeryDining } from "react-icons/md"

const Dropdown = () => {
    return (
        <div className="bg-purple-100 mx-2 relative flex flex-row items-center h-[130px] focus:outline-none py-5 transition-all">
            <ul className='flex flex-col py-2 pl-6 space-y-1 p-2'>
                <li>
                    <a href="#" className="relative flex flex-row items-center h-10 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-pink-300 pr-6 w-[200px]">
                        <span className="inline-flex justify-center items-center mr-2 ml-2">
                            <MdOutlineBakeryDining size={25} />
                        </span>
                        <span className="ml-2 text-sm tracking-wide truncate"
                        >Baker</span>
                    </a>
                </li>
                <li>
                    <a href="#" className="relative flex flex-row items-center h-10 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-pink-300 pr-6 w-[200px]">
                        <span className="inline-flex justify-center items-center mx-2">
                            <GrUserAdmin size={25} />
                        </span>
                        <span className="ml-2 text-sm tracking-wide truncate"
                        >Admin</span>
                    </a>
                </li>
                <li>
                    <a href="#" className="relative flex flex-row items-center h-10 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-pink-300 pr-6 w-[200px]">
                        <span className="inline-flex justify-center items-center ml-1">
                            <BiLogIn size={25} />
                        </span>
                        <span className="ml-5 text-sm tracking-wide truncate"
                        >Login</span>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Dropdown