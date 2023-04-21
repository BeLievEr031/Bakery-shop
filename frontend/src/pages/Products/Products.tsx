import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Header from '../../components/Header/Header'
import { useSearchParams, useNavigate } from 'react-router-dom'
import { AiTwotoneHeart, AiOutlineShoppingCart } from "react-icons/Ai"
import ProductCard from '../../components/ProductCard/ProductCard'
// import productData from "../../localdata/shopProductByTypeData.json"

function Products() {
    const [searchParams] = useSearchParams();
    const [product, setProduct] = useState()

    // useEffect(() => {
    //     let filterData = productData.filter((product:any) => product.productType === searchParams.get("category"))
    //     console.log(filterData);
    // }, [searchParams])

    return (
        <div className='bg-indigo-50 p-4'>
            <div>
                <Navbar />
            </div>
            <div className='mt-16'>
                <Header text={`Our ${searchParams.get("category")} Collections`} />
            </div>
            <div className='flex justify-center'>
                <div className='flex flex-wrap justify-start w-[80%]'>

                    {
                        [..."aas"].map(() => {
                            return <ProductCard />
                        })
                    }

                </div>
            </div>

        </div>
    )
}

export default Products