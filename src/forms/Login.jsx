import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const API_BASE_URL = "https://dip-api-v1.onrender.com";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    // Validation
    if (!email || !password) {
      toast.error("Please fill in both email and password.");
      return;
    }

    try {
      setLoading(true);
      const response = await axios.post(`${API_BASE_URL}/api/v1/auth/login`, {
        email,
        password,
      });

      if (response.status === 200) {
        toast.success("Login successful! Redirecting...");
        setTimeout(() => {
          navigate('/product'); // Navigate to /product after successful login
        }, 2000);
      }
    } catch (error) {
      const errorMessage = error.response?.data?.message || "Login failed. Please try again.";
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <form onSubmit={handleLogin} className="flex flex-col items-center justify-center gap-6 w-full max-w-lg">
        {/* Email Input */}
        <div className="flex w-full items-center h-12 rounded-lg px-4 border border-gray-300 shadow-sm">
          <input
            type="email"
            className="w-full h-full bg-transparent pl-4 outline-none"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <div className="cursor-pointer" onClick={togglePasswordVisibility}>
            {passwordVisible ? <FaEyeSlash size={22} className="text-gray-400" /> : <FaEye size={22} className="text-gray-400" />}
          </div>
        </div>

        <div className="mt-8 w-full max-w-lg">
        <button
          onClick={handleLogin} // Use onClick for the handler
          className="w-full h-12 rounded-lg bg-blue-600 text-white font-semibold flex justify-center items-center transition-transform transform hover:scale-105"
          disabled={loading}
        >
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </div>

      </form>

      <div className="flex items-center mt-6 w-full max-w-lg">
        <div className="flex-grow h-px bg-gray-300"></div>
        <div className="px-4 text-lg text-gray-500">OR</div>
        <div className="flex-grow h-px bg-gray-300"></div>
      </div>

      <div className="mt-6 w-full max-w-lg">
        <button className="w-full h-12 rounded-lg border border-gray-500 text-gray-700 font-semibold flex justify-center items-center transition-transform transform hover:scale-105">
          Continue as Guest
        </button>
      </div>

      <ToastContainer />
    </div>
  );
}

export default Login;
