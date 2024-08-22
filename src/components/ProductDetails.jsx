import React, { useState } from "react";
import pic from "../assets/Images/cardPic.png";
import { BiChevronLeft } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import QuotesModal from "./QuotesModal";

const ProductDetails = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [products, setProducts] = useState([
    {
      title: "S200 Condition Monitoring System",
      image: pic,
    },
  ]);

  const addProduct = () => {
    setProducts((prevProducts) => [
      ...prevProducts,
      {
        title: `S200 Condition Monitoring System ${prevProducts.length + 1}`,
        image: pic,
      },
    ]);
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <div className="py-[15px] flex justify-start items-center px-[20px] md:px-[40px]">
        <BiChevronLeft
          size={28}
          onClick={() => navigate(-1)}
          className="cursor-pointer"
        />
        <div className="ml-2 text-[16px] md:text-[20px]">Back</div>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-[20px] p-[20px] md:p-[55px]">
        <div className="w-full md:w-[700px]">
          <div className="text-[32px] md:text-[48px] font-[600] text-black">
            S200 Condition Monitoring System
          </div>
          <div className="text-[18px] md:text-[28px] font-[400] text-[#181826D9] mt-[20px] md:mt-[30px] leading-[1.5]">
            Designed to be mounted inside your motor starter cabinet, the S200
            uses a Model-Based Voltage and Current (MBVI) technique to provide
            continuous, 24/7 assessment of your equipment’s mechanical,
            electrical, and operational health.
          </div>
          <div
            onClick={openModal}
            className="cursor-pointer text-[16px] md:text-[20px] font-[500] text-white w-[250px] md:w-[350px] h-[50px] md:h-[70px] flex justify-center items-center mt-[40px] md:mt-[80px] rounded-[25px] md:rounded-[35px] bg-[#2577EE] hover:bg-[#1a5bb8] transition-colors duration-300"
          >
            Get Quote
          </div>
        </div>
        <div className="w-full md:w-[400px]">
          <img
            src={pic}
            alt="S200 Condition Monitoring System"
            className="mt-[20px] md:mt-[30px] w-full h-auto"
          />
        </div>
      </div>
      <div className="w-full bg-[#fafafa] gap-[40px] md:gap-[80px] pb-[15px] flex flex-col justify-start p-[20px] md:p-[40px]">
        <div className="w-full md:w-[800px]">
          <div className="text-[20px] md:text-[28px] font-[400] text-black">
            Overview & Features of the S200
          </div>
          <div className="text-[#000000BF] mt-[10px] md:mt-[15px] font-[400] text-[16px] md:text-[24px] leading-[1.6]">
            The S200 Condition Monitoring System measures the voltage and
            current drawn by your equipment’s motor to identify a wide range of
            specific failure modes and assess the equipment’s condition. It also
            measures energy consumption and identifies a range of energy-wasting
            parameters, allowing you to take cost-justified action to reduce
            energy consumption.
          </div>
        </div>

        <div className="w-full md:w-[800px]">
          <div className="text-[20px] md:text-[28px] font-[400] text-black">
            Compact & accessible
          </div>
          <div className="text-[#000000BF] mt-[10px] md:mt-[15px] font-[400] text-[16px] md:text-[24px] leading-[1.6]">
            The S200 is a compact unit (approximately 100mm x 80mm x 75mm)
            designed to be installed either inside your motor starter cabinet or
            in an adjacent electrical compartment or cabinet.
          </div>
        </div>

        <div className="w-full md:w-[800px]">
          <div className="text-[20px] md:text-[28px] font-[400] text-black">
            Convenient, remote, uninterrupted monitoring
          </div>
          <div className="text-[#000000BF] mt-[10px] md:mt-[15px] font-[400] text-[16px] md:text-[24px] leading-[1.6]">
            The S200 gives you a continuous assessment of the condition of your
            equipment, allowing you to keep a close eye on critical equipment
            and avoid unnecessary maintenance work and breakdowns. It can help
            you plan and schedule work efficiently while optimizing the energy
            consumption on your equipment.
          </div>
        </div>
      </div>

      <div className="text-[24px] md:text-[32px] font-[500] text-black py-[10px] px-[20px] md:px-[40px]">
        Similar Products
      </div>
      <div className="w-full flex flex-wrap justify-start gap-[20px] py-[5px] px-[20px] md:px-[40px]">
        {products.map((product, index) => (
          <div
            key={index}
            onClick={() => navigate(`/product/${index}`)}
            className="flex justify-around items-center flex-col w-full md:w-[375px] h-auto md:h-[399px] bg-white rounded-[12px] border-[0.5px] border-[#00000040] cursor-pointer"
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
            <div
              onClick={openModal}
              className="w-[335px] h-[50px] rounded-[28px] justify-center items-center flex bg-[#2577EE] text-white font-bold cursor-pointer"
            >
              Get Quote
            </div>
          </div>
        ))}
      </div>

      {/* Conditionally render the modal */}
      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full z-50 flex justify-center items-center bg-[rgba(19,30,61,0.4)]">
          <QuotesModal handleClose={closeModal} />
        </div>
      )}

      <Footer />
    </div>
  );
};

export default ProductDetails;
