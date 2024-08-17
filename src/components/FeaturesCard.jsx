import React from 'react';

const FeaturesCard = ({ imageSrc, buttonText }) => {
  return (
    <div className="w-[375px] h-[310px] bg-white rounded-[8px] flex flex-col items-center justify-center gap-[10px] border-[#00000040] border-[1px]">
      <img src={imageSrc} alt="" className="w-[120px] h-[120px] object-contain" />
      <button
        className="w-[241px]  h-[57px] mt-[15px] px-[60px] py-[20px] gap-[10px] rounded-[30px] flex justify-center items-center  border-2  border-[#005AB8] text-black font-[500]"
        style={{ opacity: '1' }}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default FeaturesCard;
