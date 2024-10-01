import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import cardPic from '../assets/Images/cardpic.png';

const API_BASE_URL = "http://localhost:8080";

const Allproducts = ({ searchQuery = '' }) => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/api/v1/products/`);
        setProducts(Array.isArray(response.data.products) ? response.data.products : []);
      } catch (error) {
        console.error('Error fetching products:', error);
        setProducts([]); // Set to empty array on error
      }
    };
    fetchProducts();
  }, []);

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Navigate to product details
  const handleProductClick = (productId) => {
    navigate(`/products/${productId}`);
  };

  return (
    <div className="flex flex-col min-h-screen p-4">
      <div className="text-2xl font-bold text-black mb-4">ALL PRODUCTS</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 flex-grow">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div
              key={product._id}
              className="flex flex-col bg-white border rounded-lg shadow-md cursor-pointer"
              onClick={() => handleProductClick(product._id)} // Make the whole card clickable
            >
              <img
                src={product.picture || cardPic}
                alt={product.name}
                className="w-full h-[18rem] object-cover rounded-t-lg"
              />
              <div className="p-4 flex-grow">
                <div className="text-sm font-medium text-black">{product.name}</div>
                {/* Button click also navigates to the product details page */}
                <button
                  className="mt-4 w-full py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700"
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent card click from firing
                    handleProductClick(product._id); // Navigate to product details
                  }}
                >
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
