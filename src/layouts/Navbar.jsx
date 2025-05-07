
import React, { useEffect } from 'react'
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom'
// import { useFirebaseAuth } from '../Auth/AuthProvider';
import { FaHome,  FaUser, FaUserPlus, FaSignInAlt, } from 'react-icons/fa';
import { MdAddBox } from 'react-icons/md';
import { VscOpenPreview } from 'react-icons/vsc';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import { FiSave } from "react-icons/fi";
import { useFirebaseAuth } from '../hooks/useAuth';
import { useDarkMode } from '../Context/DarkModeContext';
import { RiUserReceivedLine } from "react-icons/ri";
import { FaRegSave } from "react-icons/fa";
import humanityLogo from "../../public/humanity.png";
import DarkModeToggle from '../components/Navbar/DarkModeToggle';
import { MdMenuBook } from "react-icons/md";
import AddToCardBadge from '../components/Navbar/AddToCardBadge';
import useUserRole from '../hooks/useUserRole';

const Navbar = () => {

  
  // ___________________________hooks
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [activeLink, setActiveLink] = React.useState(location.pathname);
  const { user, logOut, loading } = useFirebaseAuth();
  const {isAdmin} = useUserRole();
  const navigate = useNavigate();
  const {darkMode} = useDarkMode()


  
  




  // ___________________________useEffect update activeLink

  React.useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);




  // ___________________________loading check

  if (loading) {
    return <div className="h-16" />; 
  }




    const getLinkStyle = (path) => `
    relative px-2 py-2 text-sm font-bold  font_header transition-colors duration-200
    ${activeLink === path ? 'text-white' : `${darkMode == true ? "text-white" : "text-white"} hover:text-white`}
    before:absolute before:bottom-0 before:left-0 before:w-full before:h-0.5 
    before:bg-white before:transform before:scale-x-0 before:transition-transform
    before:duration-300 hover:before:scale-x-100
    ${activeLink === path ? 'before:scale-x-100' : ''}
  `;





  // Check if the current route falls under the "My Profile" section
  const isProfileActive = ["/my-profile", "/post-for-volunteer", "/ManageMyPostRequest"].includes(activeLink);





  // ___________________________logout handler


  const handleLogout = async () => {
    try {
      await logOut();
   
      // toast.success('Logout successful!');
      navigate('/');
     
    } catch (error) {
      console.error('Logout error:', error);
    }
  };





  // ___________________________getProfileImage helper function

  const getProfileImage = (user) => {
    if (user.photoURL) {
        return user?.photoURL || user.photoURL;
    }
    
    if (user.providerData) {
        for (const provider of user.providerData) {
            if (provider.photoURL) {
                return provider?.photoURL;
            }
        }
    }
    
    return 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png';
  };








  // ___________________________ProfileImage component

  const ProfileImage =  ({ user }) => {


    const [imageError, setImageError] = React.useState(false);
    // const [imageUrl, setImageUrl] = React.useState(null);

    const imageUrl = !imageError ? getProfileImage(user) : 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png';
 

    return (

      // <Tooltip className='cursor-pointer bg-[#151515] text-white' content={`Hi ${user.displayName || 'User'}! `}>
      // <div className='cursor-pointer bg-[#151515] text-white' content={`Hi ${user.displayName || 'User'}! `}>
      <>
        <img
            className="h-8 w-8 rounded-full object-cover border border-gray-200 cursor-pointer hover:scale-110 transition-transform duration-200"
            src={imageUrl}
            alt={user.displayName || 'Profile'}
           
            onError={() => setImageError(true)}
            />
            </>
       
    );
  };






  return (
    <nav className={`font_header ${darkMode == true ? "bg-[#009877] text-white" : "bg-[#009877] text-white"} backdrop-blur-md fixed  shadow-lg w-full top-0 z-50`}>
      <div className="w-full mx-auto px-2 sm:px-2 lg:px-2">
        <div className="flex justify-between items-center h-16">
       
          <div className="flex flex-shrink-0 items-center  gap-1 sm:gap-4">
            <Link to="/" className="flex items-center  space-x-1">
             
             
              <span className="new_heading_font text-3xl sm:text-3xl md:text-xl lg:text-3xl text-md font-bold bg-gradient-to-r from-white to-[#a4a2a2] bg-clip-text text-transparent truncate">
                Bikroy Category
              </span>
            </Link>

            <div className='md:hidden '>
             <DarkModeToggle></DarkModeToggle>
          </div>

          </div>

        


          {/* Navigation Links - Center */}
         <div className='flex items-center gap-4'>
         <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
          
          <Link to="/" className={getLinkStyle('/')} onClick={() => setActiveLink('/')}>
            <FaHome className="lg:inline-block mr-1" /> Home
          </Link>
          
         

         

        {
            user && isAdmin && <> <Link to="/dashboard/manage-product-title" className={getLinkStyle('/dashboard')} onClick={() => setActiveLink('/dashboard')}>
            <VscOpenPreview className="lg:inline-block mr-1"/> Dashboard
          </Link>
            </>
        }

       
     

        

          {
            !user && <>
             <Link to="/login" className={getLinkStyle('/login')} onClick={() => setActiveLink('/login')}>
             <FaSignInAlt className="lg:inline-block mr-1" /> Login
           </Link>
          
            <Link to="/register" className={getLinkStyle('/register')} onClick={() => setActiveLink('/register')}>
            <FaUserPlus className="lg:inline-block mr-1" />  Register
           </Link>
            
            </>

          }

   
          <a
          data-tooltip-id="my-tooltip"
          data-tooltip-content="Change Mode"
          data-tooltip-place="top"
          >
          <DarkModeToggle></DarkModeToggle>

        </a>
        <ReactTooltip id="my-tooltip">This is a tooltip</ReactTooltip>

        </div>




        {/* User Profile/Login Button - Updated for mobile */}
        <div className="hidden md:flex items-center gap-1 lg:gap-2">
          {user ? (
            <div className="flex items-center gap-2 lg:gap-4">
            
              <Link to="/my-profile" className='flex flex-col lg:flex lg:flex-row items-center justify-center lg:gap-2'>
               {/* <span className="hidden md:block text-sm font-medium text-gray-700">
                 {user.email?.split('.')[0] || user.email?.split('@')[0] || 'User'}
               </span> */}
              </Link>


          <div className="dropdown dropdown-hover dropdown-end">
            <div tabIndex={0} role="button" className=" btn-circle mt-4"> 
              <ProfileImage user={user} />
              </div>
            <ul tabIndex={0} className={`dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow ${darkMode == true ? "text-white bg-black" : "text-black bg-white"}`}>
              <li> <a className="justify-between">{user.displayName || 'User'}</a></li>
              <li><Link to="/my-profile" className="justify-between">Profile<span className="badge">New</span></Link></li>
              <li><button  onClick={handleLogout}>Logout</button></li>
            </ul>
          </div>


            </div>
          ) : (
            <>
           
          
            </>
          )}
       </div>
         </div>
                
                

          {/* Mobile menu button - Updated styling */}
          <div className="md:hidden flex items-center ml-2">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-1 rounded-md text-black hover:text-white  focus:outline-none focus:ring-1 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>




   
      <div 
        className={`
          md:hidden fixed  top-16  text-black shadow-lg
          transform transition-all duration-300 ease-in-out z-100
          ${isMobileMenuOpen ? 'translate-y-0 opacity-100 visible' : '-translate-y-full opacity-0 invisible'}
        `}
      >
      
        <div className="absolute inset-0 bg-blue-50 text-black" />
        
      
        <div className="relative px-4 pt-2 pb-3 space-y-2">
          
          
          <Link 
            to="/" 
            className={`block text-[#009877]`}
            onClick={() => {
              setActiveLink('/');
              setIsMobileMenuOpen(false);
            }}
          >
           
           <FaHome className="inline-block mr-1 " /> Home
           
          </Link>
          
          <Link 
            to="/dashboard/manage-product-title" 
            className={`block text-[#009877]`}
            onClick={() => {
              setActiveLink('/dashboard');
              setIsMobileMenuOpen(false);
            }}
          >
           
           <FaHome className="inline-block mr-1" /> Dashboard
           
          </Link>

        

       { user && <>
         <Link 
            to="/my-profile" 
            className={`block text-[#009877]`}
            onClick={() => {
              setActiveLink('/my-profile');
              setIsMobileMenuOpen(false);
            }}
          >
            <FaUser className="inline-block mr-1" /> Profile
          </Link>
        </> }
         

             { user && <div className="flex justify-center"><ProfileImage user={user} /></div>} 
             {/* { user && <div className=" text-gray-700 break-words">
                    {user.email?.split('.')[0] || user.email || 'User'}
                  </div>}  */}

          {
            user && (
              <button
              onClick={handleLogout}
              className="bg-[#151515]  px-6 py-2 rounded-3xl text-white font-semibold transition-transform hover:scale-105 shadow-2xl  hover:bg-white "
            >
              Logout
            </button>
            )
          }
          
          {/* Add login button for mobile */}
          {!user && (
            <Link 
            to="/login" 
            className={`block ${getLinkStyle('/login')}`}
            onClick={() => {
              setActiveLink('/login');
              setIsMobileMenuOpen(false);
            }}
          >
            <FaSignInAlt className="inline-block mr-1" /> Login
          </Link>
          )}

          {!user && (
             <Link 
             to="/register" 
             className={`block ${getLinkStyle('/register')}`}
             onClick={() => {
               setActiveLink('/register');
               setIsMobileMenuOpen(false);
             }}
           >
             <FaUserPlus className="inline-block mr-1" /> Register
           </Link>
          )}
        </div>
      </div>

      {/* {user && (
        <div className="bg-gradient-to-r from-purple-100 to-blue-100 py-2 text-center">
          <p className="text-purple-800 font-medium">
            Welcome, {user.displayName || 'User'}!
          </p>
        </div>
      )} */}
    </nav>
  )
}

export default Navbar





