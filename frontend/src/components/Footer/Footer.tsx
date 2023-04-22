import React from 'react'
import { BsInstagram, BsWhatsapp, BsFacebook, BsYoutube } from "react-icons/bs"
import { IoCallOutline } from "react-icons/io5"
import { RiCopyrightLine } from "react-icons/ri"
import { HiOutlineMail } from "react-icons/hi"
import Footerlayout from './child/Footerlayout'

const menu1 = ["About us", "Terms and Condition", "get coupon", "our shop"]
const menu2 = ["Privacy Policy", "FAQ", "Cancelllation and Refund", "contact us"]
const contactData = ["11111 11111 / 22222 22222", "makeyourdaybycake@gamil.com"]

const Footer = () => {
    return (
        <div className='w-full flex justify-center bg-gradient-to-r from-pink-400 to-pink-600 '>
            {/* <div className='h-full w-full absolute top-0 rounded-t-md overflow-hidden'>
                <img src="https://images.unsplash.com/photo-1660491291397-e81c21c1d554?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" 
                className='h-full w-full rounded-r-md'
                />
            </div> */}
            <div className='w-[90%] p-4 py-4 max-sm:w-[95%] text-white'>

                <div className='w-full flex justify-around max-sm:flex-col '>
                    <div className='flex flex-col md:border-r-2 border-gray-500 max-sm:border-b-2 md:pr-20 max-sm:pb-6'>
                        <span className='text-3xl font-bold tracking-wide text-slate-300 uppercase'>Logo</span>
                        <div className='flex items-center max-sm:mt-2 md:mt-3'>
                            <RiCopyrightLine size={20} />
                            <span className='text-sm ml-2'>Copyright</span>
                        </div>
                    </div>

                    <div className='max-sm:mt-4 md:border-r-2 border-gray-500 max-sm:border-b-2 md:pr-20 max-sm:pb-6'>
                        <span className='uppercase'>main menu</span>
                        <div className='flex justify-between '>
                            <div>
                                <Footerlayout listData={menu1} />
                            </div>
                            <div className='md:ml-20'>
                                <Footerlayout listData={menu2} />
                            </div>
                        </div>
                        <div className='flex justify-between mt-5 items-center'>
                            <span className='capitalized'>Connect with us :</span>
                            <div className='flex items-center justify-around w-[60%]'>
                                <span className='m1-4 cursor-pointer'><BsFacebook size={25} /></span>
                                <span className='m1-4 cursor-pointer'><BsInstagram size={25} /></span>
                                <span className='m1-4 cursor-pointer'><BsWhatsapp size={25} /></span>
                                <span className='m1-4 cursor-pointer'><BsYoutube size={25} /></span>
                            </div>
                        </div>
                    </div>

                    <div className='max-sm:mt-4 border-gray-500 max-sm:border-b-2 max-sm:pb-6'>
                        <span className='uppercase'>Contact us</span>
                        <div className='mt-3'>
                            {/* <Footerlayout listData={contactData} /> */}
                            <ul>
                                <li>
                                    <a href="#" className='flex items-center'>
                                        <span><IoCallOutline /></span>
                                        <span className='ml-2'>11111 11111 / 22222 22222</span>
                                    </a>
                                </li>
                                <li className='mt-2'>
                                    <a href="#" className='flex items-center'>
                                        <span><HiOutlineMail /></span>
                                        <span className='ml-2'>makeyourdaybycake@gamil.com</span>
                                    </a>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>

                <div className='w-full text-center md:border-t-2 border-gray-500 mt-8 max-sm:mt-4 md:pt-4'>
                    © Copyright 2023. All Right Reserv.
                </div>
            </div>

        </div>
    )
}

export default Footer