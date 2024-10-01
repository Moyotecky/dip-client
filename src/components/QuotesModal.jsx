import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";

const REACT_APP_API_BASE_URL = 'http://localhost:8080';

const QuotesModal = ({ handleClose, product, isLoggedIn }) => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [showSuccess, setShowSuccess] = useState(false);

  const onSubmit = async (data) => {
    try {
      const quoteData = {
        ...data,
        productId: product ? product._id : null,
      };

      const token = isLoggedIn ? localStorage.getItem("token") : null;
      const response = await axios.post(`${REACT_APP_API_BASE_URL}/api/v1/quotes`, quoteData, {
        headers: {
          Authorization: token ? `Bearer ${token}` : undefined,
        },
      });

      if (response.status === 201) {
        setShowSuccess(true);
        toast.success("Quote submitted successfully. Login to view your progress!");
        
        // Reset the form fields
        reset();
      }
    } catch (error) {
      console.error("Error submitting quote:", error);
      if (error.response) {
        const errorMessage = error.response.data.message || "Error submitting quote. Please try again.";
        toast.error(errorMessage);
      } else if (error.request) {
        toast.error("No response from the server. Please check your connection.");
      } else {
        toast.error("An unexpected error occurred. Please try again.");
      }
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative w-[650px] max-h-[90vh] mx-auto rounded-[14px] bg-white shadow-lg border-[1px] border-gray-200 overflow-hidden">
        <div className="flex justify-between items-center px-5 py-[10px] mt-[20px] border-b border-gray-200">
          <div className="text-[24px] font-[400] text-[#181826]">
            Get Quote for{" "}
            <span className="font-[700]">{product ? product.name : 'Loading...'}</span>
          </div>
          <AiOutlineClose
            className="cursor-pointer text-gray-500 hover:text-gray-700"
            size={20}
            onClick={handleClose}
          />
        </div>

        <div className="px-5 py-2 text-[20px] font-[400] text-[#181826D9]">
          {isLoggedIn
            ? "Thank you for your inquiry. Please fill out the form below."
            : "Thank you for your inquiry. Please fill out the adjacent form, and a Sales Representative will get in touch with you shortly."}
        </div>

        <div className="p-6 mt-[20px] overflow-y-auto max-h-[calc(90vh-100px)]">
          <form onSubmit={handleSubmit(onSubmit)}>
            {!isLoggedIn && (
              <>
                {/* First and Last Name */}
                <div className="flex gap-[24px] mb-[12px]">
                  <div className="relative flex-1">
                    <input
                      type="text"
                      placeholder="First Name"
                      className={`w-full p-[12px] border ${errors.firstName ? 'border-red-500' : 'border-gray-300'} rounded-[8px] pr-[12px]`}
                      {...register("firstName", { required: "First name is required" })}
                    />
                    {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName.message}</p>}
                  </div>
                  <div className="relative flex-1">
                    <input
                      type="text"
                      placeholder="Last Name"
                      className={`w-full p-[12px] border ${errors.lastName ? 'border-red-500' : 'border-gray-300'} rounded-[8px] pr-[12px]`}
                      {...register("lastName", { required: "Last name is required" })}
                    />
                    {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName.message}</p>}
                  </div>
                </div>

                {/* Email */}
                <div className="relative mb-[12px]">
                  <input
                    type="email"
                    placeholder="Email"
                    className={`w-full p-[12px] border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-[8px]`}
                    {...register("email", { required: "Email is required", pattern: { value: /^\S+@\S+$/i, message: "Invalid email format" } })}
                  />
                  {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                </div>

                {/* Phone Number */}
                <div className="relative mb-[12px]">
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className={`w-full p-[12px] border ${errors.phoneNumber ? 'border-red-500' : 'border-gray-300'} rounded-[8px]`}
                    {...register("phoneNumber", { required: "Phone number is required", pattern: { value: /^[0-9+]*$/, message: "Only numbers are allowed" } })}
                  />
                  {errors.phoneNumber && <p className="text-red-500 text-sm">{errors.phoneNumber.message}</p>}
                </div>

                {/* Region */}
                <div className="relative mb-[12px] flex items-center">
                  <FaLocationDot className="absolute left-2 text-gray-500" />
                  <input
                    type="text"
                    placeholder="Region"
                    className={`w-full p-[12px] border ${errors.region ? 'border-red-500' : 'border-gray-300'} rounded-[8px] pl-8`}
                    {...register("region", { required: "Region is required" })}
                  />
                  {errors.region && <p className="text-red-500 text-sm">{errors.region.message}</p>}
                </div>

                {/* Password */}
                <div className="relative mb-[12px]">
                  <input
                    type="password"
                    placeholder="Password"
                    className={`w-full p-[12px] border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-[8px]`}
                    {...register("password", { required: "Password is required", minLength: { value: 6, message: "Password must be at least 6 characters" } })}
                  />
                  {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
                </div>
              </>
            )}

            {/* Additional Info */}
            <div className="relative mb-[12px]">
              <textarea
                rows="5"
                placeholder="Additional Information"
                className={`w-full p-[12px] border ${errors.description ? 'border-red-500' : 'border-gray-300'} rounded-[8px]`}
                {...register("description", { required: "Description is required" })}
              />
              {errors.description && <p className="text-red-500 text-sm">{errors.description.message}</p>}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 text-white bg-blue-600 rounded-[8px] hover:bg-blue-700 transition duration-300"
            >
              Send Quote Request
            </button>
          </form>
          <ToastContainer />
          {showSuccess && (
            <div className="mt-4 text-green-500">
              Quote request submitted successfully!
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuotesModal;
