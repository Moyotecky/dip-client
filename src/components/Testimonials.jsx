import React, { useState } from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      header: "Hear From Satisfied Clients",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan. Lacinia at quis risus sed vulputate. Nec feugiat in fermentum posuere. Ultrices dui sapien eget mi",
      name : 'Courtney Henry',
      loc : 'Lagos, Nigeria',
    },
    {
      header: "Testimonial 2",
      body: "This is the body of the second testimonial. Absolutely amazing service and support.",
      name : 'Courtney Henry',
      loc : 'Lagos, Nigeria',
    },
    {
      header: "Testimonial 3",
      body: "This is the body of the third testimonial. I was impressed by the professionalism.",
      name : 'Courtney Henry',
      loc : 'Lagos, Nigeria',
    },
    {
      header: "Testimonial 4",
      body: "This is the body of the fourth testimonial. Highly satisfied with the quality.",
      name : 'Courtney Henry',
      loc : 'Lagos, Nigeria',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className='w-full flex justify-center  items-center h-[800px] bg-[#fafafa]'>
      <div className="md:w-[1000px] w-[350px] mx-auto md:pb-0 pb-[30px] h-full md:h-[500px] rounded-[42px] bg-[#E0EFFF] flex flex-col justify-center items-center relative">
        {/* Testimonial Content */}
        <div className="text-center px-10">
          <h2 className="text-[24px] font-[600]  text-[#000d1a] mb-[30px] ">{testimonials[currentIndex].header}</h2>
          <p className="text-[24px] text-[black] leading-[40px] font-[400] ">{testimonials[currentIndex].body}</p>
          <div className=" mt-[40px] text-[28px] font-[500] text-black  ">{testimonials[currentIndex].name}</div>
          <div className=" text-[18px] font-[400] text-[#000000BF] mb-[20px] ">{testimonials[currentIndex].loc}</div>
        </div>

     
        <div className="absolute bottom-2  md:bottom-8 flex space-x-2">
          {testimonials.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-4 h-4 rounded-full cursor-pointer ${
                currentIndex === index ? 'bg-[#003871]' : 'bg-[#C1D5EB]'
              }`}
            />
          ))}
        </div>

        {/* Navigation Buttons */}
        {/* <div className="absolute top-1/2 transform -translate-y-1/2 flex justify-between w-full px-4">
          <button onClick={prevTestimonial} className="text-[#003871] text-2xl">&lt;</button>
          <button onClick={nextTestimonial} className="text-[#003871] text-2xl">&gt;</button>
        </div> */}
      </div>
    </div>
  );
};

export default Testimonials;
