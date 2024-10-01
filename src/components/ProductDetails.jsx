import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { BiChevronLeft } from "react-icons/bi";
import Footer from "./Footer";
import QuotesModal from "./QuotesModal";

const API_BASE_URL = "http://localhost:8080"; // Replace this with your actual base URL

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [product, setProduct] = useState(null);
  const [similarProducts, setSimilarProducts] = useState([]);

  // Fetch product details by ID
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/api/v1/products/${id}`);
        if (response.data.product) {
          setProduct(response.data.product);
          // Uncomment this if you want to fetch similar products
          // setSimilarProducts(response.data.similarProducts);
        } else {
          console.error("Product not found");
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };
    fetchProduct();
  }, [id]);

  // Open and close modal functions
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <div className="py-4 flex items-center px-6 bg-white shadow-md">
        <BiChevronLeft
          size={28}
          onClick={() => navigate(-1)}
          className="cursor-pointer text-blue-600"
        />
        <div className="ml-2 text-lg font-medium">Back</div>
      </div>

      {product ? (
        <div className="flex flex-wrap justify-center items-center gap-6 p-6 md:p-12">
          <div className="w-full md:w-[700px] bg-white shadow-lg rounded-lg p-6">
            <h1 className="text-3xl font-semibold text-black">{product.name}</h1>
            <img
              src={product.picture || "/path/to/default/image.jpg"} // Fallback image
              alt={product.name}
              className="mt-4 w-full h-auto rounded-lg"
            />
            <p className="mt-4 text-lg text-gray-700">{product.longDescription}</p>
            <button
              onClick={openModal}
              className="mt-6 w-full py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300"
            >
              Get Quote
            </button>
          </div>

          <div className="w-full md:w-[400px] bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-medium text-black">Overview & Features</h2>
            <p className="mt-2 text-gray-600">
              {product.features || 'No features available'}
            </p>
          </div>
        </div>
      ) : (
        <div className="text-center text-gray-500">Product not found or an error occurred</div>
      )}

      <h2 className="text-2xl font-semibold text-black py-4 px-6">Similar Products</h2>
      <div className="w-full flex flex-wrap justify-start gap-4 px-6">
        {similarProducts.map((similarProduct, index) => (
          <div
            key={index}
            onClick={() => navigate(`/products/${similarProduct._id}`)}
            className="flex flex-col w-full md:w-[375px] bg-white rounded-lg border border-gray-300 cursor-pointer shadow-md transition-shadow duration-300 hover:shadow-lg"
          >
            <img
              src={similarProduct.picture || "/path/to/default/image.jpg"} // Fallback image
              alt={similarProduct.name}
              className="w-full h-[200px] object-cover rounded-t-lg"
            />
            <div className="p-4">
              <div className="text-lg font-medium text-black">{similarProduct.name}</div>
              <button
                onClick={(e) => {
                  e.stopPropagation(); // Prevent card click from firing
                  openModal(); // Open modal for quote
                }}
                className="mt-2 w-full py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300"
              >
                Get Quote
              </button>
            </div>
          </div>
        ))}
      </div>

      <Footer />

      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full z-50 flex justify-center items-center bg-[rgba(19,30,61,0.4)]">
          <QuotesModal handleClose={closeModal} product={product}  />
        </div>
      )}
    </div>
  );
  // isLoggedIn={/* your login logic here */}
};

export default ProductDetails;
