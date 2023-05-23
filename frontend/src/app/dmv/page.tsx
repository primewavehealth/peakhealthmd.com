"use client";

import { useState } from "react";

import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

function page() {
 const slides = [
  { url: "/images/dmv1.jpg" },
  { url: "/images/dmv2.jpg" },
  { url: "/images/dmv3.jpg" },
  { url: "/images/dmv4.jpg" },
  { url: "/images/dmv5.jpg" },
 ];
 const [current, setCurrent] = useState(0);
 const length = slides.length;

 const nextSlide = () => {
  setCurrent(current === length - 1 ? 0 : current + 1);
 };

 const prevSlide = () => {
  setCurrent(current === 0 ? length - 1 : current - 1);
 };

 if (!Array.isArray(slides) || slides.length <= 0) {
  return null;
 }

 return (
  <section className="relative flex flex-col items-center justify-center h-screen">
   <h3 className="text-2xl text-center pb-14">
    {" "}
    Our Parent Company PeakHealth is the Official Health Partner of the DMV in
    Las Vegas.
   </h3>
   <FaArrowAltCircleLeft
    className="absolute text-sm text-black z-10 cursor-pointer select-none left-8 top-2/4;"
    onClick={prevSlide}
   />
   <FaArrowAltCircleRight
    className="absolute text-sm text-black z-10 cursor-pointer select-none right-8 top-2/4;"
    onClick={nextSlide}
   />

   {slides.map((slide, index) => {
    return (
     <div
      className={
       index === current
        ? "opacity-100 duration-[1s] scale-[1.08];"
        : "opacity-0 duration-[1s_ease];"
      }
      key={index}
     >
      {index === current && (
       <img
        src={slide.url}
        alt="travel image"
        className="w-[900px] h-[500px] rounded-[10px];"
       />
      )}
     </div>
    );
   })}
  </section>
 );
}

export default page;
