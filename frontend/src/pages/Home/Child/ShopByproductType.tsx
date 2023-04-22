import React from 'react'
import Header from '../../../components/Header/Header'
import { useNavigate } from 'react-router-dom'

function ShopByProductType({ productType, productArr }: IShopeByProductTypeProp) {
    const navigate = useNavigate();
    return (
        <div>
            <div>
                <Header text={`Shop By ${productType}`} />
            </div>
            <div className='flex justify-center pt-10 max-sm:pt-5 max-sm:p-5 max-sm:items-center'>
                <div className='flex justify-evenly max-sm:justify-between max-sm:grid max-sm:grid-rows-2 max-sm:grid-flow-col max-sm:gap-4'>
                    {
                        productArr.map((item, index) => {
                            return <div key={index} className='w-[200px] h-[200px] max-sm:w-[140px] max-sm:h-[140px] mx-4 max-sm:mt-6'>
                                <img src={item.src} alt={item.category} className='w-full h-full rounded-full object-cover' />
                                <p className='text-center text-lg font-bold max-sm:text-sm max-sm:mt-2'>{item.category}</p>
                            </div>
                        })
                    }
                </div>
            </div>
            <div className='flex justify-center pt-14'>
                <button className='bg-indigo-50 text-indigo-500 px-4 py-2 rounded-xl' onClick={() => navigate(`/products?category=${productType.toLowerCase()}`)}>View All</button>
            </div>
        </div>
    )
}

export default ShopByProductType