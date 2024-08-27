import React from 'react';
import cardPic from '../assets/Images/cardpic.png';
import { useNavigate } from 'react-router-dom';

const Allproducts = ({ searchQuery = '' }) => { 
  const navigate = useNavigate();

  const products = [
    { title: "S200 Condition Monitoring System", image: cardPic },
    { title: "Nuclear Pump A1", image: cardPic },
    { title: "Speciality Pump X", image: cardPic },
    { title: "Positive Displacement Pump Y", image: cardPic },
    { title: "Canned Motor Pump Z", image: cardPic },
    { title: "Condition Monitoring X200", image: cardPic },
    { title: "High-Efficiency Nuclear Pump", image: cardPic },
    { title: "Advanced Condition Monitoring", image: cardPic },
  ];

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen p-4">
      <div className="text-2xl font-bold text-black mb-4">ALL PRODUCTS</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 flex-grow">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product, index) => (
            <div
              key={index}
              onClick={() => navigate(`/product/${index}`)}
              className="flex flex-col bg-white border rounded-lg shadow-md cursor-pointer"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-4 flex-grow">
                <div className="text-sm font-medium text-black">{product.title}</div>
                <button className="mt-4 w-full py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700">
                  Get Quote
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center text-gray-500">No products found</div>
        )}
      </div>
    </div>
  );
};

export default Allproducts;
