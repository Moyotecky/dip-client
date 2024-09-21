import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const QuotesModal = ({ handleClose }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [showSuccess, setShowSuccess] = useState(false);

  const onSubmit = (data) => {
    // Simulate form submission
    setTimeout(() => {
      setShowSuccess(true);
      toast.success("Quote submitted successfully. Login to view your progress!");
    }, 1000);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative w-[650px] max-h-[90vh] mx-auto rounded-[14px] bg-white shadow-lg border-[1px] border-gray-200 overflow-hidden">
        <div className="flex justify-between items-center px-5 py-[10px] mt-[20px] border-b border-gray-200">
          <div className="text-[24px] font-[400] text-[#181826]">
            Get Quote for{" "}
            <span className="font-[700]">
              S200 Condition Monitoring System
            </span>
          </div>
          <AiOutlineClose
            className="cursor-pointer text-gray-500 hover:text-gray-700"
            size={20}
            onClick={handleClose}
          />
        </div>

        <div className="px-5 py-2 text-[20px] font-[400] text-[#181826D9]">
          Thank you for your inquiry. Please fill out the adjacent form, and a
          Sales Representative will get in touch with you shortly.
        </div>

        <div className="p-6 mt-[20px] overflow-y-auto max-h-[calc(90vh-100px)]">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* First and Last Name */}
            <div className="flex gap-[24px] mb-[12px]">
              <div className="relative flex-1">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full p-[12px] border border-gray-300 rounded-[8px] pr-[12px]"
                  {...register("firstName", { required: "First name is required" })}
                />
                {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName.message}</p>}
              </div>
              <div className="relative flex-1">
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full p-[12px] border border-gray-300 rounded-[8px] pr-[12px]"
                  {...register("lastName", { required: "Last name is required" })}
                />
                {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName.message}</p>}
              </div>
            </div>

            {/* Password */}
            <div className="relative flex flex-col mb-[12px]">
              <input
                type="password"
                placeholder="Password"
                className="w-full p-[12px] border border-gray-300 rounded-[8px]"
                {...register("password", { required: "Password is required" })}
              />
              {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
            </div>

            {/* Phone Number */}
            <div className="relative flex flex-col mb-[12px]">
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full p-[12px] border border-gray-300 rounded-[8px] pl-[40px]"
                {...register("phone", { required: "Phone number is required" })}
              />
              <FaPhone className="absolute left-[12px] top-[50%] transform -translate-y-[50%] text-gray-500" />
              {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
            </div>

            {/* Email Address */}
            <div className="relative flex flex-col mb-[12px]">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-[12px] border border-gray-300 rounded-[8px] pl-[40px]"
                {...register("email", { required: "Email address is required", pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email address" } })}
              />
              <FaEnvelope className="absolute left-[12px] top-[50%] transform -translate-y-[50%] text-gray-500" />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
            </div>

            {/* Region */}
            <div className="relative flex flex-col mb-[12px]">
              <input
                type="text"
                placeholder="Region"
                className="w-full p-[12px] border border-gray-300 rounded-[8px] pl-[40px]"
                {...register("region", { required: "Region is required" })}
              />
              <FaLocationDot className="absolute left-[12px] top-[50%] transform -translate-y-[50%] text-gray-500" />
              {errors.region && <p className="text-red-500 text-sm mt-1">{errors.region.message}</p>}
            </div>

            {/* Description */}
            <div className="relative flex flex-col mb-[12px]">
              <textarea
                placeholder="Description"
                className="w-full p-[12px] h-[100px] border border-gray-300 rounded-[8px]"
                {...register("description", { required: "Description is required" })}
              ></textarea>
              {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>}
            </div>

            {/* Privacy Policy */}
            <div className="text-[20px] font-[400] text-black mt-[10px]">
              Your privacy is important to us. If you want to see how we use and
              process your data, please view our{" "}
              <span className="text-blue-500 underline">Privacy Policy</span>.
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-[150px] mt-[25px] font-[400] p-[12px] h-[45px] bg-blue-600 text-white rounded-full hover:bg-blue-700"
            >
              Submit
            </button>
          </form>
        </div>

        {showSuccess && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="relative w-[400px] p-6 mx-auto rounded-[14px] bg-white shadow-lg border-[1px] border-gray-200 overflow-hidden">
              <div className="text-[18px] font-[400] text-[#181826] mb-[12px]">
                Quote submitted successfully. Login to view your progress!
              </div>
              <button
                onClick={() => window.location.href = '/signup'}
                className="w-full font-[400] p-[12px] h-[45px] bg-blue-600 text-white rounded-full hover:bg-blue-700"
              >
                Redirect to Login
              </button>
            </div>
          </div>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default QuotesModal;
