import React from 'react';
import logo from '../assets/Images/pistil.png';
import Carousel from './Carousel';
import image2 from '../assets/Images/image 2.png';
import image3 from '../assets/Images/image 3.png';
import image4 from '../assets/Images/image 4.png';
import { useNavigate } from 'react-router-dom';
import './Hero.css'

const Hero = () => {
    const navigate = useNavigate();

    const slides = [
        { image: logo, overlayText: '', text2: 'Pump And Motors', textBelowArrows: 'We specialize in' },
        { image: image2, overlayText: '', text2: 'Pump And Motors', textBelowArrows: 'We specialize in' },
        { image: image3, overlayText: '', text2: 'Pump And Motors', textBelowArrows: 'We specialize in' },
        { image: image4, overlayText: '', text2: 'Pump And Motors', textBelowArrows: 'We specialize in' },
    ];

    return (
        <div className="relative flex justify-center md:mx-0 mx-auto md:justify-center gap-[30px] items-center p-10">
            <div className="w-[520px] md:block hidden text-[70px] font-[800] text-black">
                We Specialize in <span className="text-[#005AB8]">Pump And Motors</span>
                <button 
                    onClick={() => navigate('/products')} 
                    className="w-[350px] h-[60px] mt-[10px] bg-[#003871] text-white font-[400] rounded-full text-[20px] flex justify-center items-center"
                >
                    Explore All
                </button>
            </div>
            <div className="relative">
                <div className=" absolute  md:block hidden -left-[10px] w-[275px] h-[300px] bg-[#005AB8] "></div>
                <Carousel slides={slides} otherStyles="relative z-10" />
            </div>
        </div>
    );
};

export default Hero;
