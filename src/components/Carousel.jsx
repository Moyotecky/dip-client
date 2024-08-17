import React, { useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const Carousel = ({ slides , otherStyles }) => {
    const [curr, setCurr] = useState(0);

    const prev = () =>
        setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));

    const next = () =>
        setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

    return (
        <div className={`relative z-10 w-[370px]  rounded-[30px] h-[450px] mx-auto mt-[10px] md:w-[600px] md:h-[450px]   md:rounded-br-[0px] md:rounded-tl-[0px] overflow-hidden ${otherStyles} ` }>
            <div
                className="flex transition-transform ease-out duration-500"
                style={{ transform: `translateX(-${curr * 100}%)`, width: `${slides.length * 100}%` }}
            >
                {slides.map((slide, index) => (
                    <div key={index} className="relative w-full h-full flex-shrink-0">
                        <img src={slide.image} alt="" className="w-full h-full md:rounded-br-[0px] md:rounded-tl-[0px] rounded-[30px] md:rounded-tr-[20px] object-cover" />
                        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                            <p className="text-white text-[16px] font-[700]  ">{slide.overlayText}</p>
                            <p className="text-white text-[32px] font-[800] ">{slide.overlayText2}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="absolute inset-0 flex items-center justify-between p-5 z-10">
                <button
                    onClick={prev}
                    className="p-1 rounded-full flex justify-center items-center w-[62px] h-[62px] shadow bg-[#00000040] bg-opacity-80"
                >
                    <FiChevronLeft size={40} color='#fff' />
                </button>
                <button
                    onClick={next}
                    className="p-1 w-[62px] h-[62px] flex justify-center items-center rounded-full shadow bg-[#00000040] bg-opacity-80"
                >
                    <FiChevronRight size={40} color='#fff' />
                </button>
            </div>
            
            <div className="absolute bottom-[70px] left-0 right-0 text-center z-10">
                <p className="text-white md:hidden block text-[16px] font-[700] ">{slides[curr].textBelowArrows}</p>
                <p className="text-white md:hidden block  font-[800] text-[32px] ">{slides[curr].text2}</p>
            </div>

            <div className="absolute bottom-[40px] left-0 right-0 z-10">
                <div className="flex items-center justify-center gap-2">
                    {slides.map((_, i) => (
                        <div
                            key={i}
                            className={`transition-all w-3 h-3 rounded-full ${curr === i ? 'bg-[#2289E3] p-2' : 'bg-[#9c9c9e]'}`}
                        ></div>
                    ))}
                </div>
            </div>

            {/* Adjust the bottom margin to prevent overlap with other content */}
            <div className="mt-[30px]"></div>
        </div>
    );
};

export default Carousel;
