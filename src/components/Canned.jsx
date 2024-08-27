import React from 'react';
import cardPic from '../assets/Images/cardpic.png';

const Positive = ({ searchQuery = '' }) => {
  const products = [
    { title: "Positive Displacement Pump A1", image: cardPic },
    { title: "High-Efficiency Positive Pump", image: cardPic },
    { title: "Advanced Positive Pump B2", image: cardPic },
    { title: "Positive Pump C3", image: cardPic },
    { title: "Positive Displacement Motor", image: cardPic },
    { title: "Compact Positive Pump", image: cardPic },
    { title: "Heavy-Duty Positive Pump", image: cardPic },
    { title: "Positive Pump D4", image: cardPic },
  ];

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen p-4">
      <div className="text-2xl font-semibold text-black mb-4">
        POSITIVE DISPLACEMENT PUMPS
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
    </div>
  );
};

export default Positive;
