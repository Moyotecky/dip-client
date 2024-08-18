import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

function Tab({ label, to, selected }) {
  return (
    <Link
      to={to}
      style={{
        padding: '12px 35px',
        cursor: 'pointer',
        backgroundColor: 'transparent',
        color: selected ? '#1976d2' : '#000',
        border: 'none',
        outline: 'none',
        fontWeight: 'normal',
        position: 'relative',
        fontSize: '20px',
        zIndex: 1,
        textDecoration: 'none',
      }}
    >
      {label}
      {selected && (
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            top: 65,
            right: 0,
            borderBottom: '3px solid #1976d2',
            zIndex: -1, // Ensure it's behind the tab text
          }}
        />
      )}
    </Link>
  );
}

export default function BasicTabs() {
  const location = useLocation();

  const isSelected = (path) => location.pathname === path;

  return (
    <div style={{ width: '100%' }} className="md:block hidden">
      <div
        style={{
          borderBottom: '1px solid #ddd',
          display: 'flex',
          height: 80,
          alignItems: 'center',
          position: 'relative',
          paddingY: 10,
          justifyItems: 'flex-end',
        }}
        className="justify-end gap-[10px] px-5"
      >
        <Tab label="Home" to="/" selected={isSelected('/')} />
        <Tab label="Products" to="/products" selected={isSelected('/products')} />
        <Tab label="My Quotes" to="/my-quotes" selected={isSelected('/my-quotes')} />
        <Tab label="About Us" to="/about-us" selected={isSelected('/about-us')} />
        <Tab label="Help" to="/help" selected={isSelected('/help')} />
        <div className="ml-[10px] px-3 flex gap-[7px] items-center">
          <button
            style={{
              padding: '8px 16px',
              marginLeft: '8px',
              fontSize: '16px',
              height: 50,
              width: 125,
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
            style={{
              padding: '8px 16px',
              marginLeft: '8px',
              fontSize: '16px',
              color: '#1976d2',
              borderRadius: '4px',
            }}
            className="w-[125px] h-[50px] border-[1.5px] border-[#1976d2] rounded-[4px] font-[500]"
          >
            Sign Up
          </button>
        </div>
      </div>
      <Outlet />
    </div>
  );
}
