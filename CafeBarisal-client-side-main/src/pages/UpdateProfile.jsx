import React, { useState, useEffect } from 'react';
// import { useFirebaseAuth } from '../Auth/AuthProvider';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Aos from 'aos';
import { useFirebaseAuth } from '../hooks/useAuth';
import updateAnimation from "../../public/update.json"
import updatePic from "../../public/updatePic.png"
import Lottie from 'lottie-react';

const UpdateProfile = () => {
    const { user, setUser , updateUserProfile} = useFirebaseAuth();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        displayName: user?.displayName || '',
        photoURL: user?.photoURL || ''
    });

    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            if (!user) {
                throw new Error("User is not authenticated");
            }

            console.log("Updating profile for user:", user);

            await updateUserProfile(formData.displayName, formData.photoURL);

            setUser({
                ...user,
                displayName: formData.displayName,
                photoURL: formData.photoURL
            });

            // toast.success('Profile updated successfully');
            navigate('/my-profile');
        } catch (error) {
            toast.error('Failed to update profile');
            // console.error("Error updating profile:", error);
        }
    };

    return (
        <div className="min-h-screen  pt-20 px-4 flex justify-center items-start">
        <div className=' p-2 sm:p-4 rounded-2xl shadow-2xl' data-aos='zoom-in-left'>
        <div className="max-w-4xl w-full  shadow-2xl shadow-[#009877]  rounded-2xl  p-8 flex items-center justify-center gap-2" data-aos='zoom-in-left'>
                <div className="flex-1">
                    <h2 className="font_header text-2xl sm:text-4xl font-bold mb-4 text-white ">Update Profile</h2>
                    <form onSubmit={handleUpdate}>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2">Display Name</label>
                            <input
                                type="text"
                                value={formData.displayName}
                                onChange={(e) => setFormData({...formData, displayName: e.target.value})}
                                className="text-black w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#009877]"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2">Photo URL</label>
                            <input
                                type="url"
                                value={formData.photoURL}
                                onChange={(e) => setFormData({...formData, photoURL: e.target.value})}
                                className="text-black w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#009877]"
                            />
                        </div>
                        <button
                            type="submit"
                            className="bg-[#009877] hover:bg-[#bd770e] px-4 py-2 sm:px-8 sm:py-3 rounded-3xl text-white sm:font-semibold transition-transform hover:scale-105 shadow-2xl"
                        >
                            Update Information
                        </button>
                    </form>
                </div>
                <div className="flex-1 hidden md:block">
                {/* <Lottie
                animationData={updateAnimation}
                // style={style1}
                /> */}
                <img src={updatePic} alt="" />
                </div>
            </div>
        </div>
        </div>
    );
};

export default UpdateProfile; 