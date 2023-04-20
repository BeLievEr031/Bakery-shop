import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Card from './components/ProductCard/Card'
import Bill from './components/Bill/Bill'

function Cart() {
    const product = {
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1989&q=80",
        name: "Black Forest Cake",
        category: "Chocolate",
        price: 250,
        total: 450
    }
    return (
        <>
            <Navbar />
            <div className='h-[96vh] bg-red-500 mt-6'>
                <div className="h-full bg-gray-100 pt-12 overflow-y-auto">
                    <h1 className="text-center text-4xl font-bold mb-4">Cart Items</h1>
                    <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
                        <div className="rounded-lg md:w-2/3">
                            <Card product={product} />
                            <Card product={product} />
                        </div>
                        <Bill />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Cart