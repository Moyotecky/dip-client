import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaPhone, FaEnvelope,  } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";


const QuotesModal = ({ handleClose }) => {
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
          {/* First and Last Name */}
          <div className="flex gap-[24px] mb-[12px]">
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="First Name"
                className="w-full p-[12px] border border-gray-300 rounded-[8px] pr-[40px]"
              />
            </div>
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Second Name"
                className="w-full p-[12px] border border-gray-300 rounded-[8px] pr-[40px]"
              />
            </div>
          </div>

          {/* Phone Number */}
          <div className="relative flex items-center mb-[12px]">
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full p-[12px] border border-gray-300 rounded-[8px] pr-[40px]"
            />
            <FaPhone className="absolute right-[12px] text-gray-500" />
          </div>

          {/* Email Address */}
          <div className="relative flex items-center mb-[12px]">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-[12px] border border-gray-300 rounded-[8px] pr-[40px]"
            />
            <FaEnvelope className="absolute right-[12px] text-gray-500" />
          </div>

          {/* Region */}
          <div className="relative flex items-center mb-[12px]">
            <input
              type="text"
              placeholder="Region"
              className="w-full p-[12px] border border-gray-300 rounded-[8px] pr-[40px]"
            />
            <FaLocationDot className="absolute right-[12px] text-gray-500" />
          </div>

          {/* Description */}
          <textarea
            placeholder="Description"
            className="w-full p-[12px] h-[100px] border border-gray-300 rounded-[8px] mb-[12px]"
          ></textarea>

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
        </div>
      </div>
    </div>
  );
};

export default QuotesModal;
