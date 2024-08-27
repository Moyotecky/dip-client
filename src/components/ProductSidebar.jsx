import React, { useState } from 'react';
import { BiChevronRight } from 'react-icons/bi';
import Allproducts from './Allproducts';
import NuclearPumps from './NuclearPumps';
import SpecialityPumps from './SpecialityPumps';
import Positive from './Positive';
import Canned from './Canned';
import Condition from './Condition';

const BusinessProfileSidebar = ({ showModal }) => {
  const [selectedItem, setSelectedItem] = useState(0); 
  const [searchQuery, setSearchQuery] = useState(""); // Search query state

  const icon = BiChevronRight;

  const handleNavClick = (index) => {
    setSelectedItem(index);
  };

  const navItems = [
    { id: 1, text: 'ALL', icon: icon },
    { id: 2, text: 'NUCLEAR PUMPS', icon: icon },
    { id: 3, text: 'SPECIALITY PUMPS AND MOTOR', icon: icon },
    { id: 4, text: 'POSITIVE DISPLACEMENT PUMPS', icon: icon },
    { id: 5, text: 'CANNED MOTOR PUMPS', icon: icon },
    { id: 6, text: 'CONDITION MONITORING SYSTEM', icon: icon },
  ];

  const renderContent = () => {
    switch (selectedItem) {
      case 0:
        return <Allproducts searchQuery={searchQuery} />; // Pass searchQuery
      case 1:
        return <NuclearPumps searchQuery={searchQuery}  />;
      case 2:
        return <SpecialityPumps searchQuery={searchQuery}  />;
      case 3:
        return <Positive searchQuery={searchQuery}  />;
      case 4:
        return <Canned searchQuery={searchQuery}  />;
      case 5:
        return <Condition searchQuery={searchQuery}  />;
      default:
        return <Allproducts searchQuery={searchQuery} />;
    }
  };

  return (
    <div className="flex flex-col md:flex-row w-full h-full bg-gray-100 p-4 md:p-8">
      <div className="md:w-80 w-full bg-white shadow-md border rounded-md p-4">
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery} // Bind input to searchQuery
            onChange={(e) => setSearchQuery(e.target.value)} // Update searchQuery on input change
            className="w-full p-2 border rounded-full border-gray-300"
          />
        </div>
        <div>
          {navItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => handleNavClick(index)}
              className={`flex items-center cursor-pointer py-2 px-4  ${selectedItem === index ? 'border-b-[3px] border-blue-600 text-blue-600' : ''}`}
            >
              <span className="flex-grow">{item.text}</span>
              <item.icon />
            </div>
          ))}
        </div>
      </div>
      <div className="flex-grow p-4">
        {renderContent()}
      </div>
    </div>
  );
};

export default BusinessProfileSidebar;
