import React from 'react'
import Navbar from '../components/Navbar'
import BasicTabs from '../components/Tabs'
import logo from '../assets/Images/pistil.png'
import Carousel from '../components/Carousel'
import image2 from '../assets/Images/image 2.png'
import image3 from '../assets/Images/image 3.png'
import image4 from '../assets/Images/image 4.png'
import Offer from '../components/Offer'
import Features from '../components/Features'
import Sponsors from '../components/Sponsors'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'


const Home = () => {
    const slides = [
        { image: logo, overlayText: '',  text2 : 'Pump And Motors' , textBelowArrows: 'We specialize in' },
        { image: image2, overlayText: '',  text2 : 'Pump And Motors' , textBelowArrows: 'We specialize in' },
        { image: image3, overlayText: '',  text2 : 'Pump And Motors' , textBelowArrows: 'We specialize in' },
        { image: image4, overlayText: '',  text2 : 'Pump And Motors' , textBelowArrows: 'We specialize in' },
        // { image: logo, overlayText: 'Second Slide', textBelowArrows: 'Slide 2 Text' },
        // { image: logo, overlayText: 'Third Slide', textBelowArrows: 'Slide 3 Text' },
    ];
    


  return (
    <div>
     <Navbar /> 
     <div className=" md:hidden md:bg-none bg-[#fafafa] block ">
     <Carousel slides={slides} otherStyles='h-[450px] w-[370px]' />
     </div>
     <BasicTabs />
     <div className=" md:hidden block h-[60px] w-full bg-[#fafafa] "></div>
     <div className=" md:hidden block ">
        <Offer />
     </div>
     <div className=" md:hidden block w-full bg-[#fafafa] h-[70px] "></div>
     <div className=" md:hidden md:bg-none block ">
        <div className=" text-center font-[600] bg-[#fafafa] text-[#003871] text-[24px] "> Product Features  </div>
        <Features />
     </div>
     <div className=" md:hidden block h-[40px] w-full bg-[#fafafa] "></div>
     <div className=" md:hidden block  ">
      <Sponsors />
     </div>
     <div className=" md:hidden block w-full h-[60px] bg-[#fafafa] "></div>
     <div className=" md:hidden block ">
      <Testimonials />
     </div>
     <div className=" bg-[#fafafa] w-full h-[50px] md:hidden block "></div>
     <div className=" md:hidden block  ">
      <Footer />
     </div>
     {/* <Features /> */}
    </div>
  )
}

export default Home
