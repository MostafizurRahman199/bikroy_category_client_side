import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import slide1 from "../../../../public/home/slide1.jpg"
import slide2 from "../../../../public/home/slide2.jpg"
import slide3 from "../../../../public/home/slide3.jpg"
import slide4 from "../../../../public/home/slide4.jpg"
import slide5 from "../../../../public/home/slide5.jpg"

// import required modules
import { Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
import SectionHeading from '../../SectionHeading/SectionHeading';

const CategorySwiper = () => {

  

  return (
   <div className='min-h-[400px] w-full md:w-10/12 lg:w-10/12 mx-auto  my-8'>
      <SectionHeading title1={"---From 11:00am to 10:00pm---"} title2={"ORDER ONLINE"}></SectionHeading>
     <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <Link to="/order/Salad" className="relative block  ">
            <img src={slide1} alt="Category 1" className="w-full" />
            <div className="absolute bottom-0 left-0 right-0 inset-0 flex justify-center items-end bg-black bg-opacity-20 text-white text-center  p-4 opacity-0 hover:opacity-100 transition-opacity duration-300 ">
              <p className='text-xl text-[#FFFFFF] new_heading_font'>SALADS</p>
            </div>
          </Link>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <Link to="/order/Pizza" className="relative block  ">
            <img src={slide2} alt="Category 2" className="w-full" />
            <div className="absolute bottom-0 left-0 right-0 inset-0 flex justify-center items-end bg-black bg-opacity-20 text-white text-center p-4 opacity-0 hover:opacity-100 transition-opacity duration-300">
              <p className='text-xl text-[#FFFFFF] new_heading_font'>PIZZAS</p>
             
            </div>
          </Link>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <Link to="/order/Soups" className="relative block  ">
            <img src={slide3} alt="Category 3" className="w-full" />
            <div className="absolute bottom-0 left-0 right-0 inset-0 flex justify-center items-end bg-black bg-opacity-20 text-white text-center p-4 opacity-0 hover:opacity-100 transition-opacity duration-300">
              <p className='text-xl text-[#FFFFFF] new_heading_font'>SOUPS</p>
            </div>
          </Link>
        </SwiperSlide>

        {/* Slide 4 */}
        <SwiperSlide>
          <Link to="/order/Popular" className="relative block  ">
            <img src={slide4} alt="Category 4" className="w-full" />
            <div className="absolute bottom-0 left-0 right-0 inset-0 flex justify-center items-end bg-black bg-opacity-20 text-white text-center p-4 opacity-0 hover:opacity-100 transition-opacity duration-300">
              <p className='text-xl text-[#FFFFFF] new_heading_font'>CAKES</p>
            </div>
          </Link>
        </SwiperSlide>

        {/* Slide 5 */}
        <SwiperSlide>
          <Link to="/order/Desserts" className="relative block  ">
            <img src={slide5} alt="Category 5" className="w-full" />
            <div className="absolute bottom-0 left-0 inset-0 flex justify-center items-end right-0  bg-black bg-opacity-20 text-white text-center p-4 opacity-0 hover:opacity-100 transition-opacity duration-300">
              <p className='text-xl text-[#FFFFFF] new_heading_font'>DESSERTS</p>
            </div>
          </Link>
        </SwiperSlide>
      </Swiper>
   </div>
  );
};

export default CategorySwiper;
