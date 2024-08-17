import React from 'react'
// import Carousel from './Carousel'
import logo from '../assets/Images/pistil.png'
import Carousel from './Carousel'
import image2 from '../assets/Images/image 2.png'
import image3 from '../assets/Images/image 3.png'
import image4 from '../assets/Images/image 4.png'
import Features from './Features'
import Offer from './Offer'
import Sponsors from './Sponsors'
import Testimonials from './Testimonials'
import Footer from './Footer'

const Hero = () => {

    const slides = [
        { image: logo, overlayText: '',  text2 : 'Pump And Motors' , textBelowArrows: 'We specialize in' },
        { image: image2, overlayText: '',  text2 : 'Pump And Motors' , textBelowArrows: 'We specialize in' },
        { image: image3, overlayText: '',  text2 : 'Pump And Motors' , textBelowArrows: 'We specialize in' },
        { image: image4, overlayText: '',  text2 : 'Pump And Motors' , textBelowArrows: 'We specialize in' },
        // { image: logo, overlayText: 'Second Slide', textBelowArrows: 'Slide 2 Text' },
        // { image: logo, overlayText: 'Third Slide', textBelowArrows: 'Slide 3 Text' },
    ];

  return (
    <div className="">
<div className=" flex justify-around items-center p-10 ">
    <div className=" w-[650px]  text-[80px]  font-[800] text-black ">
    We Specialize in <span className=" text-[#005AB8] ">Pump And Motors</span> 
    </div>

<div className=" ">
<Carousel slides={slides}  otherStyles='  '  />
</div>


</div>
<Offer />
<Features />
<Sponsors />
<Testimonials />
<Footer />
</div>
  )
}

export default Hero
