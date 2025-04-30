import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules"; // Import Autoplay
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SectionHeading from "../../SectionHeading/SectionHeading";
import quoteLeft from "../../../../public/home/quote-left.png";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";
import ApiComponent from "../../../API/ApiComponent";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../Loading/Loading";
import ErrorPage from "../../../pages/ErrorPage";



const TestimonialSlider = () => {

const {getReviews} = ApiComponent();


const {data : testimonials, isLoading, isError, error} = useQuery({
  queryKey:["reviews"],
  queryFn:getReviews,
})


if(isLoading) return <Loading></Loading>;
if(isError) return <ErrorPage></ErrorPage>


  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStars = rating % 1 !== 0 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStars;

    return (
      <div className="flex justify-center mt-4">
        {Array(fullStars)
          .fill(0)
          .map((_, i) => (
            <span key={i} className="text-yellow-800 text-4xl"><FaStar /></span>
          ))}
        {halfStars === 1 && <span className="text-yellow-800 text-4xl"><FaRegStarHalfStroke /></span>}
        {Array(emptyStars)
          .fill(0)
          .map((_, i) => (
            <span key={i} className="text-gray-300 text-4xl"><FaRegStar /></span>
          ))}
      </div>
    );
  };

  return (
    <div className="max-w-4xl mx-auto p-6 text-center">
      <SectionHeading
        title1={"--- What Our Clients Say ---"}
        title2={"Testimonials"}
      ></SectionHeading>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]} // Add Autoplay module
        navigation
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{
          delay: 3000, // Delay between slides in milliseconds
          disableOnInteraction: false, // Keeps autoplay running after user interaction
        }}
        className="mt-8"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={testimonial?._id}>
            <div className="flex flex-col justify-center items-center p-6 h-[400px]  gap-4">
              <span>{renderStars(testimonial?.rating)}</span>
              <img src={quoteLeft} className="w-16 h-16" alt="Quote" />
              <p className="text-gray-600 italic">{`"${testimonial?.details}"`}</p>
              <h4 className="text-4xl new_heading_font font-semibold text-yellow-600 mt-4">
                {testimonial?.name}
              </h4>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialSlider;
