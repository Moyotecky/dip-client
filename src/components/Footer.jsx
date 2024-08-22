import React from 'react';
import logo from '../assets/Images/logo.png';
import { FaLocationDot, FaPhone, FaMessage } from 'react-icons/fa6';

const Footer = () => {
  return (
    <div className='w-full bg-[#000D1A]'>
      <div className="p-[20px] md:p-[50px]">
        <div className="flex flex-col md:flex-row justify-start gap-[30px] md:gap-[70px] items-start md:items-center">
          <div className="flex flex-col justify-start">
            <img src={logo} alt="" className="w-[200px] h-[100px] md:w-[250px] md:h-[120px] mb-[20px]" />
            <div className="mb-[5px] text-[#FFFFFFBF] text-[16px] md:text-[20px] font-[400]">Subscribe to our mailing list</div>
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Email Address"
                className="w-[250px] md:w-[400px] h-[40px] md:h-[45px] rounded-r-none p-3 rounded-[5px] outline-none text-black"
              />
              <div className="flex justify-center items-center rounded-r-[5px] w-[70px] md:w-[87px] h-[40px] md:h-[45px] bg-[#2289E3]">
                <p className="text-white text-[14px] md:text-[16px]">Subscribe</p>
              </div>
            </div>
          </div>

          <div className="w-full md:w-[500px] h-auto md:h-[200px] flex flex-col justify-start gap-[10px] mt-[30px] md:mt-0">
            <div className="">
              <div className="text-[18px] md:text-[20px] font-[500] text-[#66B3FF] mt-[0px] mb-[20px] md:mb-[30px]">QUICK LINK</div>
              <div className="flex flex-wrap gap-[15px] md:gap-[30px]">
                <a href="/" className="text-[16px] md:text-[20px] cursor-pointer font-[400] text-[#FFFFFFBF]">Home</a>
                <a href="/my-quotes" className="text-[16px] cursor-pointer md:text-[20px] font-[400] text-[#FFFFFFBF]">My Quotes</a>
                <a href="/help" className="text-[16px] cursor-pointer md:text-[20px] font-[400] text-[#FFFFFFBF]">About Us</a>
                <a href="#" className="text-[16px] cursor-pointer md:text-[20px] font-[400] text-[#FFFFFFBF]">Help</a>
              </div>

              <div className="text-[18px] md:text-[20px] font-[500] mt-[60px] md:mt-[80px] text-[#66B3FF] mb-[20px] md:mb-[30px]">LEGAL</div>
              <div className="flex flex-wrap gap-[15px] md:gap-[20px]">
                <a href="#" className="text-[16px] md:text-[20px] font-[400] text-[#FFFFFFBF] whitespace-nowrap">Shipping Policy</a>
                <a href="#" className="text-[16px] md:text-[20px] font-[400] text-[#FFFFFFBF] whitespace-nowrap">Return Policy</a>
                <a href="#" className="text-[16px] md:text-[20px] font-[400] text-[#FFFFFFBF] whitespace-nowrap">Terms & Condition</a>
                <a href="#" className="text-[16px] md:text-[20px] font-[400] text-[#FFFFFFBF] whitespace-nowrap">Privacy Policy</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-[1px] bg-[#FFFFFF40] mt-[40px] md:mt-[80px]"></div>

      <div className="">
        <div className="text-center font-[500] text-white mt-[20px]">Contact</div>
        <div className="p-[20px] md:p-[50px] mt-[30px] flex flex-col md:flex-row justify-center gap-[20px] items-start">
          <div className="w-full md:w-[477px] flex flex-col gap-[20px] justify-start items-start">
            <div className="text-[14px] md:text-[16px] mb-[20px] md:mb-[30px] font-[600] text-white">TURKEY-(HEAD OFFICE)</div>
            <div className="flex justify-start gap-[10px] md:gap-[15px] items-center">
              <FaLocationDot color='#fff' size={20} md:size={24} />
              <div className="text-[16px] md:text-[18px] font-[400] text-[#FFFFFFBF]">Teknopark Istanbul, Sanayi Mah. Teknopark Bulvari No.1 Blok: 7. Kat: 4/01 and Z/06, Pendik, Istanbul, TURKEY</div>
            </div>
            <div className="flex justify-start gap-[10px] md:gap-[15px] items-center">
              <FaPhone color='#fff' />
              <div className="text-[16px] md:text-[18px] font-[400] text-[#FFFFFFBF]">+90 850 390 7570</div>
            </div>

            <div className="flex justify-start gap-[10px] md:gap-[15px] items-center">
              <FaMessage color='#fff' />
              <div className="text-[16px] md:text-[18px] font-[400] text-[#FFFFFFBF]">accounts@dipindustrial.com</div>
            </div>
          </div>

          <div className="w-full md:w-[477px] flex flex-col gap-[20px] justify-start items-start mt-[20px] md:mt-0">
            <div className="text-[14px] md:text-[16px] mb-[20px] md:mb-[30px] font-[600] text-white">NETHERLANDS (Corporate office)</div>
            <div className="flex justify-start gap-[10px] md:gap-[15px] items-center">
              <FaLocationDot color='#fff' size={20} md:size={24} />
              <div className="text-[16px] md:text-[18px] font-[400] text-[#FFFFFFBF]">Liessentstraat 12, 5405 AG Uden, Netherlands</div>
            </div>
            <div className="flex justify-start gap-[10px] md:gap-[15px] items-center">
              <FaPhone color='#fff' />
              <div className="text-[16px] md:text-[18px] font-[400] text-[#FFFFFFBF]">+31 9700 50 33 001</div>
            </div>

            <div className="flex justify-start gap-[10px] md:gap-[15px] items-center">
              <FaMessage color='#fff' />
              <div className="text-[16px] md:text-[18px] font-[400] text-[#FFFFFFBF]">sales@dipindustrial.com</div>
            </div>
          </div>

          <div className="w-full md:w-[477px] flex flex-col gap-[20px] justify-start items-start mt-[20px] md:mt-0">
            <div className="text-[14px] md:text-[16px] mb-[20px] md:mb-[30px] font-[600] text-white">United States (Corporate office)</div>
            <div className="flex justify-start gap-[10px] md:gap-[15px] items-center">
              <FaLocationDot color='#fff' size={20} md:size={24} />
              <div className="text-[16px] md:text-[18px] font-[400] text-[#FFFFFFBF]">11 North Water Street, 10th Floor, Mobile, AL, 36602</div>
            </div>
            <div className="flex justify-start gap-[10px] md:gap-[15px] items-center">
              <FaPhone color='#fff' />
              <div className="text-[16px] md:text-[18px] font-[400] text-[#FFFFFFBF]">+1 (251) 297-0089</div>
            </div>

            <div className="flex justify-start gap-[10px] md:gap-[15px] items-center">
              <FaMessage color='#fff' />
              <div className="text-[16px] md:text-[18px] font-[400] text-[#FFFFFFBF]">info@dipindustrial.com</div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-[1px] bg-[#FFFFFF40] mt-[20px] md:mt-[80px]"></div>

      <div className="p-[30px] text-center">
        <p className="text-white text-[14px] md:text-[18px]">Copyright © 2023 dipindustrial.com</p>
      </div>
    </div>
  );
}

export default Footer;
