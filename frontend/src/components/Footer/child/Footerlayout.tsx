import React from 'react'
import { MdDoneOutline } from "react-icons/md"

const Footerlayout = ({ listData }: any) => {

    return (
        <div className='mt-2'>
            <ul>
                {listData &&
                    listData.map((item: string, index: number) => {
                        return <li key={index} className='flex items-center py-1'><MdDoneOutline color='white' size={20} className='mr-2'/> {item}</li>
                    })
                }
            </ul>
        </div>
    )
}

export default Footerlayout