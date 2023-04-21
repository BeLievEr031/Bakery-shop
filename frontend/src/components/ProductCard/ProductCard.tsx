
import React from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'
import { AiTwotoneHeart, AiOutlineShoppingCart } from "react-icons/Ai"
function ProductCard() {
    const navigate = useNavigate();
    const src = "https://images.unsplash.com/photo-1621303837174-89787a7d4729?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80"
    const [isFav, setFav] = React.useState<boolean>(false)
    return (
        <div className='w-[280px] h-[367px] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-3 relative rounded-xl cursor-pointer mx-2 mt-12'>
            <img src={src} alt="" className='w-full h-[288px] rounded-xl cursor-pointer' onClick={() => {
                // @navigation to next page done with params[Any unique idF] using that we can fetch single prodcut in db
                navigate(`/product/45`)
            }} />
            <div className='absolute right-4 top-5 cursor-pointer z-50'>
                <AiTwotoneHeart size={32} className='cursor-pointer' color={`${isFav ? "red" : "white"}`} onClick={() => setFav(!isFav)} />
            </div>
            <div className='absolute bottom-16 right-3 bg-pink-500  p-1 px-4 rounded-lg font-bold text-white'>
                $250
            </div>
            <div className='px-2 font-semibold'>
                Cake Name
            </div>
            <div className='flex justify-between items-center'>
                <div className='mt-2'>

                    <span className='mx-2 bg-indigo-50 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] inline-block w-[25px] h-[25px] text-center'>
                        -
                    </span>
                    <span className='mx-2'>
                        2
                    </span>
                    <span className='mx-2 bg-indigo-50 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] inline-block w-[25px] h-[25px] text-center'>
                        +
                    </span>
                </div>
                <div>
                    <AiOutlineShoppingCart size={32} />
                </div>
            </div>
        </div>
    )
}

export default ProductCard