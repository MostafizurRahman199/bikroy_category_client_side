import React from "react";
import featuredImage from "../../../../public/home/featured.jpg";
import SectionHeading from "../../SectionHeading/SectionHeading";
import useMenu from "../../../hooks/useMenu";

const FromOurMenu = () => {
  

  return (
    <div
      className="relative w-full mx-auto my-20 h-[848px] bg-cover bg-fixed bg-center"
      style={{ backgroundImage: `url(${featuredImage})` }}
    >
      <div className="absolute z-0 inset-0 bg-black/50"></div>

      <div className="flex flex-col justify-center h-full p-8 items-center z-1 relative gap-4 md:gap-8">
        <SectionHeading
          title1={"---Check it out---"}
          title2={"FROM OUR MENU"}
          color={"white"}
        ></SectionHeading>
        <div className="flex flex-col md:flex md:flex-row justify-center items-center gap-4">
          <div className="flex justify-center items-center">
            <img src={featuredImage} className="w-3/4" alt="" />
          </div>
          <div className="flex flex-col justify-center text-white items-center md:items-start gap-2">
            <h3 className="text-xl">March 20, 2023</h3>
            <h3 className="text-xl">WHERE CAN I GET SOME?</h3>
            <p className="text-center md:text-start">
              {" "}
              Explore a curated selection of our finest dishes, prepared with
              the freshest ingredients and a touch of love. Whether you're a
              foodie or just looking for a comforting meal, our menu has
              something for everyone.
            </p>
            <button className="border-b-4 border-white text-white hover:bg-white hover:text-black px-4 py-2 rounded-lg transition-all duration-300">
              Read More
            </button>
          </div>
        </div>
      </div>
      {/* Content goes here */}
    </div>
  );
};

export default FromOurMenu;
