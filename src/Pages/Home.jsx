import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Offer from '../components/Offer'
import Features from '../components/Features'
import Sponsors from '../components/Sponsors'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'
import BasicTabs from '../components/Tabs'

const Home = () => {
    return (
        <div>
            {/* <Navbar /> */}
            {/* <BasicTabs /> */}
            <Hero />
            <Offer />
            <Features />
            <Sponsors />
            <div className=" w-full h-[80px] bg-[#fafafa] md:hidden block "></div>
            <Testimonials />
            <div className=" w-full h-[40px] bg-[#fafafa] md:hidden block "></div>
            <Footer />
        </div>
    )
}

export default Home
