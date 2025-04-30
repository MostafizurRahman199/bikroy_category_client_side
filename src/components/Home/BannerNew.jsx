


import React, { useState } from 'react';
import banner1 from "../../../public/home/banner1.jpg";
import banner2 from "../../../public/home/banner2.jpg";
import banner3 from "../../../public/home/banner3.png";
import banner4 from "../../../public/home/banner4.jpg";
import banner5 from "../../../public/home/banner5.png";
import banner6 from "../../../public/home/banner6.png";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";

const BannerNew = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    banner1,
    banner2,
    banner3,
    banner4,
    banner5,
    banner6,
  ];

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const selectSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full h-[600px] sm:h-[600px] lg:h-[600px] ">
      {/* Main Carousel Image */}
      <div className="w-full h-full overflow-hidden">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-full object-cover transition-all duration-300"
        />
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={goToPrev}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 btn btn-circle  z-10"
      >
<FaChevronLeft />
      </button>
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 btn btn-circle z-10"
      >
       <FaChevronRight />
      </button>

      {/* Thumbnail Carousel */}
      <div className="flex justify-center gap-2 sm:gap-4 mt-4">
        {images.map((image, index) => (
          <div key={index} className="cursor-pointer">
            <img
              src={image}
              alt={`Thumbnail ${index + 1}`}
              className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-lg border-2 border-transparent hover:border-gray-500 transition duration-300"
              onClick={() => selectSlide(index)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BannerNew;

