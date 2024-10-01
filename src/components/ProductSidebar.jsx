import React, { useState } from 'react';
import { BiChevronRight } from 'react-icons/bi';
import Allproducts from './Allproducts';
import axios from 'axios';

const BusinessProfileSidebar = ({ showModal }) => {
  const [selectedItem, setSelectedItem] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [products, setProducts] = useState([]);

  const icon = BiChevronRight;

  const handleNavClick = async (index) => {
    setSelectedItem(index);
    const categoryMap = ['all', 'nuclear', 'speciality', 'positive', 'canned', 'condition'];
    try {
      const response = await axios.get(`http://localhost:8080/api/v1/products/category/${categoryMap[index]}`);
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching category products:', error);
    }
  };

  const navItems = [
    { id: 1, text: 'ALL', icon },
    { id: 2, text: 'NUCLEAR PUMPS', icon },
    { id: 3, text: 'SPECIALITY PUMPS AND MOTOR', icon },
    { id: 4, text: 'POSITIVE DISPLACEMENT PUMPS', icon },
    { id: 5, text: 'CANNED MOTOR PUMPS', icon },
    { id: 6, text: 'CONDITION MONITORING SYSTEM', icon },
  ];



  const renderContent = () => {
    switch (selectedItem) {
      case 0:
        return <Allproducts searchQuery={searchQuery} />;
      default:
        return <Allproducts searchQuery={searchQuery} />;
    }
  };

  return (
    <div className="flex flex-col md:flex-row w-full h-full bg-gray-100 p-4 md:p-8">
      <div className="md:w-96 w-full bg-white shadow-md border rounded-md p-4"> {/* Increased width */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full p-2 border rounded-full border-gray-300"
          />
        </div>
        <div>
          {navItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => handleNavClick(index)}
              className={`flex items-center cursor-pointer py-2 px-4 ${selectedItem === index ? 'border-b-[3px] border-blue-600 text-blue-600' : ''}`}
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
