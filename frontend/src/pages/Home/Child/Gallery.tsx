import React from 'react'
import Header from '../../../components/Header/Header'
import Card from './Card'
import galleryArr from "../../../localdata/galeryData.json"

function Gallery() {
    return (
        <div className=''>
            <div><Header text='Gallery' /></div>
            <div className='pt-10'>
                <div>
                    <Card name="" imageSrc='' type='gallery' galleryArr={galleryArr} />
                </div>
            </div>
        </div>
    )
}

export default Gallery