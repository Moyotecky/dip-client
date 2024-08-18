import React from 'react';
import cardPic from '../assets/Images/cardpic.png';
import Footer from './Footer';
import { useNavigate, useNavigation } from 'react-router-dom';

const Allproducts = () => {

    // const navigate = useNavigation();

  const products = Array(8).fill({
    title: "S200 Condition Monitoring System",
    image: cardPic,
  });

  return (
    <div className="flex flex-col min-h-screen">
      <div className="text-[28px] font-[400] text-[black]">ALL PRODUCTS</div>
      <div className="mt-[20px] grid grid-cols-2 gap-6 flex-grow">
        {products.map((product, index) => (
          <div
            key={index}
            // onClick={() => navigate.n}
            className="flex justify-around   items-center flex-col w-[375px] h-[399px] bg-white rounded-[12px] border-[0.5px] border-[#00000040]"
          >
            <div>
              <img
                src={product.image}
                alt={product.title}
                className="w-[246px] mb-[15px] h-[200px]"
              />
              <div className="text-[14px] font-[400] text-center text-[black]">
                {product.title}
              </div>
            </div>
            <button className="w-[335px] h-[50px] rounded-[28px] justify-center items-center flex bg-[#2577EE] text-white font-bold cursor-pointer">
              Get Quote
            </button>
          </div>
        ))}
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Allproducts;
