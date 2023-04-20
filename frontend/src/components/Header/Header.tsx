import React from 'react'
import motifSrc from "../../../public/motif.png"
function Header({ text }: IHeaderProp) {
    return (
        <div className='flex justify-center pt-8'>
            <div className='flex items-center '>
                <div className='w-[250px] h-[5px] bg-red-800 relative max-sm:w-[100px]'>
                    <div
                        className='absolute w-[20px] h-[20px] bg-red-800 right-0 -translate-y-1/2 rotate-45 top-1/2'>

                    </div>
                    <div
                        className='absolute w-[15px] h-[15px] bg-red-800 left-0 -translate-x-1/2 -translate-y-1/2 rotate-45 top-1/2 rounded-full'>
                    </div>
                </div>
                <h1 className='text-[40px] px-4 uppercase max-sm:text-[25px]'>{text}</h1>
                <div className='w-[250px] h-[5px] bg-red-800 relative max-sm:w-[100px]'>
                    <div className='absolute w-[20px] h-[20px] bg-red-800 left-0 -translate-y-1/2 rotate-45 top-1/2'>
                    </div>
                    <div
                        className='absolute w-[15px] h-[15px] bg-red-800 right-0 translate-x-1/2 -translate-y-1/2 rotate-45 top-1/2 rounded-full'>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header