import React, { useState, useEffect } from 'react';
import { FaSearch, FaBars, FaTimes, FaUserCircle } from 'react-icons/fa';
import logo from '../assets/Images/logo.png';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const userData = localStorage.getItem('user');
    if (token && userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    navigate('/');
  };

  return (
    <div className="w-full z-20 flex justify-between md:justify-around items-center p-3 bg-[#000D1A]">
      {/* Logo */}
      <div>
        <img onClick={() => navigate('/')} src={logo} alt="logo" className="w-[90px] cursor-pointer md:w-[120px]" />
      </div>

      {/* Search Bar */}
      <div className="hidden md:flex items-center rounded-[12px] bg-white shadow-sm">
        <input
          type="text"
          placeholder="Search product name or item number"
          className="w-[500px] h-[45px] p-3 rounded-[12px] outline-none text-black"
        />
        <div className="flex justify-center items-center rounded-r-[12px] w-[57px] h-[57px] bg-[#2289E3]">
          <FaSearch color="white" />
        </div>
      </div>

      {/* Right Aligned Icons on Mobile */}
      <div className="flex md:hidden space-x-4">
        <FaSearch
          color="white"
          size={20}
          onClick={() => setIsSearchVisible(!isSearchVisible)}
          className="cursor-pointer"
        />
        {isMenuOpen ? (
          <FaTimes
            color="white"
            size={20}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="cursor-pointer"
          />
        ) : (
          <FaBars
            color="white"
            size={20}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="cursor-pointer"
          />
        )}
      </div>

      {/* Navbar Links */}
      <div className={`hidden md:flex space-x-8 ${isMenuOpen ? 'block' : 'hidden'} md:flex md:space-x-8`}>
        <a href="#home" className="text-white text-[16px] font-[500]">Return Policy</a>
        <a href="#shipping" className="text-white text-[16px] font-[500]">Shipping Policy</a>
      </div>

      {/* Mobile Search Bar */}
      {isSearchVisible && (
        <div className="absolute z-20 top-[60px] left-0 w-full flex justify-center bg-white p-3 shadow-sm md:hidden">
          <input
            type="text"
            placeholder="Search product name or item number"
            className="w-[80%] h-[45px] p-3 outline-none text-black"
          />
        </div>
      )}

      {/* Dropdown Menu */}
      {isMenuOpen && (
        <div className="absolute z-20 top-[68px] right-0 w-full bg-[white] p-5 flex flex-col space-y-4 md:hidden">
          <Link to="/" className="text-black py-2 border-b-[1px] border-[#9c9c9e] text-[16px] font-[500]">Home</Link>
          <Link to="/products" className="text-black py-2 border-b-[1px] border-[#9c9c9e] text-[16px] font-[500]">Products</Link>
          <Link to='/my-quotes' className="text-black py-2 border-b-[1px] border-[#9c9c9e] text-[16px] font-[500]">My Quotes</Link>
          <Link to='/help' className="text-black py-2 border-b-[1px] border-[#9c9c9e] text-[16px] font-[500]">Help</Link>
          <div className="flex justify-center gap-[10px] items-center flex-col">
            {user ? (
              <div className="flex items-center space-x-2">
                <FaUserCircle size={40} color="#1976d2" />
                <span className="text-lg">{user.firstName}</span>
                <button onClick={handleLogout} className="text-red-500">Logout</button>
              </div>
            ) : (
              <>
                <button
                  onClick={() => navigate('/login')}
                  className="w-[200px] h-[50px] bg-[#1976d2] text-white rounded-[4px] font-[500]"
                >
                  Login
                </button>
                <button
                  onClick={() => navigate('/signup')}
                  className="w-[200px] h-[50px] border-[1.5px] border-[#1976d2] rounded-[4px] text-[#1976d2] font-[500]"
                >
                  Sign Up
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
