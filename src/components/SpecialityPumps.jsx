import React from 'react';
import cardPic from '../assets/Images/cardpic.png';

const SpecialityPumps = ({ searchQuery = '' }) => { 
  const products = [
    { title: "Speciality Pump A1", image: cardPic },
    { title: "Speciality Pump B2", image: cardPic },
    { title: "High-Efficiency Speciality Pump", image: cardPic },
    { title: "Advanced Speciality Pump C3", image: cardPic },
    { title: "Speciality Pump D4", image: cardPic },
    { title: "Speciality Motor E5", image: cardPic },
    { title: "Speciality Pump F6", image: cardPic },
    { title: "Speciality Motor G7", image: cardPic },
  ];

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen p-4">
      <div className="text-2xl font-semibold text-black mb-4">
        SPECIALITY PUMPS AND MOTOR
      </div>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 flex-grow">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product, index) => (
            <div
              key={index}
              className="flex flex-col bg-white border rounded-lg shadow-md"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-4 flex-grow">
                <div className="text-sm font-medium text-black mb-2">
                  {product.title}
                </div>
                <button className="w-full py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700">
                  Get Quote
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center text-gray-500">No products found</div>
        )}
      </div>
      {/* Uncomment if Footer should be included */}
      {/* <Footer /> */}
    </div>
  );
};

export default SpecialityPumps;
