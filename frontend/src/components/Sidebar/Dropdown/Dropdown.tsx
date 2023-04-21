import React from 'react'
import { GrUserAdmin } from "react-icons/gr"
import { BiLogIn } from "react-icons/bi"
import { MdOutlineBakeryDining } from "react-icons/md"

const Dropdown = () => {
    return (
        <div className={` transition-all absolute left-[260px] max-sm:left-[190px] top-[59%] z-[9999] flex flex-col w-64 bg-white border-r`}>
            <ul>
                <li>
                    <a href="#" className="relative flex flex-row items-center h-10 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500  pl-4">
                        <span>
                            <MdOutlineBakeryDining />
                        </span>
                        <span className="ml-2 text-sm tracking-wide truncate">Baker</span>
                    </a>
                </li>
                <li>
                    <a href="#" className="relative flex flex-row items-center h-10 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500  pl-4">
                        <span>
                            <GrUserAdmin />
                        </span>
                        <span className="ml-2 text-sm tracking-wide truncate">Admin</span>
                    </a>
                </li>
                <li>
                    <a href="#" className="relative flex flex-row items-center h-10 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pl-4">
                        <span>
                            <BiLogIn />
                        </span>
                        <span className="ml-2 text-sm tracking-wide truncate">Login</span>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Dropdown