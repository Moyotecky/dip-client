import React, { useState } from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      header: "Hear From Satisfied Clients",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan. Lacinia at quis risus sed vulputate. Nec feugiat in fermentum posuere. Ultrices dui sapien eget mi",
      name: 'Courtney Henry',
      loc: 'Lagos, Nigeria',
    },
    {
      header: "Testimonial 2",
      body: "This is the body of the second testimonial. Absolutely amazing service and support.",
      name: 'Courtney Henry',
      loc: 'Lagos, Nigeria',
    },
    {
      header: "Testimonial 3",
      body: "This is the body of the third testimonial. I was impressed by the professionalism.",
      name: 'Courtney Henry',
      loc: 'Lagos, Nigeria',
    },
    {
      header: "Testimonial 4",
      body: "This is the body of the fourth testimonial. Highly satisfied with the quality.",
      name: 'Courtney Henry',
      loc: 'Lagos, Nigeria',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className='w-full flex justify-center items-center h-auto bg-[#fafafa] p-4'>
      <div className="md:w-[1000px] w-full mx-auto p-6 md:p-10 h-auto rounded-[20px] md:rounded-[42px] bg-[#E0EFFF] flex flex-col justify-center items-center relative">
        {/* Testimonial Content */}
        <div className="text-center py-3 md:py-3 px-2 md:px-10">
          <h2 className="text-[20px] md:text-[24px] font-[600] text-[#000d1a] mb-[20px] md:mb-[30px]">
            {testimonials[currentIndex].header}
          </h2>
          <p className="text-[16px] md:text-[24px] text-[black] leading-[24px] md:leading-[40px] font-[400]">
            {testimonials[currentIndex].body}
          </p>
          <div className="mt-[30px] md:mt-[40px] text-[20px] md:text-[28px] font-[500] text-black">
            {testimonials[currentIndex].name}
          </div>
          <div className="text-[14px] md:text-[18px] font-[400] text-[#000000BF] mb-[20px]">
            {testimonials[currentIndex].loc}
          </div>
        </div>

        {/* Dots Navigation */}
        <div className="absolute bottom-2 md:bottom-8 flex space-x-2">
          {testimonials.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 md:w-4 md:h-4 rounded-full cursor-pointer ${
                currentIndex === index ? 'bg-[#003871]' : 'bg-[#C1D5EB]'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
