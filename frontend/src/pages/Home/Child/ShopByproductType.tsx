import React from 'react'
import Header from '../../../components/Header/Header'

function ShopByProductType({ productType, productArr }: IShopeByProductTypeProp) {
    return (
        <div>
            <div>
                <Header text={`Shop By ${productType}`} />
            </div>
            <div className='flex justify-center pt-10'>
                <div className='flex justify-evenly'>
                    {
                        productArr.map((item, index) => {
                            return <div className='w-[200px] h-[200px] mx-4'>
                                <img src={item.src} alt={item.category} className='w-full h-full rounded-full object-cover' />
                                <p className='text-center text-lg font-bold'>{item.category}</p>
                            </div>
                        })
                    }

                </div>
            </div>
            <div className='flex justify-center pt-14'>
                <button className='bg-indigo-50 text-indigo-500 px-4 py-2 rounded-xl'>View All</button>
            </div>
        </div>
    )
}

export default ShopByProductType