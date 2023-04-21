import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Header from '../../components/Header/Header'
import ProductCard from '../../components/ProductCard/ProductCard'

function Wishlist() {
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div className='mt-16'>
                <Header text='wishlist' />
            </div>
            <div className='flex justify-center'>
                <div className='flex flex-wrap justify-start w-[80%]'>

                    {
                        [..."12345"].map(() => {
                            return <ProductCard />
                        })
                    }

                </div>
            </div>
        </div>
    )
}

export default Wishlist