import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

const CouponCarousel = ({platforms}) => {
  return (
    <div className="w-full max-w-4xl mx-auto py-5 mt-[14px]">
      <a href={platforms.link}>
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          navigation={true}
          loop={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {platforms.map((platform, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center">
                <img
                  src={platform.img}
                  alt={platform.name}
                  className="w-full h-32 object-cover rounded-md mb-4"
                />
                <a className="text-lg font-semibold text-gray-700">
                  {platform.name}
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </a>
    </div>
  );
};

export default CouponCarousel;
