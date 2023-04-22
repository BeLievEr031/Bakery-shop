import React from 'react'

const DIrectLogin = () => {
    return (
        <div className='w-[400px] p-5 max-sm:w-[280px] '>
            <button
                type="button"
                className="relative inline-flex w-full items-center justify-center rounded-md border border-pink-500 bg-white px-4 py-4 text- font-semibold text-gray-700 transition-all duration-200 hover:bg-pink-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none dark:text-gray-400">
                <div className="absolute inset-y-0 left-0 p-4">
                    <svg
                        className="h-6 w-6 text-rose-500"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor">
                        <path
                            d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"></path>
                    </svg>
                </div>
                Sign up with Google
            </button>
            <button
                type="button"
                className=" mt-2 relative inline-flex w-full items-center justify-center rounded-md border border-pink-500 bg-white px-4 py-4 text-base font-semibold text-pink-400 transition-all duration-200 hover:bg-pink-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none dark:text-gray-400">
                <div className="absolute inset-y-0 left-0 p-4">
                    <svg
                        className="h-6 w-6 text-[#2563EB]"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor">
                        <path
                            d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
                    </svg>
                </div>
                Sign up with Facebook
            </button>
        </div>
    )
}

export default DIrectLogin