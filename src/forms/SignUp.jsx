import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

function SignUp() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <div className="flex flex-col items-center justify-center gap-6 w-full max-w-lg">
        {/* Name Inputs */}
        <div className="w-full flex gap-2 justify-center items-center h-12">
          <input type="text" placeholder="First Name" className="p-2 w-1/2 h-full border border-gray-300 rounded-lg" />
          <input type="text" placeholder="Last Name" className="p-2 w-1/2 h-full border border-gray-300 rounded-lg" />
        </div>

        {/* Email Input */}
        <div className="flex w-full items-center h-12 rounded-lg px-4 border border-gray-300 shadow-sm">
          <input
            type="email"
            className="w-full h-full bg-transparent pl-4 outline-none"
            placeholder="Email Address"
            required
          />
          <MdEmail className="text-gray-400" size={22} />
        </div>

        {/* Password Input */}
        <div className="flex w-full items-center h-12 rounded-lg px-4 border border-gray-300 shadow-sm">
          <input
            type={passwordVisible ? 'text' : 'password'}
            className="w-full h-full bg-transparent pl-4 outline-none"
            placeholder="Password"
            required
          />
          <div className="cursor-pointer" onClick={togglePasswordVisibility}>
            {passwordVisible ? <FaEyeSlash size={22} className="text-gray-400" /> : <FaEye size={22} className="text-gray-400" />}
          </div>
        </div>
      </div>

      <div className="mt-8 w-full max-w-lg">
        <button className="w-full h-12 rounded-lg bg-blue-600 text-white font-semibold flex justify-center items-center transition-transform transform hover:scale-105">Sign Up</button>
      </div>

      <div className="flex items-center mt-6 w-full max-w-lg">
        <div className="flex-grow h-px bg-gray-300"></div>
        <div className="px-4 text-lg text-gray-500">OR</div>
        <div className="flex-grow h-px bg-gray-300"></div>
      </div>

      <div className="mt-6 w-full max-w-lg">
        <button className="w-full h-12 rounded-lg border border-gray-500 text-gray-700 font-semibold flex justify-center items-center transition-transform transform hover:scale-105">Continue as Guest</button>
      </div>
    </div>
  );
}

export default SignUp;
