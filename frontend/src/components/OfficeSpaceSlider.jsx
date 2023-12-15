"use client";

import Image from "next/image";

import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { images } from "@/lib/images.js";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

export default function OfficeSpaceSlider() {
 return (
  <section className="min-h-screen py-12 bg-black">
   <div className="container">
    <Swiper
     navigation
     pagination={{ type: "fraction" }}
     modules={[Navigation, Pagination]}
     onSwiper={(swiper) => console.log(swiper)}
     className="w-full rounded-lg h-[700px]"
    >
     {images.map((image, index) => (
      <SwiperSlide key={index}>
       <div className="flex items-center justify-center w-full h-full">
        <Image
         src={image.src}
         alt={image.alt}
         className="block object-cover w-full h-full"
        />
       </div>
      </SwiperSlide>
     ))}
    </Swiper>
   </div>
  </section>
 );
}
