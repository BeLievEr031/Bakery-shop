import React, { useState } from 'react'
import { BiShow, BiHide } from "react-icons/bi"
import DIrectLogin from './DIrectLogin'

interface signUpForm {
    email: string,
    password: string
}

const Form = () => {

    const [showPassword, setShowPassword] = useState<boolean>(true)

    return (
        <div className='flex flex-col border-pink-300  border-2 rounded-lg shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px]'>
            <div className='w-[400px] p-5 max-sm:p-2 max-sm:w-[300px] rounded-lg flex justify-center items-center '>
                <form className='flex-col flex w-full'>
                    <span className="px-1 text-sm text-pink-400 font-extrabold py-1 pl-2">Email</span>
                    <input type="email"
                        required
                        placeholder='Email'
                        className='px-4 py-2 hover:outline-pink-300 outline-none border rounded-lg w-full'
                    /> <br />
                    <span className="px-1 text-sm text-pink-400 font-extrabold py-1 pl-2">Password</span>
                    <div className='flex bg-white items-center border-2 hover:border-pink-300 rounded-lg'>
                        <input type={showPassword ? "password" : "text"}
                            required
                            placeholder='Password'
                            className='px-4 py-2 outline-none border-none  w-full rounded-lg'
                        />
                        <span className='pr-1 cursor-pointer'
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? <BiShow size={25} /> : <BiHide size={25} />}
                        </span>
                    </div>

                    <div className="flex justify-between">
                        <label className="block text-gray-500 font-bold my-4">
                            <input type="checkbox"
                                className="leading-loose text-orange-500" /> <span className="py-2 text-sm text-pink-400 leading-snug"> Remember
                                    Me
                            </span>
                        </label>
                        <label className="block text-gray-500 font-bold my-4"><a
                            href="#"
                            className="cursor-pointer tracking-tighter text-pink-400 border-b-2 border-gray-200 hover:border-gray-400"><span>Forgot
                                Password?
                            </span>
                        </a>
                        </label>
                    </div>
                    <br />
                    <button type='submit' className='uppercase tracking-wide text-black font-bold cursor-pointer'>
                        <span className='bg-pink-400 px-8 py-2 rounded-lg'>
                            submit
                        </span>
                    </button>
                </form>
            </div>
            <DIrectLogin />
        </div>
    )
}

export default Form