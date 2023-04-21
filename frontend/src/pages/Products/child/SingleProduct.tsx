import React from 'react'
import Navbar from '../../../components/Navbar/Navbar'
import Header from '../../../components/Header/Header'

function SingleProduct() {
    // const src = "https://images.unsplash.com/photo-1621303837174-89787a7d4729?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80"
    const src = "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNha2V8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"

    return (
        <div className='bg-indigo-50 h-[91vh]'>
            <div>
                <Navbar />
            </div>
            <div className='mt-16 flex justify-center'>
                {/* <Header text='Product Name'/> */}
                <div className='w-[80%] flex pt-6'>
                    <div className='mx-2 w-[500px] h-[500px] p-2 shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-lg'>
                        <img src={src} alt="" className='h-full w-full object-cover rounded-lg' />
                    </div>
                    <div className='p-4 w-[500px] h-[500px]'>
                        <span className='text-green-600'>In Stock</span>
                        <p className='text-2xl font-semibold'>Cake Name</p>
                        <div className='mt-6 flex justify-between'>
                            <div>

                                <p className=' font-semibold'>Product Highlight</p>
                                <ul className='list-disc p-4'>
                                    <li>Flavour: Fresh Fruit</li>
                                    <li>Shapes: Round</li>
                                    <li>Weight: 2 kg</li>
                                </ul>
                            </div>
                            <div className=''>
                                <div className='py-2'>
                                    <div className='my-1.5'>
                                        <p className='font-semibold'>

                                        Message On Cake
                                        </p>
                                    </div>
                                    <hr />
                                    <div className='mt-2.5'>
                                        <input type="text" className='text-lg p-2 outline-none rounded-md' placeholder='Message'/>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className='mt-10 w-full'>
                            <div className='w-full flex justify-between items-center'>
                                <div className='mt-2 flex select-none'>

                                    <p className='mx-2 bg-indigo-50 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]  w-[50px] h-[50px] text-center flex justify-center items-center cursor-pointer text-xl font-semibold rounded-md'>
                                        -
                                    </p>
                                    <p className='mx-2 text-2xl align-middle text-center flex justify-center items-center'>
                                        2
                                    </p>
                                    <p className='mx-2 bg-indigo-50 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]  w-[50px] h-[50px] text-center flex justify-center items-center cursor-pointer text-xl font-semibold rounded-md'>
                                        +
                                    </p>
                                </div>
                                <div className=''>
                                    <span className='font-bold'>Price:</span>
                                    <p className='font-bold'>$250</p>
                                </div>
                            </div>
                        </div>

                        <div className='bg-pink-500 text-white mt-10  mx-auto text-center leading-[35px] rounded-md shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]    '>
                            ADD TO CART
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default SingleProduct