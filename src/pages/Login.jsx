

import React, { useRef, useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc'; 
import { toast } from 'react-toastify';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Aos from 'aos';
import Swal from 'sweetalert2';

import loginAnimation from "../../public/login.json";
import Lottie from 'lottie-react';
import { useFirebaseAuth } from '../hooks/useAuth';
import authenticationImage from "../../public/others/bikroy.jpg";
import GoogleSignIn from '../components/SocialLogin/GoogleSignIn';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const { loginUser } = useFirebaseAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || "/";
  const lottieRef = useRef(null);

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    if (lottieRef.current) {
      lottieRef.current.setSpeed(0.5);
    }
  }, []);

  const showError = (error) => {
    const messages = {
      'auth/invalid-credential': 'Invalid credentials',
      'auth/user-not-found': 'User not found',
      'auth/wrong-password': 'Wrong password',
      'auth/invalid-email': 'Invalid email',
      'auth/too-many-requests': 'Too many requests',
      'auth/email-already-in-use': 'Email already in use',
    };
    toast.error(messages[error.code] || "Something went wrong");
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const result = await loginUser(email, password);
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Login Successfully",
        showConfirmButton: false,
        timer: 1500
      });
      navigate(from, { replace: true });
    } catch (error) {
      showError(error);
    }
  };

  const handleForgotPassword = () => {
    navigate('/forgot-password', { state: { email } });
  };

  return (
    <div className="md:w-10/12 min-h-screen mx-auto flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
      <div className="w-full flex flex-col md:flex-row justify-center items-center gap-4 space-y-4 sm:shadow-2xl p-8 rounded-2xl bg-gray-100" data-aos="zoom-in">
        <div className='flex-1'>
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-[#009877]">
              Login to your account
            </h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleLogin}>
            <div className="rounded-md shadow-sm space-y-2">
              <input
                type="email"
                required
                className="appearance-none relative block w-full px-3 py-4 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-xl focus:outline-none focus:ring-black focus:border-black focus:z-10 sm:text-sm"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  className="appearance-none relative block w-full px-3 py-4 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-xl focus:outline-none focus:ring-black focus:border-black sm:text-sm pr-10"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center z-10"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <FaEye className="h-5 w-5 text-gray-400" />
                  ) : (
                    <FaEyeSlash className="h-5 w-5 text-gray-400" />
                  )}
                </button>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="bg-[#009877] hover:bg-[#105647] group relative w-full flex justify-center border border-transparent text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black px-8 py-3 rounded-xl text-white font-bold transition-transform hover:scale-105 shadow-2xl"
              >
                Login
              </button>
            </div>
          </form>

          <div className="flex items-center justify-between my-2">
            <div className="text-sm">
              <button
                onClick={handleForgotPassword}
                className="font-medium text-black hover:text-[#009877]"
              >
                Forgot your password?
              </button>
            </div>
          </div>

          <div className="mt-6 flex items-center">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="mx-4 text-gray-500">or</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          <div className="mt-6">
            <GoogleSignIn title="Login" from={from} />
          </div>

          <p className="mt-2 text-center text-sm text-gray-600">
            Don't have an account?{' '}
            <Link to="/register" className="font-medium text-black hover:text-[#009877]">
              Register here
            </Link>
          </p>
        </div>

        <div className='flex-1 flex justify-center items-center'>
          <img
            className="w-80 h-80 rounded-full animate-rotate-scale"
            src={authenticationImage}
            alt="Authentication"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;





// import React, { useRef, useState } from 'react';
// import { Link, useNavigate, useLocation } from 'react-router-dom';
// // import { useFirebaseAuth } from '../Auth/AuthProvider';

// import { FcGoogle } from 'react-icons/fc'; 
// import { toast } from 'react-toastify';
// import { FaEye, FaEyeSlash } from 'react-icons/fa';
// import Aos from 'aos';
// import { useEffect } from 'react';

// import Swal from 'sweetalert2';

// import loginAnimation from "../../public/login.json";
// import Lottie from 'lottie-react';
// import { useFirebaseAuth } from '../hooks/useAuth';
// import authenticationImage from "../../public/others/bikroy.jpg";
// // import authenticationImage from "../../public/others/authentication2.png";
// import CaptchaComponent from '../components/Capcha/CaptchaComponent';
// import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
// import GoogleSignIn from '../components/SocialLogin/GoogleSignIn';


// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [showPassword, setShowPassword] = useState(false);
//   const { loginUser, googleSignIn } = useFirebaseAuth();
//   const [isCaptchaValid, setIsCaptchaValid] = useState(false);




//   const navigate = useNavigate();
//   const location = useLocation();

//     // // Access the "from" value safely
//     const from = location.state?.from || "/";

    
//     // console.log(location);
//     // console.log(from);



//   const lottieRef = useRef(null);

//   useEffect(() => {
//     Aos.init({ duration: 1000 });
//   }, []);


//   useEffect(() => {
    
//     if (lottieRef.current) {
//       lottieRef.current.setSpeed(0.5); // Adjust speed (e.g., 0.5 for half speed)
//     }
//   }, []);


//   useEffect(() => {
//     loadCaptchaEnginge(6);  // 6 characters captcha
//   }, []);


//   const style = {
//     height: 400,
//   };
  




//   const showError = (error) => {
//     if(error.code === 'auth/invalid-credential'){
//       toast.error('Invalid credentials');
//       // sweetAlert("Invalid credentials", 'error');
//     }
//     else if(error.code === 'auth/user-not-found'){
//       toast.error('User not found');
//       // sweetAlert("User not found", 'error');
//     }
//     else if(error.code === 'auth/wrong-password'){
//       toast.error('Wrong password');
//       // sweetAlert("Wrong password", 'error');
//     }
//     else if(error.code === 'auth/invalid-email'){
//       toast.error('Invalid email');
//       // sweetAlert("Invalid email", 'error');
//     }
//     else if(error.code === 'auth/too-many-requests'){
//       toast.error('Too many requests');
//       // sweetAlert("Too many requests", 'error');
//     }
//     else if(error.code === 'auth/email-already-in-use'){
//       toast.error('Email already in use');
//       // sweetAlert("Email already in use", 'error');
//     }
//     else{
//       toast.error("Something went wrong");
//       // sweetAlert("Something went wrong", 'error');
//     }
//   }


// // _________________________________jwt token validation


      
    
//     const handleCapcha = (e) => {
     
//       if (validateCaptcha(e.target.value)) {
//         setIsCaptchaValid(true);
//       } else {
//         setIsCaptchaValid(false);
//         toast.error("Captch is not valid");
//       }
//     }



  

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {


//       // ______________validate captcha

//        const userCaptchaValue = document.getElementById('user_captcha_input').value;
  
     
//     //  ________call login function in AuthProvider
    
//       const result =  await loginUser(email, password);
     

//       // console.log(result.email)
//       Swal.fire({
//         position: "top-center",
//         icon: "success",
//         title: "Login Successfully",
//         showConfirmButton: false,
//         timer: 1500
//       });
//       navigate(from, { replace: true });
//     } catch (error) {
//       showError(error);

//     }
//   };
   




//   // const handleGoogleSignIn = async () => {
//   //   try {
//   //     const result = await googleSignIn();
//   //     // console.log(result.email);
 
//   //     Swal.fire({
//   //       position: "top-center",
//   //       icon: "success",
//   //       title: "Login Successfully",
//   //       showConfirmButton: false,
//   //       timer: 1500
//   //     });
//   //     navigate(from, { replace: true });
//   //   } catch (error) {
//   //     showError(error);
//   //     Swal.fire({
//   //       position: "top-center",
//   //       icon: "error",
//   //       title: "Something error, Try again",
//   //       showConfirmButton: false,
//   //       timer: 1500
//   //     });
//   //   }
//   // };

//   const handleForgotPassword = () => {
//     navigate('/forgot-password', { state: { email } });
//   };

//   return (
//     <div className="md:w-10/12 min-h-screen mx-auto  flex items-center justify-center  py-20 px-4 sm:px-6 lg:px-8">
//       <div className=" w-full flex flex-col md:flex md:flex-row justify-center items-center gap-4  space-y-4 sm:shadow-2xl p-8  rounded-2xl bg-gray-100" data-aos="zoom-in">
//        <div className='flex-1'>
//        <div>
//           <h2 className="mt-6 text-center text-3xl font-extrabold text-[#009877]">
//             Login to your account
//           </h2>
//         </div>
//         <form className="mt-8 space-y-6" onSubmit={handleLogin}>
//           <div className="rounded-md shadow-sm space-y-2">
//             <div>
//               <input
//                 type="email"
//                 required
//                 className="appearance-none  relative block w-full px-3 py-4 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-xl focus:outline-none focus:ring-black focus:border-black focus:z-10 sm:text-sm"
//                 placeholder="Email address"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//             </div>
//             <div className="relative">
//               <input
//                 type={showPassword ? "text" : "password"}
//                 required
//                 className="appearance-none  relative block w-full px-3 py-4 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-xl focus:outline-none focus:ring-black focus:border-black sm:text-sm pr-10"
//                 placeholder="Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//               <button
//                 type="button"
//                 className="absolute inset-y-0 right-0 pr-3 flex items-center z-10"
//                 onClick={() => setShowPassword(!showPassword)}
//               >
//                 {showPassword ? (
//                     <FaEye className="h-5 w-5 text-gray-400" />
//                 ) : (
//                     <FaEyeSlash className="h-5 w-5 text-gray-400" />
//                 )}
//               </button>
//             </div>
//           </div>

         

//           <div className="mt-4 ">
//             <div className="flex items-center justify-center py-2 rounded-xl border-2 bg-white">
//               <LoadCanvasTemplate />
//             </div>
//             <div className="mt-2">
//               <input
//                 onBlur={handleCapcha}
//                 type="text"
//                 id="user_captcha_input"
//                 className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-black focus:border-black sm:text-sm"
//                 placeholder="Enter captcha"
//               />
//             </div>
//         </div>

//           <div>
//             <button
//              disabled={!isCaptchaValid}
//               type="submit"
//               className={`${isCaptchaValid === false?  "bg-gray-400" : "bg-[#009877] hover:bg-[#167964]"}  group relative w-full flex justify-center  border border-transparent text-sm   focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black px-8 py-3 rounded-xl text-white font-bold transition-transform hover:scale-105 shadow-2xl`}
//             >
//               Login
//             </button>
//           </div>
//         </form>

//         <div className="flex items-center justify-between my-2">
//             <div className="text-sm">
//               <button
//                 onClick={handleForgotPassword}
//                 className="font-medium text-[#009877] hover:text-[#009877]"
//               >
//                 Forgot your password?
//               </button>
//             </div>
//           </div>

//         <div className="mt-6 flex items-center">
//           <div className="flex-grow border-t border-gray-300"></div>
//           <span className="mx-4 text-gray-500">or</span>
//           <div className="flex-grow border-t border-gray-300"></div>
//         </div>

//         <div className="mt-6">
//           {/* <button
//             onClick={handleGoogleSignIn}
//             className="w-full flex items-center justify-center px-4 py-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
//           >
//             <FcGoogle className="h-5 w-5 mr-2" />
//             Continue with Google
//           </button> */}
//           <GoogleSignIn title="Login" from={from}></GoogleSignIn>
//         </div>

//         <p className="mt-2 text-center text-sm text-gray-600">
//           Don't have an account?{' '}
//           <Link to="/register" className="font-medium text-[#009877] hover:text-[#009877]">
//             Register here
//           </Link>
//         </p>
//        </div>

//        {/* <div className='flex-1'>
//         <Lottie  lottieRef={lottieRef}
//       animationData={loginAnimation}
//       style={style}
//       loop={true} />
//       </div> */}   
      
//             <div className='flex-1 flex justify-center items-center'>
//           <img
//              className="w-80 h-80 rounded-full animate-rotate-scale"
//              src={authenticationImage}
//            alt="Authentication"
//           />
//          </div>
//       </div>


      
//     </div>
//   );
// };

// export default Login;
