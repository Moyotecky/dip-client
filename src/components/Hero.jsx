import React from 'react'
import logo from '../assets/Images/pistil.png'
import Carousel from './Carousel'
import image2 from '../assets/Images/image 2.png'
import image3 from '../assets/Images/image 3.png'
import image4 from '../assets/Images/image 4.png'
import { useNavigate } from 'react-router-dom'

const Hero = () => {
    const navigate = useNavigate();

    const slides = [
        { image: logo, overlayText: '', text2: 'Pump And Motors', textBelowArrows: 'We specialize in' },
        { image: image2, overlayText: '', text2: 'Pump And Motors', textBelowArrows: 'We specialize in' },
        { image: image3, overlayText: '', text2: 'Pump And Motors', textBelowArrows: 'We specialize in' },
        { image: image4, overlayText: '', text2: 'Pump And Motors', textBelowArrows: 'We specialize in' },
    ];

    return (
        <div className="flex justify-center md:mx-0 mx-auto md:justify-around items-center p-10">
            <div className="w-[650px] md:block hidden  text-[80px] font-[800] text-black">
                We Specialize in <span className="text-[#005AB8]" >Pump And Motors</span>
                <button onClick={()=> navigate('/products')} className=" w-[400px] h-[60px] bg-[#003871] text-white font-[400] rounded-full text-[20px]  justify-center items-center flex  ">Explore All </button>
            </div>
            <div>
                <Carousel slides={slides} otherStyles='  ' />
            </div>
        </div>
    )
}

export default Hero
