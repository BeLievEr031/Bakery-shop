import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "./Banner.css"
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
// @temparory image data for banner
import ImageDataSrc from "../../localdata/bannerImageArc.json"
const Banner = () => {
  return (
    <div className='h-[90vh] max-sm:h-[75Fvh]'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >

        {
          ImageDataSrc.map((item, index) => {
            return <SwiperSlide>
              <img src={item.src} alt="cake-images" />
            </SwiperSlide>
          })
        }
      </Swiper>

    </div>
  )
}

export default Banner