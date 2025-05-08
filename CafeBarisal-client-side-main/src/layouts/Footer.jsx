// import React from 'react'
// import { FaGithub, FaLinkedin, FaTwitter, FaHeart, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa'

// // import gamerLogo from "../assets/gamer3.png"
// // import jobLogo from "../assets/job_logo.png";
// import jobLogo from "../../public/humanity.png";

// const Footer = () => {
//   return (
//     <footer className="relative bg-gradient-to-r from-black to-[#151515]">

//       <div className="container mx-auto px-4 pt-16 pb-8">

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-white">

//           <div className="space-y-4">
//           <div className='flex justify-start items-end'>

//           <img
//                 className="lg:block w-20"
//                 src={jobLogo}
//                 alt="Logo"
//               />
//             <h3 className="font_header text-4xl font-bold bg-clip-text text-transparent bg-white">
//              Humanity
//             </h3>
//           </div>
//             <p className="text-sm leading-relaxed">
//               This place is for Gamer Find authentic review about have and can make review and shortlisted his favorite one.
//             </p>

//           </div>

//           <div className="space-y-4">
//             <h4 className="text-lg font-semibold">Quick Links</h4>
//             <ul className="space-y-2">
//   {['Home', 'About Us', 'All Reviews', 'Login'].map((item) => (
//     <li key={item} className="relative group">
//       <a
//         href="#"
//         className="text-sm pl-4 relative block transition-all duration-200 hover:translate-x-2"
//       >
//         {/* Horizontal line */}
//         <span className="absolute left-0 top-1/2 transform -translate-y-1/2 w-0 h-[2px] bg-white transition-all duration-200 group-hover:w-4"></span>
//         {item}
//       </a>
//     </li>
//   ))}
// </ul>

//           </div>

//           <div className="space-y-4">
//             <h4 className="text-lg font-semibold">Contact Us</h4>
//             <div className="space-y-3">
//               <div className="flex items-center space-x-3">
//                 <FaMapMarkerAlt className="text-white" />
//                 <span className="text-sm">Dhaka, Bangladesh</span>
//               </div>
//               <div className="flex items-center space-x-3">
//                 <FaPhone className="text-white" />
//                 <span className="text-sm">+880 1234-567890</span>
//               </div>
//               <div className="flex items-center space-x-3">
//                 <FaEnvelope className="text-white" />
//                 <span className="text-sm">info@chillgamer.com</span>
//               </div>
//             </div>
//           </div>

//           <div className="space-y-4">
//             <h4 className="text-lg font-semibold">Newsletter</h4>
//             <p className="text-sm">Subscribe to get special offers and updates!</p>
//             <div className="flex">
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 className="px-4 py-2 rounded-l-lg focus:outline-none text-gray-700 w-full"
//               />
//               <button className="bg-black px-4 py-2 rounded-r-lg transition-colors duration-300">
//                 Join
//               </button>
//             </div>
//           </div>
//         </div>

//         <div className="flex justify-center space-x-6 mt-8">
//           {[
//             { icon: FaGithub, link: "https://github.com/MostafizurRahman199" },
//             { icon: FaLinkedin, link: "https://www.linkedin.com/in/md-mostafizur-rahman-78bb511a4/" },
//             { icon: FaTwitter, link: "https://x.com/Fardilshifat" }
//           ].map((social, index) => (
//             <a
//               key={index}
//               href={social.link}
//               className="transform hover:scale-110 transition-transform duration-300 text-gray-200  hover:text-white"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <social.icon size={24} />
//             </a>
//           ))}
//         </div>

//         {/* Copyright */}
//         <div className="border-t border-white/20 mt-8 pt-8 text-center">
//           <p className="text-sm text-white flex items-center justify-center gap-1">
//             Made with <FaHeart className="text-red-500" /> by Job Seeker Team © {new Date().getFullYear()}
//           </p>
//         </div>
//       </div>
//     </footer>
//   )
// }

// export default Footer

// import React from "react";
// import {
//   FaFacebookF,
//   FaInstagram,
//   FaLinkedinIn,
//   FaEnvelope,
//   FaMapMarkerAlt,
//   FaPhone,
// } from "react-icons/fa";
// import jobLogo from "../../public/humanity.png";

// const Footer = () => {
//   return (
//     <footer className="bg-gradient-to-b from-[#0D7C66] to-[#009877] text-white">
//       <div className="container mx-auto px-6 py-12">
//         {/* Top Section */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {/* About Section */}
//           <div>
//             <div className="flex items-center gap-4 mb-4">
//               <img src={jobLogo} alt="Logo" className="w-12 h-12" />
//               <h3 className="text-2xl font-bold">Humanity</h3>
//             </div>
//             <p className="text-sm leading-relaxed">
//               Humanity is a platform connecting volunteers and organizations to
//               create a positive impact. Join us to make a difference in
//               communities worldwide.
//             </p>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
//             <ul className="space-y-2">
//               {["Home", "Our Mission", "Get Involved", "Contact Us"].map(
//                 (item, idx) => (
//                   <li key={idx}>
//                     <a
//                       href="#"
//                       className="text-sm hover:underline hover:text-[#BDE8CA] transition-all duration-300"
//                     >
//                       {item}
//                     </a>
//                   </li>
//                 )
//               )}
//             </ul>
//           </div>

//           {/* Contact Section */}
//           <div>
//             <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
//             <div className="space-y-3 text-sm">
//               <div className="flex items-center gap-3">
//                 <FaMapMarkerAlt />
//                 <span>Dhaka, Bangladesh</span>
//               </div>
//               <div className="flex items-center gap-3">
//                 <FaPhone />
//                 <span>+880 1234-567890</span>
//               </div>
//               <div className="flex items-center gap-3">
//                 <FaEnvelope />
//                 <span>support@humanity.com</span>
//               </div>
//             </div>
//           </div>

//           {/* Newsletter Section */}
//           <div>
//             <h4 className="text-lg font-semibold mb-4">Stay Updated</h4>
//             <p className="text-sm mb-4">
//               Subscribe to our newsletter to receive updates on upcoming events
//               and volunteer opportunities.
//             </p>
//             <form className="flex">
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 className="w-full px-4 py-2 rounded-l-md text-gray-700 focus:outline-none"
//               />
//               <button
//                 type="submit"
//                 className="bg-[#0D7C66] px-4 py-2 rounded-r-md hover:bg-[#BDE8CA] text-white font-semibold transition-all duration-300"
//               >
//                 Subscribe
//               </button>
//             </form>
//           </div>
//         </div>

//         {/* Divider */}
//         <div className="border-t border-white/20 mt-8 pt-8"></div>

//         {/* Bottom Section */}
//         <div className="flex flex-col lg:flex-row justify-between items-center text-sm">
//           {/* Social Media */}
//           <div className="flex gap-6 mb-4 lg:mb-0">
//             {[
//               { icon: FaFacebookF, link: "#" },
//               { icon: FaInstagram, link: "#" },
//               { icon: FaLinkedinIn, link: "#" },
//             ].map((social, idx) => (
//               <a
//                 key={idx}
//                 href={social.link}
//                 className="text-white hover:text-[#BDE8CA] transition-all duration-300"
//               >
//                 <social.icon size={20} />
//               </a>
//             ))}
//           </div>

//           {/* Copyright */}
//           <p className="text-center lg:text-right">
//             © {new Date().getFullYear()} Humanity | Empowering Communities
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";
import jobLogo from "../../public/humanity.png";
import { useDarkMode } from "../Context/DarkModeContext";

const Footer = () => {
  const { darkMode } = useDarkMode();

  return (
    <div>
      <footer className={ `  text-white   grid grid-cols-1 md:grid md:grid-cols-2 `}>
        <div className="w-full bg-[#1F2937]  flex flex-col items-center justify-center p-10 gap-4">
          <h3 className="text-2xl">Contact Us</h3>
          <p className="text-center">
            123 ABS Street, Uni 21, Bangladesh <br />
            +88 123456789 <br />
            Mon - Fri: 08:00 - 22:00 <br />
            Sat - Sun: 10:00 - 23:00 <br />
          </p>
        </div>
        <div className="w-full bg-[#111827]  flex flex-col items-center justify-center gap-4 p-10">
          <h6 className="text-2xl">Follow Us</h6>
          <p>Join us on social media</p>
          <div className="grid grid-flow-col gap-4">
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </div>
        </div>
      </footer>
      <footer className="footer footer-center bg-[#151515] text-white p-4">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by ACME
            Industries Ltd
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
