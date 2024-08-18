import React, { useState } from 'react';
import { BiChevronRight } from 'react-icons/bi';
import Allproducts from './Allproducts';
import NuclearPumps from './NuclearPumps';
import SpecialityPumps from './SpecialityPumps';
import Positive from './Positive';
import Canned from './Canned';
import Condition from './Condition';
// {BiChevronRight}

const BusinessProfileSidebar = ({ showModal }) => {
  const [selectedItem, setSelectedItem] = useState(0); // Start with the first item active


   const icon = BiChevronRight

  const handleNavClick = (index) => {
    setSelectedItem(index);
  };

  const navItems = [
    { id: 1, text: 'ALL', icon:icon},
    { id: 2, text: 'NUCLEAR PUMPS ', icon: icon },
    { id: 4, text: 'SPECIALITY PUMPS AND MOTOR ', icon: icon },
    { id: 5, text: 'POSITIVE DISPLACEMENT PUMPS', icon: icon },
    { id: 6, text: 'CANNED MOTOR PUMPS', icon: icon },
    { id: 7, text: 'CONDITION MONITORING SYSTEM ', icon: icon },
  ];

  const renderContent = () => {
    switch (selectedItem) {
      case 0:
        return <div>  <Allproducts /> </div>;
      case 1:
        return <div> <NuclearPumps /> </div>;
      case 2:
        return <div> <SpecialityPumps /> </div>;
      case 3:
        return <div> <Positive /> </div>;
      case 4:
        return <div> <Canned /> </div>;
      case 5:
        return <div> <Condition /> </div>;
      default:
        return <div> <Allproducts /> </div>;
    }
  };

  return (
    <div
      style={{
        width: '100%',
        height: '100%', // Take full height of the viewport
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'start',
        backgroundColor: '#f8f9fa', // Light background for contrast
        padding  : 50 ,
        gap : 50 ,
        // borderRadius : 10 ,
      }}
    >
      <div
        style={{
          width: '374px',
          height: '480px',
          padding: '20px 16px',
          gap: '32px',
          borderRadius: '4px 0px 0px 0px',
          border: '0.5px solid #ddd',
          opacity: 1,
          cursor : 'pointer',
          backgroundColor: '#fff', // White background for the sidebar
        //   boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', // Slight shadow for depth
          borderRadius : 10 ,
        }}
        className="flex flex-col"
      >
        {/* Search Input */}
        <div className="mb-2">
          <input
            type="text"
            placeholder="Search..."
            style={{
              width: '100%',
              padding: '10px',
              cursor : 'pointer',
              borderRadius: '40px',
              border: '1px solid #ccc',
            }}
          />
        </div>

        {/* Navigation Items */}
        <div className="mb-6">
          {/* <div className=" text-[12px]  ml-[10px] font-[500] text-[#9c9c9e] mb-2">General</div> */}
          {navItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => handleNavClick(index)}
              className="flex  justify-between items-center cursor-pointer py-3"
              style={{
                color: selectedItem === index ? '#1976d2' : '#000',
                backgroundColor: selectedItem === index ? 'transparent' : 'transparent',
                borderRadius: '30px',
                paddingLeft: '10px',
                paddingRight: '10px',
                position: 'relative',
                display : 'flex',
                // justifyContent : 'between',
                justifyItems : 'center',
                alignItems : 'center',
              }}
            >
              <span className=' my-[5px] cursor-pointer ' >{item.text}</span>
              <span className="mr-3"> <BiChevronRight /> </span>
              {selectedItem === index && (
                <div
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '2px',
                    backgroundColor: '#1976d2',
                    width : 320 ,
                    // marginX : 'auto',
                    
                  }}
                  className=' mx-auto '
                />
              )}
            </div>
          ))}
        </div>

        {/* Content Area */}
      </div>
        <div className="flex-grow">
          {renderContent()}
        </div>
    </div>
  );
};

export default BusinessProfileSidebar;
