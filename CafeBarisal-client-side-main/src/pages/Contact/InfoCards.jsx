import React from "react";
import { FiPhoneCall, FiMapPin, FiClock } from "react-icons/fi";

const InfoCards = () => {
  const infoData = [
    {
      icon: <FiPhoneCall size={24} />,
      title: "PHONE",
      detail: "+38 (012) 34 56 789",
    },
    {
      icon: <FiMapPin size={24} />,
      title: "ADDRESS",
      detail: "+38 (012) 34 56 789",
    },
    {
      icon: <FiClock size={24} />,
      title: "WORKING HOURS",
      detail: (
        <>
          Mon - Fri: 08:00 - 22:00
          <br />
          Sat - Sun: 10:00 - 23:00
        </>
      ),
    },
  ];

  return (
    <div className="flex flex-col md:flex-row gap-6 justify-center items-center p-6">
      {infoData.map((info, index) => (
        <div
          key={index}
          className="flex flex-col border   rounded-lg  w-full max-w-sm h-60 bg-white"
        >
          <div className="bg-[#D1A054] text-white flex justify-center items-center h-20 py-4">
            {info.icon}
          </div>
          <div className=" bg-gray-100 m-8 text-center flex h-full flex-col justify-center items-center border-2">
            <div>
            <h3 className="text-lg font-bold mb-2" style={{ color: "#D1A054" }}>
              {info.title}
            </h3>
            <p className="text-gray-600">{info.detail}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default InfoCards;
