import React from 'react'
import Header from '../../../components/Header/Header'
import Card from './Card'
import homeCardData from "../../../localdata/homeCardData.json"

function Category() {
    return (
        <div>
            <Header text='category' />
            <div className='flex justify-center pt-6'>
                <div className='flex pt-4'>
                    {
                        homeCardData.map((item, index) => {
                            return <Card name={item.name} imageSrc={item.src} type='category' />
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Category