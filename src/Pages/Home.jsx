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
            <Testimonials />
            <Footer />
        </div>
    )
}

export default Home
