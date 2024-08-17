import React, { useState } from 'react';
import Carousel from './Carousel';
import logo from '../assets/Images/pistil.png'
import Hero from './Hero';

function TabPanel({ children, value, index }) {

   
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
    //   style={{ padding: '16px' }}
    >
      {value === index && <div>{children}</div>}
    </div>
  );
}

function Tab({ label, onClick, selected }) {
  return (
    <button
      role="tab"
      onClick={onClick}
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
      }}
    >
      {label}
      {selected && (
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            top : 65 ,
            right: 0,
            borderBottom: '3px solid #1976d2',
            zIndex: -1, // Ensure it's behind the tab text
          }}
        />
      )}
    </button>
  );
}

export default function BasicTabs() {

    const slides = [
      logo,
      logo,
      logo,
      ];


  const [value, setValue] = useState(0);

  const handleChange = (index) => {
    setValue(index);
  };

  return (
    <div style={{ width: '100%' }} className=' md:block hidden' >
      <div
        style={{
          borderBottom: '1px solid #ddd',
          display: 'flex',
        //   marginBottom: '16px',
          height:80,
          alignItems: 'center',
          position: 'relative',
          paddingY : 10 ,
          justifyItems : 'flex-end',
        }}
        className=' justify-end gap-[10px] px-5  '
      >
        <Tab label="Home" selected={value === 0} onClick={() => handleChange(0)} />
        <Tab label="products" selected={value === 1} onClick={() => handleChange(1)} />
        <Tab label="My Quotes" selected={value === 2} onClick={() => handleChange(2)} />
        <Tab label="about Us" selected={value === 3} onClick={() => handleChange(3)} />
        <Tab label="Help" selected={value === 4} onClick={() => handleChange(4)} />
      <div className="  ml-[10px] px-3 flex gap-[7px] items-center ">
      <button
          style={{
            padding: '8px 16px',
            marginLeft: '8px',
            fontSize: '16px',
            height: 50,
            width : 125 ,
            cursor: 'pointer',
            backgroundColor: '#1976d2',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
          }}
          className=' font-[500] '
        >
        Login 
        </button>
        <button
          style={{
            padding: '8px 16px',
            marginLeft: '8px',
            fontSize: '16px',
            // height: 50,
            // width : 125 ,
            cursor: 'pointer',
            // backgroundColor: '#1976d2',
            color: '#1976d2',
           
            borderRadius: '4px',
          }}
          className=' w-[125px] h-[50px] border-[1.5px] border-[#1976d2] rounded-[4px] font-[500] '
        >
        Sign Up
        </button>
      </div>
      </div>
      <TabPanel value={value} index={0}>
    <Hero />
      </TabPanel>
      <TabPanel value={value} index={1}>
        Content for Tab 2
      </TabPanel>
      <TabPanel value={value} index={2}>
        Content for Tab 3
      </TabPanel>
      <TabPanel value={value} index={3}>
        Content for Tab 4
      </TabPanel>
      <TabPanel value={value} index={4}>
        Content for Tab 5
      </TabPanel>
     
         
     
    </div>
  );
}
