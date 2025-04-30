import React from "react";
import chefService from "../../../../public/home/chef-service.jpg"; // Import the image

const BistroBoss = () => {
  return (
    <div
      className="bg-fixed w-full md:w-10/12 h-[572px] bg-cover bg-center bg-no-repeat  md:my-24 mx-auto flex justify-center items-center  px-2  py-4 sm:p-8  md:p-24 "
      style={{ backgroundImage: `url(${chefService})` }} // Set the background image dynamically
    >
      <div className="rounded-2xl p-4 md:p-8 h-10/12 md:h-[333.67px]   bg-white flex flex-col justify-center items-center gap-4">
        <h2 className="text-black text-2xl md:text-4xl text-center new_heading_font">Bistro Boss</h2>
        <p className="text-center">
        Bistro Boss is a cozy, modern eatery offering a fusion of global cuisines with a focus on fresh, locally sourced ingredients. It prides itself on delivering a warm ambiance and exceptional customer service. Ideal for casual dining or special occasions, it promises a delightful culinary experience.
        </p>
      </div>
    </div>
  );
};

export default BistroBoss;
