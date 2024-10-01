import React, { useState } from 'react';
import { FaEye } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import EmailVerification from './EmailVerification';
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';

const API_BASE_URL = "http://localhost:8080";

function SignUp() {
  const [showVerification, setShowVerification] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false); // Added to prevent multiple submissions

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.firstName) tempErrors.firstName = 'First Name is required';
    if (!formData.lastName) tempErrors.lastName = 'Last Name is required';
    if (!formData.email) {
      tempErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Email is not valid';
    }
    if (!formData.password) tempErrors.password = 'Password is required';
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSignUp = async (e) => {
    e.preventDefault(); // Prevent page reload
    if (validate()) {
      setIsSubmitting(true); // Disable the button to prevent multiple requests
      try {
        const response = await axios.post(`${API_BASE_URL}/api/v1/auth/register`, formData);
        if (response.status = 200) {
          toast.success("Signup successful! Redirecting to verification...");

          // Ensure state updates immediately without relying on onClose
          setShowVerification(true); 
        }
      } catch (error) {
        if (error.response && error.response.data.message) {
          toast.error(error.response.data.message);
        } else {
          toast.error("Signup failed. Please try again.");
        }
      } finally {
        setIsSubmitting(false); // Re-enable the button
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center mt-10">
      {showVerification ? (
        <EmailVerification email={formData.email} onVerify={() => setShowVerification(false)} />
      ) : (
        <>
          <div className="flex flex-col items-center justify-center gap-6 w-full max-w-lg">
            {/* Name Inputs */}
            <div className="w-full flex flex-col gap-2 justify-center items-start">
              <div className="w-full flex gap-2 justify-center items-center h-12">
                <div className="w-1/2 flex flex-col">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    className="p-2 w-full h-full border border-gray-300 rounded-lg"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                  {errors.firstName && (
                    <span className="text-red-500 text-sm mt-1 text-left">{errors.firstName}</span>
                  )}
                </div>
                <div className="w-1/2 flex flex-col">
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    className="p-2 w-full h-full border border-gray-300 rounded-lg"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                  {errors.lastName && (
                    <span className="text-red-500 text-sm mt-1 text-left">{errors.lastName}</span>
                  )}
                </div>
              </div>
            </div>

            {/* Email Input */}
            <div className="flex flex-col w-full items-start">
              <div className="flex w-full items-center h-12 rounded-lg px-4 border border-gray-300 shadow-sm">
                <input
                  type="email"
                  name="email"
                  className="w-full h-full bg-transparent pl-4 outline-none"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <MdEmail className="text-gray-400" size={22} />
              </div>
              {errors.email && <span className="text-red-500 text-sm mt-1 text-left">{errors.email}</span>}
            </div>

            {/* Password Input */}
            <div className="flex flex-col w-full items-start">
              <div className="flex w-full items-center h-12 rounded-lg px-4 border border-gray-300 shadow-sm">
                <input
                  type="password"
                  name="password"
                  className="w-full h-full bg-transparent pl-4 outline-none"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                <div className="cursor-pointer">
                  <FaEye size={22} className="text-gray-400" />
                </div>
              </div>
              {errors.password && <span className="text-red-500 text-sm mt-1 text-left">{errors.password}</span>}
            </div>
          </div>

          <div className="mt-8 w-full max-w-lg">
            <button
              onClick={handleSignUp}
              disabled={isSubmitting}
              className={`w-full h-12 rounded-lg bg-blue-600 text-white font-semibold flex justify-center items-center transition-transform transform hover:scale-105 ${isSubmitting && 'opacity-50 cursor-not-allowed'}`}
            >
              {isSubmitting ? 'Signing Up...' : 'Sign Up'}
            </button>
          </div>

          <ToastContainer />
        </>
      )}
    </div>
  );
}

export default SignUp;
