



import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Aos from "aos";
import Lottie from "lottie-react";

import frame from "../../public/frame2.json";
import { useFirebaseAuth } from "../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import ApiComponent from "../API/ApiComponent";
import { useDarkMode } from "../Context/DarkModeContext";

const getProfileImage = (user) => {
  return (
    user?.photoURL ||
    user?.providerData?.[0]?.photoURL ||
    "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
  );
};

const Profile = () => {
    const {darkMode} = useDarkMode();
  const { user } = useFirebaseAuth();
  const { } = ApiComponent();
  
  


  const navigate = useNavigate();

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);




  const handleUpdateClick = () => {
    navigate("/update-profile");
  };

  return (
    <div
      className={`min-h-screen flex justify-center items-center `}
    >
      <div
        className={`w-11/12 md:w-8/12 lg:w-6/12 shadow-2xl shadow-[#009877] rounded-2xl  p-8 ${darkMode == true ? "bg-black" : "bg-white "}`}
        data-aos="zoom-in"
      >
        {/* Header */}
        {/* <div className="flex flex-col items-center text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-[#009877] mb-2">
            Welcome to Your Profile
          </h1>
          <p className="text-gray-600">Manage your profile and updates effortlessly</p>
        </div> */}

        {/* Profile Section */}
        <div className="relative mt-6">
          {/* Decorative Frame */}
          {/* <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
            <Lottie animationData={frame} style={{ height: 200, width: 200 }} />
          </div> */}
          {/* Profile Picture */}
          {/* <div className="w-fit mx-auto p-1 bg-gradient-to-r from-[#009877] to-[#009877] rounded-full"> */}
          <div className="w-fit mx-auto p-1 ">
            <img
              src={getProfileImage(user)}
              alt="Profile"
              className="w-24 h-24 md:w-32 md:h-32  rounded-full object-cover border-4 border-white"
            />
          </div>
          {/* User Details */}
          <div className="text-center mt-8">
            <h2 className="text-2xl md:text-3xl font-bold text-[#009877]">
              {user?.displayName}
            </h2>
            <p className="text-sm text-gray-600">{user?.email}</p>
          </div>
        </div>

        {/* Statistics */}
        {/* <div className="mt-8 flex flex-wrap justify-center gap-4 text-center">
          {[
            { label: "Total Posts", value: posts?.length },
            { label: "Received Requests", value: appliedRequests?.length },
            { label: "Sent Requests", value: requests?.length },
          ].map(({ label, value }, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center bg-[#009877] text-white w-28 h-28 rounded-md shadow-md"
            >
              <p className="text-xl font-bold">{value}</p>
              <p className="text-sm">{label}</p>
            </div>
          ))}
        </div> */}

        {/* Update Profile Button */}
        <div className="mt-8 flex justify-center">
          <button
            onClick={handleUpdateClick}
            className="bg-gradient-to-r from-[#009877] to-[#bd770e] text-white px-6 py-3 rounded-md font-semibold hover:scale-105 transition-transform"
          >
            Update Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
