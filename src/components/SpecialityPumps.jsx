import React from 'react';
import cardPic from '../assets/Images/cardpic.png';

const SpecialityPumps = () => {
  const products = Array(8).fill({
    title: "S200 Condition Monitoring System",
    image: cardPic,
  });

  return (
    <div className="flex flex-col min-h-screen p-4">
      <div className="text-2xl font-semibold text-black mb-4">
        SPECIALITY PUMPS AND MOTOR
      </div>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 flex-grow">
        {products.map((product, index) => (
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
        ))}
      </div>
      {/* Uncomment if Footer should be included */}
      {/* <Footer /> */}
    </div>
  );
};

export default SpecialityPumps;
