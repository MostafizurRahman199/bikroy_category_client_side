


// import { useQuery } from "@tanstack/react-query";
import React from "react";
// import {
//   FaHome,
//   FaCalendarAlt,
//   FaShoppingCart,
//   FaRegCreditCard,
//   FaStar,
//   FaBookOpen,
//   FaUtensils,
//   FaShoppingBag,
//   FaPhoneAlt,
//   FaBars,
//   FaPlusSquare,
//   FaTasks,
//   FaClipboardList,
//   FaUsers,
//   FaPhone,
// } from "react-icons/fa";
// import { Outlet, NavLink } from "react-router-dom";
// import useUserRole from "../hooks/useUserRole";

// const Dashboard = () => {

//   const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Default closed for mobile
//   const {isAdmin} = useUserRole();
//   const [isOpen, setIsOpen] = useState(false);

//   const handleSidebarToggle = () => {
//     setIsSidebarOpen(!isSidebarOpen);

//     // Scroll to top when opening the sidebar
//     if (!isSidebarOpen) {
//       window.scrollTo({ top: 0, behavior: "smooth" });
//     }
//   };

//   const links = [
//     { to: "/dashboard/user-home", label: "User Home", icon: <FaHome /> },
//     { to: "/dashboard/reservation", label: "Reservation", icon: <FaCalendarAlt /> },
//     { to: "/dashboard/payment-history", label: "Payment History", icon: <FaRegCreditCard /> },
//     { to: "/dashboard/my-cart", label: "My Cart", icon: <FaShoppingCart /> },
//     { to: "/dashboard/add-review", label: "Add Review", icon: <FaStar /> },
//     { to: "/dashboard/my-booking", label: "My Booking", icon: <FaBookOpen /> },
//     { to: "/", label: "Home", icon: <FaHome />, isDivider: true },
//     { to: "/menu", label: "Menu", icon: <FaUtensils /> },
//     { to: "/shop", label: "Shop", icon: <FaShoppingBag /> },
//     { to: "/contact", label: "Contact", icon: <FaPhoneAlt /> },
//   ];

//   const AdminLinks = [
//     { to: "/dashboard/admin-home", label: "Dashboard Home", icon: <FaHome /> },
//     { to: "/dashboard/add-menu-item", label: "Add Items", icon: <FaPlusSquare /> },
//     { to: "/dashboard/manage-items", label: "Manage Items", icon: <FaTasks /> },
//     { to: "/dashboard/manage-bookings", label: "Manage Bookings", icon: <FaClipboardList /> },
//     { to: "/dashboard/all-users", label: "All Users", icon: <FaUsers /> },
//     { to: "/", label: "Home", icon: <FaHome />, isDivider: true },
//     { to: "/menu", label: "View Menu", icon: <FaUtensils /> },
//     { to: "/shop", label: "Shop Now", icon: <FaShoppingBag /> },
//     { to: "/contact", label: "Contact Us", icon: <FaPhone /> },
//   ];

//   return (
//     <div className="relative flex flex-col md:flex-row h-full">
//       {/* Mobile Menu Button */}
//       <button
//         className="fixed top-4 left-2 z-50 bg-[#D1A054] text-white p-2 rounded-full md:hidden"
//         onClick={handleSidebarToggle}
//       >
//         <FaBars className="text-lg" />
//       </button>

//       {/* Sidebar */}
//       <div
//         className={`absolute md:relative min-h-screen  z-40 bg-[#f3f3f3] text-[#151515] w-4/5 md:w-1/4 lg:w-1/5 p-4 transition-transform duration-300 ease-in-out ${
//           isSidebarOpen ? "translate-y-0" : "-translate-y-full"
//         } md:translate-y-0`}
        
//       >
//         <div className="text-3xl font-bold text-[#424242] mb-8 new_heading_font text-center md:text-left">
//           CafeBarisal <br />
//         </div>

//         {isAdmin ? (
//           <nav className="space-y-4">
//             {AdminLinks.map((link, index) => (
//               <React.Fragment key={index}>
//                 {link.isDivider && <hr className="my-4 border-gray-300" />}
//                 <NavLink
//                   to={link.to}
//                   className={({ isActive }) =>
//                     `new_heading_font text-xl flex items-center space-x-2 transition-all duration-300 hover:text-black ${
//                       isActive
//                         ? "text-black bg-[#d5d3d3] p-2 rounded-xl font-semibold hover:text-[#149777]"
//                         : "text-gray-800"
//                     }`
//                   }
//                 >
//                   {link.icon}
//                   <span>{link.label}</span>
//                 </NavLink>
//               </React.Fragment>
//             ))}
//           </nav>
//         ) : (
//           <nav className="space-y-4">
//             {links.map((link, index) => (
//               <React.Fragment key={index}>
//                 {link.isDivider && <hr className="my-4 border-gray-300" />}
//                 <NavLink
//                   to={link.to}
//                   className={({ isActive }) =>
//                     `new_heading_font text-xl flex items-center space-x-2 transition-all duration-300 hover:text-black ${
//                       isActive
//                         ? "text-black bg-[#d5d3d3] p-2 rounded-xl font-semibold hover:text-[#149777]"
//                         : "text-gray-800"
//                     }`
//                   }
//                 >
//                   {link.icon}
//                   <span>{link.label}</span>
//                 </NavLink>
//               </React.Fragment>
//             ))}
//           </nav>
//         )}
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 bg-gray-50">
//         <Outlet />
//       </div>
//     </div>


//   );
// };

// export default Dashboard;
import { useState } from "react";
import {
  FaHome,
  FaCalendarAlt,
  FaShoppingCart,
  FaRegCreditCard,
  FaStar,
  FaBookOpen,
  FaUtensils,
  FaShoppingBag,
  FaPhoneAlt,
  FaBars,
  FaPlusSquare,
  FaTasks,
  FaClipboardList,
  FaUsers,
  FaPhone,
} from "react-icons/fa";
import { Outlet, NavLink } from "react-router-dom";
import useUserRole from "../hooks/useUserRole";
import { RxCross1 } from "react-icons/rx";

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Sidebar toggle state for mobile
  const { isAdmin } = useUserRole();

  const links = [
    { to: "/dashboard/user-home", label: "User Home", icon: <FaHome /> },
    // { to: "/dashboard/reservation", label: "Reservation", icon: <FaCalendarAlt /> },
    { to: "/dashboard/payment-history", label: "Payment History", icon: <FaRegCreditCard /> },
    { to: "/dashboard/my-cart", label: "My Cart", icon: <FaShoppingCart /> },
    { to: "/dashboard/add-review", label: "Add Review", icon: <FaStar /> },
    // { to: "/dashboard/my-booking", label: "My Booking", icon: <FaBookOpen /> },
    { to: "/", label: "Home", icon: <FaHome />, isDivider: true },
    { to: "/menu", label: "Menu", icon: <FaUtensils /> },
    { to: "/order/:category", label: "Shop", icon: <FaShoppingBag /> },
    { to: "/contact", label: "Contact", icon: <FaPhoneAlt /> },
  ];

  const AdminLinks = [
    { to: "/dashboard/admin-home", label: "Dashboard Home", icon: <FaHome /> },
    { to: "/dashboard/add-menu-item", label: "Add Items", icon: <FaPlusSquare /> },
    { to: "/dashboard/manage-items", label: "Manage Items", icon: <FaTasks /> },
    // { to: "/dashboard/manage-bookings", label: "Manage Bookings", icon: <FaClipboardList /> },
    { to: "/dashboard/all-users", label: "All Users", icon: <FaUsers /> },
    { to: "/", label: "Home", icon: <FaHome />, isDivider: true },
    { to: "/menu", label: "View Menu", icon: <FaUtensils /> },
    { to: "/order/:category", label: "Shop Now", icon: <FaShoppingBag /> },
    { to: "/contact", label: "Contact Us", icon: <FaPhone /> },
  ];

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const renderLinks = (linksArray) => {
    return linksArray.map((link, index) => (
      <React.Fragment key={index}>
        {link.isDivider && <hr className="my-4 border-gray-300" />}
        <NavLink
          to={link.to}
          className={({ isActive }) =>
            `new_heading_font text-xl flex items-center space-x-2 transition-all duration-300 hover:text-black ${
              isActive
                ? "text-black bg-[#d5d3d3] p-2 rounded-xl font-semibold hover:text-[#149777]"
                : "text-gray-800"
            }`
          }
        >
          {link.icon}
          <span>{link.label}</span>
        </NavLink>
      </React.Fragment>
    ));
  };

  return (
    <div className="relative flex flex-col md:flex-row h-full min-h-screen">
      {/* Mobile Sidebar */}
      <button
        className="fixed top-4 left-2 z-50 rounded-full bg-[#D1A054] text-white p-2  md:hidden"
        onClick={handleSidebarToggle}
      >
        {
          isSidebarOpen ? <RxCross1 />: <FaBars className="text-lg" />
        }
      </button>
      {isSidebarOpen && (
        <div className={`transition-all duration-300 ease-in-out fixed top-0 left-0 z-40 bg-[#f3f3f3] text-[#151515] w-4/5 sm:w-2/5 h-screen p-4 shadow-lg`}>
          <div className="text-xl sm:text-3xl font-bold text-[#424242] mb-8 text-center ">
            CafeBarisal
          </div>
          <nav className="space-y-4">
            {isAdmin ? renderLinks(AdminLinks) : renderLinks(links)}
          </nav>
          <button
            onClick={handleSidebarToggle}
            className="mt-8 text-white bg-[#149777] p-2 rounded-lg w-full text-center"
          >
            Close Sidebar
          </button>
        </div>
      )}

      {/* Desktop Sidebar */}
      <div className="hidden md:block w-1/4 lg:w-1/5 bg-[#f3f3f3] text-[#151515] min-h-screen p-4">
        <div className="text-3xl font-bold text-[#424242] mb-8 text-center md:text-left">
          CafeBarisal
        </div>
        <nav className="space-y-4">
          {isAdmin ? renderLinks(AdminLinks) : renderLinks(links)}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-gray-50">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
