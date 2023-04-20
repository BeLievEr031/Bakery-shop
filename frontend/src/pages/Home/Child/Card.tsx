import React from 'react'

function Card({ name, imageSrc, type, galleryArr }: IHomeCardProp) {
    const src = "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=936&q=80"
    return (
        <>
            {
                ((): React.ReactNode => {
                    switch (type) {
                        case "category":
                            return <div className='w-[250px] h-[250px] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] mx-4 rounded-lg'>
                                <div className="max-w-sm rounded overflow-hidden shadow-lg">
                                    <div className='w-full h-[180px]'>
                                        <img className="w-full h-full" src={imageSrc} alt="Sunset in the mountains" />
                                    </div>
                                    <div className="px-6 py-4">
                                        <div className="font-bold text-xl mb-2">{name}</div>
                                    </div>
                                </div>
                            </div>
                        case "gallery":
                            return <div className='flex justify-center'>
                                <div className='w-[80vw] flex'>
                                    <div className='h-full w-[35%] flex flex-col items-end'>
                                        <div className='p-2 overflow-hidden'>
                                            <img src={galleryArr && galleryArr[0].src} alt="" className='w-[300px] h-[200px] rounded-xl object-cover hover:rotate-2 hover:scale-105 transition-all' />
                                        </div>
                                        <div className='p-2'>
                                            <img src={galleryArr && galleryArr[1].src} alt="" className='w-[300px] h-[200px] rounded-xl object-cover hover:rotate-2 hover:scale-105 transition-all' />
                                        </div>
                                        <div className='p-2'>
                                            <img src={galleryArr && galleryArr[2].src} alt="" className='w-[300px] h-[200px] rounded-xl object-cover hover:rotate-2 hover:scale-105 transition-all' />
                                        </div>
                                    </div>
                                    <div className='h-full w-[30%] flex flex-col items-center overflow-hidden'>
                                        <div className='p-1 overflow-hidden'>
                                            <img src={galleryArr && galleryArr[3].src} alt="" className='w-[300px] h-[310px] rounded-xl object-cover hover:scale-105 transition-all' />
                                        </div>
                                        <div className='p-1 overflow-hidden'>
                                            <img src={galleryArr && galleryArr[4].src} alt="" className='w-[300px] h-[310px] rounded-xl object-cover hover:scale-105 transition-all' />
                                        </div>

                                    </div>
                                    <div className='h-full w-[35%] flex flex-col items-start overflow-hidden'>
                                        <div className='p-2'>
                                            <img src={galleryArr && galleryArr[5].src} alt="" className='w-[300px] h-[200px] rounded-xl object-cover hover:-rotate-2 hover:scale-105 transition-all' />
                                        </div>
                                        <div className='p-2'>
                                            <img src={galleryArr && galleryArr[6].src} alt="" className='w-[300px] h-[200px] rounded-xl object-cover hover:-rotate-2 hover:scale-105 transition-all' />
                                        </div>
                                        <div className='p-2'>
                                            <img src={galleryArr && galleryArr[7].src} alt="" className='w-[300px] h-[200px] rounded-xl object-cover hover:-rotate-2 hover:scale-105 transition-all' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                    }
                })()
            }
        </>
    )
}

export default Card