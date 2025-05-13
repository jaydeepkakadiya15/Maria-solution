import React from 'react'
import '../App.css';
import Header from './Header'
import HeroSection from './Herosection';
import OurServices from './OurServices';
import OurLatest from './OurLatest';
import WhatDO from './WhatDO';
import Counter from './Counter';
import PricingPlan from './PricingPlan';
import ContactInfo from './ContactInfo';
import Footer from './Footer';


const Home = () => {
  return (
    <div>

        <Header></Header>
        
        <HeroSection/>
        
        <OurServices/>

        <OurLatest/>

        <WhatDO/>

        <Counter/>

        <PricingPlan/>

        <ContactInfo/>

        <Footer/>

    </div>
  )
}

export default Home