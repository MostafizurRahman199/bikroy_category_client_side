import React, { useState } from "react";
import { IoIosSend } from "react-icons/io";
import { useForm } from "react-hook-form";
import ReCAPTCHA from "react-google-recaptcha";
import Swal from 'sweetalert2';

// npm install react-hook-form react-google-recaptcha

const ContactForm = ({ name="", email="" }) => {


  const {
    register,
    handleSubmit,
    reset, // Import reset function
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: name,
      email: email,
    },
  });

  const onSubmit = (data) => {
    console.log("Form data:", data);
    Swal.fire({
      title: "Success!",
      text: "Form submitted successfully!",
      icon: "success",
      confirmButtonText: "OK",
    });
    reset(); // Reset the form fields
  };

  return (
    <div className="flex justify-center items-center min-h-screen md:p-6">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-6xl bg-gray-100 sm:shadow-md sm:rounded-lg p-4 md:p-20 space-y-6"
      >
        {/* Name and Email Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name*
            </label>
            <input
              {...register("name", { required: "Name is required" })}
              id="name"
              type="text"
              placeholder="Enter your name"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#D1A054]"
              readOnly={!!name} // Make read-only if user is logged in
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email*
            </label>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email format",
                },
              })}
              id="email"
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#D1A054]"
              readOnly={!!email} // Make read-only if user is logged in
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>
        </div>

        {/* Phone Field */}
        <div>
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="phone"
          >
            Phone*
          </label>
          <input
            {...register("phone", { required: "Phone number is required" })}
            id="phone"
            type="tel"
            placeholder="Enter your phone number"
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#D1A054]"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
          )}
        </div>

        {/* Message Field */}
        <div>
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="message"
          >
            Message*
          </label>
          <textarea
            {...register("message", { required: "Message is required" })}
            id="message"
            rows="4"
            placeholder="Write your message here"
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#D1A054]"
          ></textarea>
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">
              {errors.message.message}
            </p>
          )}
        </div>

        {/* Recaptcha and Submit */}
        <div className="space-y-6">
          <div className="flex justify-center items-center">
            <button
              type="submit"
              className={`w-full flex items-center justify-center gap-2 md:w-auto bg-[#D1A054] text-white py-3 px-6 hover:bg-[#D1A054] transition-all `}
            >
              <p className="text-xl">Send Message </p>
              <IoIosSend className="text-3xl" />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
