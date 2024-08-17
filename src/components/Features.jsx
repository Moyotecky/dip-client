import React from 'react';
import bg from '../assets/Images/bg.png';
import nuc from '../assets/Images/nuclear.png';
import FeaturesCard from './FeaturesCard';
import pumps from '../assets/Images/pumps.png';
import dis from '../assets/Images/displace.png';
import motor from '../assets/Images/motor.png';
import cond from '../assets/Images/condition.png';

const Features = () => {
  return (
    <div
      className="w-full mt-0 md:mt-0 flex justify-center items-start  h-full pb-4 md:pb-0 md:h-[1200px] bg-[#fafafa] md:bg-[#ECDEFF]"
      style={{
        backgroundImage: window.innerWidth >= 768 ? `url(${bg})` : 'none',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
      }}
    >
      {/* Left Section */}
      <div className="hidden md:block w-full max-w-[400px] p-8">
        <div className="text-[42px] font-semibold text-[#003871]">Features</div>
        <div className="text-[32px] font-medium text-[#181826] mt-4">
          DIP Industrial Supplies Product Categories
        </div>
        <div className="mt-8 w-full h-[50px] rounded-full bg-[#2577EE] flex justify-center items-center text-white font-semibold">
          Explore All
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full max-w-[1100px]  flex flex-col items-center mt-[0px] md:mt-0">
        <div className="grid grid-cols-1 mt-[60px] md:grid-cols-2  gap-[30px] md:gap-6">
          <FeaturesCard imageSrc={nuc} buttonText="Learn More" />
          <FeaturesCard imageSrc={pumps} buttonText="Learn More" />
          <FeaturesCard imageSrc={dis} buttonText="Learn More" />
          <FeaturesCard imageSrc={motor} buttonText="Learn More" />
        </div>
        <div className="mt-10">
          <FeaturesCard imageSrc={cond} buttonText="Learn More" />
        </div>
      </div>
    </div>
  );
};

export default Features;
