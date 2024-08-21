import React, { useState } from 'react';
import { FaSearch, FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/Images/logo.png';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="w-full z-20 md:-[120px] flex justify-between md:justify-around items-center p-3 bg-[#000D1A]">
      {/* Logo */}
      <div>
        <img src={logo} alt="logo" className="w-[90px]  md:w-[120px]" />
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
        <a href="#home" className="text-white text-[16px] font-[500]">
          Return Policy
        </a>
        <a href="#shipping" className="text-white text-[16px] font-[500]">
          Shipping Policy
        </a>
      </div>

      {/* Mobile Search Bar */}
      {isSearchVisible && (
        <div className="absolute z-20 top-[60px] left-0 w-full flex justify-center bg-white p-3  shadow-sm md:hidden">
          <input
            type="text"
            placeholder="Search product name or item number"
            className="w-[80%] h-[45px] p-3  outline-none text-black"
          />
        </div>
      )}

      {/* Dropdown Menu */}
      {isMenuOpen && (
        <div className="absolute  z-20 top-[68px] right-0 w-full bg-[white] p-5 flex flex-col space-y-4 md:hidden">
          <Link to="/" className="text-black py-2 border-b-[1px] border-[#9c9c9e] text-[16px] font-[500]">
          Home
          </Link>

          <Link to="/products" className="text-black py-2 border-b-[1px] border-[#9c9c9e] text-[16px] font-[500]">
          Products
          </Link>

          <Link to='/my-quotes' className="text-black py-2 border-b-[1px] border-[#9c9c9e] text-[16px] font-[500]">
          My Quotes
          </Link>

          <Link to='/help' className="text-black py-2 border-b-[1px] border-[#9c9c9e] text-[16px] font-[500]">
          Help 
          </Link>
<div className=" flex justify-center gap-[10px] items-center flex-col ">

          <button
            onClick={() => navigate('/form')}
            style={{
              padding: '8px 16px',
              marginLeft: '8px',
              fontSize: '16px',
              height: 50,
              width: 200,
              cursor: 'pointer',
              backgroundColor: '#1976d2',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
            }}
            className="font-[500]"
          >
            Login
          </button>
          <button
            onClick={() => navigate('/form')}
            style={{
              padding: '8px 16px',
              marginLeft: '8px',
              fontSize: '16px',
              color: '#1976d2',
              borderRadius: '4px',
            }}
            className="w-[200px] h-[50px] border-[1.5px] border-[#1976d2] rounded-[4px] font-[500]"
          >
            Sign Up
          </button>
</div>


          
        </div>
      )}
    </div>
  );
};

export default Navbar;
